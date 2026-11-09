/**
 * Pure calculation and validation logic for LiveGood landing page.
 */

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  memberPrice: number;
  retailPrice: number;
  popular?: boolean;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface SavingsSummary {
  totalRetail: number;
  totalMember: number;
  totalMonthlySavings: number;
  totalYearlySavings: number;
  netAnnualSavingsWithMembership: number;
  percentageSaved: number;
}

export interface LeadFormData {
  fullName: string;
  email: string;
  whatsapp: string;
  country: string;
  interest: 'products' | 'business' | 'both';
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export const ANNUAL_MEMBERSHIP_COST = 99.95;
export const MONTHLY_MEMBERSHIP_COST = 9.95;

/**
 * Calculates user savings based on selected products and quantities.
 */
export function calculateSavings(
  items: CartItem[],
  productsList: ProductItem[]
): SavingsSummary {
  let totalRetail = 0;
  let totalMember = 0;

  for (const item of items) {
    const product = productsList.find((p) => p.id === item.productId);
    if (product && item.quantity > 0) {
      totalRetail += product.retailPrice * item.quantity;
      totalMember += product.memberPrice * item.quantity;
    }
  }

  const totalMonthlySavings = Math.max(0, totalRetail - totalMember);
  const totalYearlySavings = totalMonthlySavings * 12;
  const netAnnualSavingsWithMembership = Math.max(
    0,
    totalYearlySavings - ANNUAL_MEMBERSHIP_COST
  );
  const percentageSaved =
    totalRetail > 0
      ? Math.round(((totalRetail - totalMember) / totalRetail) * 100)
      : 0;

  return {
    totalRetail: Number(totalRetail.toFixed(2)),
    totalMember: Number(totalMember.toFixed(2)),
    totalMonthlySavings: Number(totalMonthlySavings.toFixed(2)),
    totalYearlySavings: Number(totalYearlySavings.toFixed(2)),
    netAnnualSavingsWithMembership: Number(
      netAnnualSavingsWithMembership.toFixed(2)
    ),
    percentageSaved,
  };
}

/**
 * Format currency with USD formatting
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Validates the lead capture form.
 */
export function validateLeadForm(data: LeadFormData): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Por favor ingresa tu nombre completo.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Ingresa un correo electrónico válido.';
  }

  // Allow numbers, spaces, plus, hyphens, min 7 digits
  const cleanPhone = (data.whatsapp || '').replace(/[^0-9]/g, '');
  if (!cleanPhone || cleanPhone.length < 7) {
    errors.whatsapp = 'Ingresa un número de WhatsApp válido con código de país.';
  }

  if (!data.country || data.country.trim().length < 2) {
    errors.country = 'Por favor selecciona o indica tu país.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
