export interface Product {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  memberPrice: number;
  retailPrice: number;
  competitorBrand: string;
  competitorPrice: number;
  savingsPercentage: number;
  keyBenefit: string;
  badge?: string;
  highlightIngredients: string[];
}

export const PRODUCTS_DATA: Product[] = [
  {
    id: 'super-greens',
    name: 'BioActive Organic Super Greens',
    category: 'Superalimentos & Inmunidad',
    shortDesc: 'Nutrición celular integral con espirulina, chlorella, ashwagandha y enzimas digestivas.',
    memberPrice: 18.00,
    retailPrice: 29.95,
    competitorBrand: 'Athletic Greens (AG1)',
    competitorPrice: 99.00,
    savingsPercentage: 82,
    keyBenefit: 'Salud digestiva, energía constante y refuerzo inmunológico 100% orgánico certificado USDA.',
    badge: 'Más Vendido',
    highlightIngredients: ['Espirulina Orgánica', 'Chlorella', 'Ashwagandha KSM-66', 'Moringa', 'Probióticos'],
  },
  {
    id: 'super-reds',
    name: 'BioActive Organic Super Reds',
    category: 'Salud Cardiovascular',
    shortDesc: 'Óxido nítrico natural para circulación óptima, vitalidad y salud del corazón.',
    memberPrice: 18.00,
    retailPrice: 29.95,
    competitorBrand: 'SuperBeets & Organifi',
    competitorPrice: 40.00,
    savingsPercentage: 55,
    keyBenefit: 'Aumenta el flujo sanguíneo, la resistencia física y la energía sin cafeína añadida.',
    badge: 'Favorito',
    highlightIngredients: ['Remolacha Orgánica', 'Granada', 'Bayas de Acai', 'Aronia', 'Extracto de Uva'],
  },
  {
    id: 'multivitamin-complete',
    name: 'BioActive Complete Multivitamin',
    category: 'Salud Diaria',
    shortDesc: '24 vitaminas y minerales de alta biodisponibilidad quelada para máxima absorción.',
    memberPrice: 9.95,
    retailPrice: 17.95,
    competitorBrand: 'Marcas Comerciales Prémium',
    competitorPrice: 35.00,
    savingsPercentage: 72,
    keyBenefit: 'Cubre todas las deficiencias nutricionales diarias con ingredientes quelados de rápida absorción.',
    badge: 'Básico Esencial',
    highlightIngredients: ['Vitaminas A, C, D3, E', 'Complejo B Completo', 'Zinc Quelado', 'Magnesio', 'Biotina'],
  },
  {
    id: 'ultra-magnesium',
    name: 'Ultra Magnesium Complex',
    category: 'Sueño & Recuperación',
    shortDesc: 'Fórmula dual de Glicinato y Gluconato de magnesio para músculos, nervios y descanso profundo.',
    memberPrice: 8.95,
    retailPrice: 16.50,
    competitorBrand: 'Calm / Solgar Magnesium',
    competitorPrice: 29.00,
    savingsPercentage: 69,
    keyBenefit: 'Apoya más de 300 reacciones enzimáticas, relaja el sistema nervioso y promueve sueño reparador.',
    badge: 'Alta Demanda',
    highlightIngredients: ['Bisglicinato de Magnesio', 'Gluconato de Magnesio', 'Alta Biodisponibilidad'],
  },
  {
    id: 'cbd-oil-750',
    name: 'Full Spectrum CBD Oil 750mg',
    category: 'Equilibrio & Calma',
    shortDesc: 'Aceite de cáñamo de cultivo estadounidense con base de aceite portador MCT de coco orgánico.',
    memberPrice: 18.00,
    retailPrice: 28.00,
    competitorBrand: "Charlotte's Web / Young Living",
    competitorPrice: 79.95,
    savingsPercentage: 77,
    keyBenefit: 'Alivio del estrés diario, modulación inflamatoria y apoyo neurológico natural certificado.',
    badge: 'Ahorro Gigante',
    highlightIngredients: ['Cáñamo Orgánico de EE.UU.', 'Aceite MCT Orgánico', '0% THC detectable'],
  },
  {
    id: 'mushroom-coffee',
    name: 'Organic Mushroom Coffee',
    category: 'Energía & Concentración',
    shortDesc: 'Café orgánico tostado enriquecido con Melena de León, Chaga, Reishi y Cordyceps.',
    memberPrice: 17.95,
    retailPrice: 28.95,
    competitorBrand: 'Four Sigmatic / Ryze',
    competitorPrice: 40.00,
    savingsPercentage: 55,
    keyBenefit: 'Claridad mental y enfoque sin nerviosismo, reflujo gástrico ni bajones de energía.',
    badge: 'Gourmet Saludable',
    highlightIngredients: ['Café Arábica Orgánico', 'Melena de León', 'Reishi', 'Chaga', 'Cordyceps'],
  },
  {
    id: 'factor4',
    name: 'Factor4 Advanced Inflammation',
    category: 'Salud Articular & Celular',
    shortDesc: 'El suplemento antiinflamatorio más potente con Aceite de Pescado, Cúrcuma, CoQ10 y Ajo.',
    memberPrice: 18.50,
    retailPrice: 29.95,
    competitorBrand: 'Fórmulas Médicas Articulares',
    competitorPrice: 50.00,
    savingsPercentage: 63,
    keyBenefit: 'Combate la inflamación crónica sistémica, raíz de la mayoría de problemas de salud modernos.',
    badge: 'Fórmula Médica',
    highlightIngredients: ['Omega 3 EPA/DHA', 'Curcumina 95%', 'Coenzima Q10', 'Extracto de Ajo'],
  },
  {
    id: 'essential-aminos',
    name: 'Essential Aminos (Electrolitos + BCAA)',
    category: 'Rendimiento & Masa Muscular',
    shortDesc: 'Aminoácidos esenciales libres con electrolitos puros para hidratación y síntesis proteica.',
    memberPrice: 19.95,
    retailPrice: 34.95,
    competitorBrand: 'Amino Lean / Thorne Aminos',
    competitorPrice: 45.00,
    savingsPercentage: 56,
    keyBenefit: 'Mantiene la masa muscular magra, acelera la recuperación deportiva y aporta energía celular limpia.',
    badge: 'Deporte & Vida',
    highlightIngredients: ['BCAAs 2:1:1', 'EAA Completos', 'Electrolitos de Agua de Coco'],
  },
];

export const MODEL_COMPARISON_ROWS = [
  {
    feature: 'Precio de los Productos',
    traditional: 'Inflados entre 500% y 1,000% para financiar 8-12 niveles de comisiones intermedias.',
    livegood: 'Precios de costo directo de fábrica (hasta un 75% más económicos). Calidad prémium sin sobreprecios.',
  },
  {
    feature: 'Requisitos de Compra Mensual',
    traditional: 'Autoconsumo mensual forzoso ($100 - $250/mes) para no perder tu rango o comisiones.',
    livegood: 'Cero compras forzadas ni autoenvíos obligatorios. Compras solo lo que quieres y cuando lo necesitas.',
  },
  {
    feature: 'Inversión de Entrada',
    traditional: 'Paquetes de inicio costosos de $200 hasta $2,000 con productos acumulados en tu hogar.',
    livegood: 'Membresía club accesible: $9.95 al mes (o $99.95 anual con 2 meses gratis). Sin barreras.',
  },
  {
    feature: 'Retención de Clientes',
    traditional: 'Inferior al 15% tras 90 días debido a precios insostenibles para el consumidor final.',
    livegood: 'Supera el 85% de retención porque los miembros ahorran dinero real en productos que aman.',
  },
  {
    feature: 'Garantía de Satisfacción',
    traditional: 'Trámites engorrosos, solo productos sellados o sin opción de reembolso real.',
    livegood: 'Garantía total de 90 días con botella vacía: si no te encanta, devuelves el envase vacío y te devuelven tu dinero.',
  },
  {
    feature: 'Sistema de Expansión',
    traditional: 'Presionar a amigos y familiares, listas de contactos en papel y reuniones presenciales.',
    livegood: 'Sistema digital global automatizado con página personalizada, Powerline en tiempo real y embudos listos.',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Dra. Elena Valenzuela',
    role: 'Médica Especialista en Nutrición Funcional',
    location: 'Madrid, España',
    content:
      'Cuando revisé los certificados de análisis de laboratorio independientes de los Super Greens y el Factor4 de LiveGood, quedé impresionada por su pureza. Que un paciente pueda acceder a esta calidad por menos de $18 es una auténtica revolución médica.',
    metric: 'Ahorro personal: $120/mes',
  },
  {
    name: 'Marcos Benítez',
    role: 'Emprendedor Digital & Miembro Diamante',
    location: 'Bogotá, Colombia',
    content:
      'Llevaba 8 años en redes de mercadeo tradicionales frustrado porque la gente se iba al no poder sostener recompras de $150 mensuales. En LiveGood nadie se sale porque aquí la gente no compra para calificar, compra para ahorrar.',
    metric: 'Equipo global: 3,400+ miembros',
  },
  {
    name: 'Patricia Morales',
    role: 'Madre de Familia & Consumidora Frecuente',
    location: 'Guadalajara, México',
    content:
      'Toda mi familia toma las vitaminas, el magnesio y el café orgánico con hongos adaptógenos. Pasamos de gastar casi $240 al mes en tiendas de suplementos a apenas $64 en LiveGood. El ahorro mensual paga el colegio de mis hijos.',
    metric: 'Ahorro anual comprobado: $2,110',
  },
];

export const FAQS = [
  {
    question: '¿Qué es exactamente LiveGood y cómo funciona su membresía?',
    answer:
      'LiveGood es un club de compras de bienestar y salud al estilo de Costco o Amazon Prime. Por una cuota mensual de solo $9.95 USD (o $99.95 anual), obtienes acceso directo a productos nutricionales orgánicos y prémium a precios mayoristas de fábrica, ahorrando entre un 50% y un 75% respecto a tiendas y empresas tradicionales.',
  },
  {
    question: '¿Tengo obligación de comprar productos todos los meses o hacer autoenvíos?',
    answer:
      'Rotundamente NO. En LiveGood nunca se exige una compra mínima mensual, ni hay autoenvíos obligatorios ni penalizaciones. Compras únicamente lo que necesitas, cuando tú lo decidas. Tu membresía sigue activa independientemente de cuándo compres.',
  },
  {
    question: '¿Cómo son los envíos internacionales y a qué países llegan?',
    answer:
      'LiveGood realiza envíos directos a más de 200 países y territorios en todo el mundo a través de empresas logísticas líderes (DHL, FedEx, USPS internacional). Los paquetes se despachan directamente desde los almacenes centrales en EE.UU. con número de rastreo en tiempo real.',
  },
  {
    question: '¿En qué consiste la garantía de 90 días con botella vacía?',
    answer:
      'Confiamos tanto en la pureza y efectividad de nuestras fórmulas que ofrecemos 90 días completos de garantía. Si usas todo el frasco y no notas una mejora significativa en tu energía y bienestar, puedes enviar la botella completamente vacía y te reembolsaremos el 100% del precio del producto, sin preguntas complicadas.',
  },
  {
    question: '¿Es obligatorio invitar a personas o hacer negocio para ser cliente?',
    answer:
      'Para nada. Más del 70% de las personas son simplemente miembros consumidores felices que disfrutan de suplementos de la máxima calidad a precio de fábrica. Sin embargo, si deseas convertirte en afiliado (un único pago de $40 USD de activación), tienes acceso al plan de compensación de 6 vías y al sistema de matriz forzada 2x15 para generar ingresos pasivos.',
  },
  {
    question: '¿Qué certificados de calidad respaldan a los suplementos de LiveGood?',
    answer:
      'Todos los productos se fabrican en instalaciones certificadas cGMP en Estados Unidos, con ingredientes orgánicos certificados USDA cuando aplica, no transgénicos (Non-GMO), libres de gluten, soja y rellenos artificiales. Además, cada lote cuenta con un Certificado de Análisis (COA) de laboratorio independiente accesible públicamente.',
  },
];
