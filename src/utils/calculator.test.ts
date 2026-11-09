import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateSavings,
  formatCurrency,
  validateLeadForm,
  ProductItem,
} from './calculator';

const mockProducts: ProductItem[] = [
  {
    id: 'super-greens',
    name: 'Organic Super Greens',
    category: 'Superfoods',
    shortDesc: 'Bioactive greens',
    memberPrice: 18.0,
    retailPrice: 99.0, // Competitor price e.g. AG1
  },
  {
    id: 'multivitamin',
    name: 'BioActive Complete Multivitamin',
    category: 'Daily Health',
    shortDesc: 'Complete micronutrient',
    memberPrice: 9.95,
    retailPrice: 35.0,
  },
];

test('calculateSavings computes monthly, yearly and net annual savings correctly', () => {
  const cart = [
    { productId: 'super-greens', quantity: 1 },
    { productId: 'multivitamin', quantity: 2 },
  ];

  const result = calculateSavings(cart, mockProducts);

  // Total retail: 99 + 2*35 = 169
  // Total member: 18 + 2*9.95 = 37.90
  // Monthly savings: 169 - 37.90 = 131.10
  // Yearly savings: 131.10 * 12 = 1573.20
  // Net annual savings after $99.95 membership: 1573.20 - 99.95 = 1473.25
  // Percentage: round((131.10 / 169) * 100) = 78%

  assert.equal(result.totalRetail, 169.0);
  assert.equal(result.totalMember, 37.9);
  assert.equal(result.totalMonthlySavings, 131.1);
  assert.equal(result.totalYearlySavings, 1573.2);
  assert.equal(result.netAnnualSavingsWithMembership, 1473.25);
  assert.equal(result.percentageSaved, 78);
});

test('calculateSavings handles empty cart gracefully', () => {
  const result = calculateSavings([], mockProducts);
  assert.equal(result.totalRetail, 0);
  assert.equal(result.totalMember, 0);
  assert.equal(result.totalMonthlySavings, 0);
  assert.equal(result.percentageSaved, 0);
});

test('formatCurrency formats standard USD prices', () => {
  assert.equal(formatCurrency(18.5), '$18.50');
  assert.equal(formatCurrency(9.95), '$9.95');
});

test('validateLeadForm rejects incomplete form and accepts valid payload', () => {
  const invalid = validateLeadForm({
    fullName: '',
    email: 'bad-email',
    whatsapp: '123',
    country: '',
    interest: 'both',
  });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.fullName);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.whatsapp);
  assert.ok(invalid.errors.country);

  const valid = validateLeadForm({
    fullName: 'Carlos Rodriguez',
    email: 'carlos@example.com',
    whatsapp: '+34 612 345 678',
    country: 'España',
    interest: 'both',
  });
  assert.equal(valid.isValid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});
