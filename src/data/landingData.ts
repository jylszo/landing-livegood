export const AFFILIATE_LINK = 'https://www.livegood.com/JILSZO';

export interface Testimonial {
  name: string;
  rank: 'DIAMANTE' | 'PLATA' | 'BRONCE';
  rankColor: string;
  before: string;
  quote: string;
  location: string;
  income: string;
}

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: 'Pedro Suárez',
    rank: 'DIAMANTE',
    rankColor: 'bg-blue-950/80 text-blue-400 border-blue-500/40',
    before: 'Cansado de trabajar 12 horas sin ver crecimiento real.',
    quote:
      'Invertí $40 dólares. El primer mes recuperé la inversión. Hoy es mi ingreso principal y trabajo desde la comodidad de mi hogar o desde cualquier parte del mundo.',
    location: 'Bogotá, Colombia',
    income: '$4,200+ USD/mes',
  },
  {
    name: 'Dra. Esther Molinares Rodríguez',
    rank: 'PLATA',
    rankColor: 'bg-slate-800 text-slate-200 border-slate-400/50',
    before: 'Escéptica de las redes tradicionales por los precios inflados.',
    quote:
      'Descubrí un modelo de salud integral con precios reales. Hoy tengo un negocio internacional que me genera ingresos incluso mientras descanso.',
    location: 'Ciudad de México, México',
    income: '$1,850+ USD/mes',
  },
  {
    name: 'Verónica Sepúlveda',
    rank: 'BRONCE',
    rankColor: 'bg-amber-950/80 text-amber-400 border-amber-600/40',
    before: 'No quería vender nada por catálogo ni presionar a mi familia.',
    quote:
      'Ahorro $100/mes en mis suplementos y genero un ingreso constante. Los productos se recomiendan solos, no tuve que convencer a nadie.',
    location: 'Santiago, Chile',
    income: '$950+ USD/mes',
  },
];

export const FOR_WHOM_ITEMS = [
  {
    title: 'Personas comprometidas con su salud y bienestar',
    desc: 'Que consumen vitaminas, magnesio, colágeno, superalimentos o café orgánico y no quieren seguir pagando sobreprecios abusivos en farmacias o tiendas.',
  },
  {
    title: 'Consumidores cansados de modelos antiguos y autoenvíos',
    desc: 'Personas hartas de empresas que te obligan a comprar $150-$200 al mes para mantener un descuento o que te llenan el garaje de cajas que nadie compra.',
  },
  {
    title: 'Emprendedores que buscan ingresos reales desde casa',
    desc: 'Que desean monetizar sus redes sociales o círculo con un producto que la gente genuinamente ama y agradece porque les ahorra dinero real.',
  },
  {
    title: 'Profesionales de la salud, nutricionistas y entrenadores',
    desc: 'Que exigen ingredientes de grado farmacéutico, 100% orgánicos, certificados cGMP y con análisis de laboratorio de terceros públicos (COA).',
  },
];

export const OFFER_PILLARS = [
  {
    number: '01',
    title: 'Membresía Inteligente tipo Costco / Amazon Prime',
    desc: 'Accede a todo el catálogo a precio mayorista puro de fábrica por tan solo $9.95 USD al mes (o $99.95 anual con 2 meses gratis). Sin intermediarios.',
  },
  {
    number: '02',
    title: 'Hasta un 75% de Ahorro Real Comprobado',
    desc: 'Suplementos orgánicos que en otras marcas cuestan $40, $70 o $99 USD, en LiveGood los adquieres por $9.95 a $18.00 USD. Misma o superior pureza.',
  },
  {
    number: '03',
    title: 'Cero Compras Obligatorias ni Cuotas Ocultas',
    desc: 'Compra solo cuando necesites reponer tus productos. Nadie te fuerza a consumir mensualmente ni pierdes tu membresía si decides no pedir.',
  },
  {
    number: '04',
    title: 'Garantía Total de 90 Días con Frasco Vacío',
    desc: 'Usa todo el frasco hasta la última gota. Si no notas resultados contundentes, devuelves el envase vacío y recibes el 100% de tu dinero sin preguntas.',
  },
];

export const FAQS_DATA = [
  {
    question: '¿Qué es exactamente LiveGood y cómo funciona la membresía?',
    answer:
      'LiveGood es un club global de compras de salud y bienestar. Al igual que pagas una cuota en Costco o Amazon Prime para acceder a precios de mayorista, con LiveGood pagas $9.95 USD al mes y adquieres suplementos prémium orgánicos a precio de fábrica, ahorrando hasta un 75%.',
  },
  {
    question: '¿Tengo que comprar productos de forma obligatoria cada mes?',
    answer:
      'Absolutamente NO. No existen autoenvíos forzosos, ni compras mínimas mensuales ni penalizaciones. Compras únicamente lo que tú y tu familia necesiten, en el momento que ustedes decidan.',
  },
  {
    question: '¿Cómo funcionan los envíos a mi país?',
    answer:
      'LiveGood realiza despachos directos a más de 200 países a través de paqueterías globales con número de seguimiento satelital internacional en tiempo real.',
  },
  {
    question: '¿Cómo funciona la garantía de 90 días con frasco vacío?',
    answer:
      'Es la garantía más transparente de la industria: pruebas el producto durante 3 meses enteros. Si por cualquier motivo no quedas fascinado, envías el frasco vacío y te reembolsan el 100% del valor del producto.',
  },
  {
    question: '¿Puedo generar ingresos con LiveGood?',
    answer:
      'Sí. Con un pago único de activación de afiliado de $40 USD, desbloqueas el plan de compensación de 6 vías, el sistema de matriz forzada 2x15 con derrame global y comisiones semanales de inicio rápido del 50%.',
  },
  {
    question: '¿Por qué es importante asegurar mi posición ahora mismo?',
    answer:
      'El sistema Powerline global de LiveGood realiza un corte semanal cada jueves a medianoche (hora del Este de EE.UU.). Cada persona que se registra en el mundo después de ti se ubica debajo en la línea de poder.',
  },
];
