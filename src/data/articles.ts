export interface ArticleSubSection {
  h3: string;
  content: string;
  bullets?: string[];
}

export interface ArticleSection {
  h2: string;
  intro: string;
  subSections: ArticleSubSection[];
}

export interface ArticleItem {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  category: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  searchIntent: string;
  keywordHypotheses: string[];
  author: {
    name: string;
    role: string;
    profileUrl: string;
  };
  relatedServiceSlug: string;
  relatedServiceTitle: string;
  secondaryServiceSlug: string;
  secondaryServiceTitle: string;
  sections: ArticleSection[];
  keyTakeaways: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  whatsappMessage: string;
}

export const ARTICLES_DATA: ArticleItem[] = [
  {
    slug: 'kpis-dashboards-retail-rentabilidad-sucursales',
    title: 'KPIs y Dashboards para Retail: Cómo Medir Márgenes, Unidades y Rendimiento por Sucursal',
    seoTitle: 'KPIs y Dashboards para Retail: Margen, Unidades y Sucursales | MORPHO',
    seoDescription:
      'Guía práctica de Business Intelligence para retail: qué indicadores mirar más allá de la facturación bruta, cómo medir unidades, kilogramos, margen de contribución y rotación de inventario.',
    summary:
      'Por qué mirar únicamente la facturación mensual engaña a los comercios minoristas y cómo estructurar un tablero ejecutivo que cruce ventas, unidades físicas, kilogramos, márgenes y rotación de stock por sucursal y canal.',
    category: 'Business Intelligence & Retail',
    publishedAt: '2025-02-10',
    updatedAt: '2025-02-15',
    readingTime: '7 min de lectura',
    searchIntent:
      'Informativa / Transaccional: dueños y gerentes de retail que buscan qué KPIs y tableros implementar para controlar sucursales, inventario y rentabilidad real.',
    keywordHypotheses: [
      'kpis para retail y sucursales (hipótesis pendiente de validación de volumen)',
      'dashboard comercial para comercios minoristas (hipótesis pendiente de validación)',
      'cómo medir rentabilidad y margen en retail (hipótesis pendiente de validación)',
    ],
    author: {
      name: 'Ronan Lavorato',
      role: 'Founder & Lead Marketing / BI Strategist en MORPHO',
      profileUrl: '/sobre-mi',
    },
    relatedServiceSlug: 'inteligencia-de-negocios-retail',
    relatedServiceTitle: 'Inteligencia de Negocios para Retail',
    secondaryServiceSlug: 'diagnostico-comercial-benchmark',
    secondaryServiceTitle: 'Diagnóstico Comercial y Benchmark',
    keyTakeaways: [
      'La facturación nominal sin cruce con unidades o kilogramos oculta caídas de volumen real en contextos inflacionarios.',
      'El margen de contribución por categoría y canal debe descontar comisiones financieras, promociones bancarias, logística y mermas.',
      'Un buen dashboard de retail permite comparar sucursales con métricas normalizadas: ticket promedio, unidades por ticket (UPT) y margen neto aportado.',
    ],
    sections: [
      {
        h2: 'El espejismo de la facturación bruta en el comercio minorista',
        intro:
          'En la mayoría de las pymes y cadenas de retail, el cierre de mes se evalúa mirando un único número: el total facturado en el sistema POS o ERP. Sin embargo, un local puede batir récords de facturación nominal y al mismo tiempo estar perdiendo dinero o achicando su volumen real de operación.',
        subSections: [
          {
            h3: 'Facturación nominal vs. Volumen físico (Unidades y Kilogramos)',
            content:
              'Cuando los precios cambian o se altera el mix de productos vendidos, evaluar solo moneda corriente distorsiona el análisis. En rubros como alimentos, tiendas de mascotas, cafeterías de especialidad, pinturerías o consumo masivo, medir kilogramos, litros o unidades despachadas revela la salud real de la demanda.',
            bullets: [
              'Si la facturación sube un 15% pero los kilogramos o unidades caen un 12%, el negocio está perdiendo tracción física de clientes.',
              'Medir precio promedio por unidad o por kilo permite detectar rápidamente si las promociones están erosionando el valor del ticket.',
            ],
          },
          {
            h3: 'La diferencia entre margen de marcación (Mark-up) y margen de contribución real',
            content:
              'Muchos comercios aplican un porcentaje de marcación sobre el costo de lista del proveedor y asumen que esa es su ganancia. Al integrar Business Intelligence, cruzamos cada venta con descuentos por pago en efectivo, costos de financiación con tarjeta, comisiones de plataformas y costos logísticos para obtener el margen de contribución real.',
          },
        ],
      },
      {
        h2: 'Los 6 indicadores esenciales en un Dashboard Ejecutivo de Retail',
        intro:
          'Un tablero útil no es el que tiene cuarenta gráficos decorativos, sino el que responde en menos de cinco minutos qué decisiones tomar cada lunes.',
        subSections: [
          {
            h3: '1. Cantidad de Tickets, Ticket Promedio y Unidades por Ticket (UPT)',
            content:
              'La facturación de cualquier sucursal o tienda online es el resultado exacto de multiplicar Cantidad de Transacciones × Unidades por Ticket × Precio Promedio por Unidad. Separar estas tres palancas permite saber si una caída de ventas se debe a menos flujo de clientes en la puerta o a una falta de venta sugerida en el mostrador.',
          },
          {
            h3: '2. Rendimiento comparativo por sucursal y por canal',
            content:
              'Comparar locales únicamente por venta total suele ser injusto si tienen distinto tamaño o flujo peatonal. Al analizar conversión, margen porcentual y evolución intermensual por sucursal y canal (salón, WhatsApp, tienda web, Mercado Libre), aparecen con claridad las mejores prácticas replicables.',
          },
          {
            h3: '3. Matriz ABC de Inventario y Días de Cobertura',
            content:
              'El capital de trabajo suele quedar atrapado en el 60% del catálogo que aporta menos del 10% de las ventas. Clasificar los SKUs en categorías A (alta rotación y margen), B (intermedios) y C (cola larga o inmovilizados) permite ajustar las compras a proveedores con datos matemáticos.',
          },
        ],
      },
    ],
    ctaTitle: '¿Querés transformar las planillas de tu comercio en un tablero de decisiones en vivo?',
    ctaDescription:
      'Revisamos tus fuentes de datos actuales y diseñamos un sistema de Business Intelligence adaptado a tus sucursales, canales e inventario.',
    ctaButtonText: 'VER SERVICIO DE BI PARA RETAIL',
    whatsappMessage:
      '¡Hola Ronan! Leí tu artículo sobre KPIs y Dashboards para Retail y me gustaría consultar por el servicio de Inteligencia de Negocios.',
  },
  {
    slug: 'como-calcular-rentabilidad-comisiones-mercado-libre',
    title: 'Cómo Empezar a Vender en Mercado Libre sin Perder Margen en Comisiones y Envíos',
    seoTitle: 'Cómo Calcular Rentabilidad y Comisiones en Mercado Libre | MORPHO',
    seoDescription:
      'Aprende a estructurar precios, costos fijos, envíos gratis y catálogo antes de publicar en Mercado Libre para construir un canal rentable desde el día uno.',
    summary:
      'Análisis técnico para empresas y comercios que quieren iniciar o profesionalizar su operación en Mercado Libre: cómo modelar cargos por venta, umbrales de envío, estrategia de packs y posicionamiento de publicaciones.',
    category: 'E-commerce & Marketplaces',
    publishedAt: '2025-02-12',
    updatedAt: '2025-02-16',
    readingTime: '8 min de lectura',
    searchIntent:
      'Informativa / Comercial: comercios y pymes que buscan entender cómo vender en Mercado Libre cuidando sus costos y márgenes reales.',
    keywordHypotheses: [
      'cómo calcular rentabilidad en mercado libre (hipótesis pendiente de validación)',
      'comisiones y costos de envío mercado libre empresas (hipótesis pendiente de validación)',
      'estrategia para empezar a vender en mercado libre (hipótesis pendiente de validación)',
    ],
    author: {
      name: 'Ronan Lavorato',
      role: 'Founder & Lead Marketing / E-commerce Strategist en MORPHO',
      profileUrl: '/sobre-mi',
    },
    relatedServiceSlug: 'vender-en-mercado-libre',
    relatedServiceTitle: 'Consultoría para Vender en Mercado Libre',
    secondaryServiceSlug: 'inteligencia-de-negocios-retail',
    secondaryServiceTitle: 'Inteligencia de Negocios para Retail',
    keyTakeaways: [
      'Trasladar el precio de mostrador directamente a Mercado Libre suele destruir el margen neto por el impacto de cargos fijos unitarios y envíos.',
      'La ingeniería de catálogo (packs, kits y combos) es la herramienta más efectiva para superar el umbral de envío gratis diluyendo costos fijos.',
      'El algoritmo premia conversión + velocidad logística + reputación: publicar menos productos pero perfectamente optimizados supera a subir miles de SKUs sin ficha técnica.',
    ],
    sections: [
      {
        h2: 'Por qué fracasan las empresas que abren Mercado Libre sin una matriz de costos',
        intro:
          'Mercado Libre concentra la mayor intención de compra activa de la región, pero no es una vidriera gratuita: es un canal transaccional con reglas financieras y logísticas propias. El error número uno al ingresar es cargar el catálogo completo con precios de tienda física.',
        subSections: [
          {
            h3: 'La anatomía real de los costos de una publicación (Clásica vs. Premium)',
            content:
              'En cada operación dentro de la plataforma intervienen múltiples variables que deben calcularse por anticipado en una matriz de unit economics:',
            bullets: [
              'Porcentaje de comisión según la categoría específica del producto y el tipo de exposición (Clásica o Premium con cuotas).',
              'Costo fijo adicional por unidad vendida en productos que se encuentran por debajo del umbral de envío gratuito.',
              'Costo de Mercado Envíos a cargo del vendedor en productos que superan el umbral obligatorio, ponderado según tu nivel de reputación.',
              'Retenciones e impuestos asociados a la liquidación en Mercado Pago y el costo financiero del plazo de disponibilidad del dinero.',
            ],
          },
          {
            h3: 'Estrategia de Packs y Combos para proteger la utilidad neta',
            content:
              'Cuando un producto individual tiene un ticket bajo, el cargo fijo por unidad puede representar más del 20% del precio. Al diseñar packs de consumo recurrente (por ejemplo, pack por 3 o kit complementario), llevás el ticket a un tramo rentable donde el costo logístico se absorbe una sola vez.',
          },
        ],
      },
      {
        h2: 'Arquitectura de Publicaciones y Operación para Ganar Posicionamiento Orgánico',
        intro:
          'El motor de búsqueda interno de Mercado Libre ordena los resultados priorizando las publicaciones que tienen mayor probabilidad de concretar una venta sin generar reclamos posteriores.',
        subSections: [
          {
            h3: 'Títulos con intención de búsqueda y Fichas Técnicas al 100%',
            content:
              'Los compradores buscan combinando producto, marca, especificación y uso. Completar cada atributo técnico de la ficha permite aparecer cuando el usuario filtra por características en la barra lateral, donde la tasa de conversión se multiplica.',
          },
          {
            h3: 'Logística (Colecta, Flex y Full) como motor comercial',
            content:
              'La promesa de entrega ("Llega hoy" o "Llega mañana") es hoy el principal factor de desempate frente a un competidor con precio similar. Planificar qué artículos despachar por Mercado Envíos Flex en tu zona de cobertura y qué productos estrella enviar a las bodegas de Full define el techo de crecimiento de la cuenta.',
          },
        ],
      },
    ],
    ctaTitle: '¿Querés iniciar o profesionalizar tu canal de Mercado Libre con números claros?',
    ctaDescription:
      'Armamos tu matriz de costos y precios, estructuramos el catálogo ganador y dejamos lista la operación comercial de tu cuenta.',
    ctaButtonText: 'CONOCER LA CONSULTORÍA MERCADO LIBRE',
    whatsappMessage:
      '¡Hola Ronan! Leí tu artículo sobre rentabilidad en Mercado Libre y quiero consultar por la consultoría para mi negocio.',
  },
  {
    slug: 'como-hacer-benchmark-comercial-detectar-fugas-embudo',
    title: 'Diagnóstico Comercial y Benchmark: Cómo Detectar por Qué tu Negocio No Convierte como Debería',
    seoTitle: 'Cómo Hacer un Diagnóstico Comercial y Benchmark de Competencia | MORPHO',
    seoDescription:
      'Metodología paso a paso para auditar el sistema comercial de tu empresa, comparar tu oferta y precios frente a la competencia e identificar fugas en el embudo de ventas.',
    summary:
      'Antes de aumentar el presupuesto publicitario o aplicar descuentos a ciegas, aprendé cómo auditar las fugas reales de tu embudo comercial y evaluar objetivamente tu posición competitiva en el mercado.',
    category: 'Estrategia & Conversión',
    publishedAt: '2025-02-14',
    updatedAt: '2025-02-18',
    readingTime: '7 min de lectura',
    searchIntent:
      'Informativa / Diagnóstico: directores y dueños de pymes que buscan entender por qué sus ventas se estancaron o por qué su tasa de conversión es baja.',
    keywordHypotheses: [
      'cómo hacer un diagnóstico comercial de una empresa (hipótesis pendiente de validación)',
      'benchmark comercial y análisis de competencia (hipótesis pendiente de validación)',
      'cómo detectar fugas en el embudo de ventas (hipótesis pendiente de validación)',
    ],
    author: {
      name: 'Ronan Lavorato',
      role: 'Founder & Lead Marketing Strategist en MORPHO',
      profileUrl: '/sobre-mi',
    },
    relatedServiceSlug: 'diagnostico-comercial-benchmark',
    relatedServiceTitle: 'Diagnóstico Comercial y Benchmark',
    secondaryServiceSlug: 'adquisicion-y-ventas-b2c',
    secondaryServiceTitle: 'Modelo de Adquisición y Ventas B2C',
    keyTakeaways: [
      'Aumentar el tráfico pago sobre un embudo con fricciones solo acelera la pérdida de presupuesto publicitario.',
      'Un benchmark efectivo no consiste en copiar a la competencia, sino en entender bajo qué criterios te está comparando el comprador.',
      'Priorizar las mejoras en una matriz Impacto vs. Viabilidad evita parálisis operativa y genera retorno en las primeras semanas.',
    ],
    sections: [
      {
        h2: 'Síntomas de que tu empresa necesita una auditoría comercial antes de invertir más',
        intro:
          'Cuando el crecimiento se detiene, la reacción instintiva suele ser cambiar de agencia publicitaria o bajar los precios. Sin embargo, en la mayoría de las auditorías comerciales descubrimos que el tráfico sí llega, pero se pierde por desconexiones internas del sistema.',
        subSections: [
          {
            h3: 'Las 3 fugas silenciosas más frecuentes en pymes y e-commerce',
            content:
              'Al mapear el recorrido real del cliente desde el primer impacto hasta el pago, suelen aparecer tres puntos críticos de pérdida:',
            bullets: [
              'Fricción de oferta y confianza en la página de destino: promesas confusas, falta de prueba social verificable o costos de envío ocultos hasta el último paso.',
              'Demora y pasividad en la atención inicial: leads que escriben por WhatsApp con intención de compra alta y reciben respuesta tres horas después sin preguntas de calificación.',
              'Ausencia total de secuencias de recuperación: carritos abandonados o cotizaciones enviadas que jamás reciben un segundo o tercer contacto estructurado.',
            ],
          },
          {
            h3: 'Cómo ejecutar un Benchmark Competitivo accionable',
            content:
              'Un benchmark serio evalúa la experiencia real de compra en tus 5 competidores principales: qué gancho usan en sus anuncios (Meta Ad Library), qué claridad tiene su propuesta de valor, qué facilidades de pago o envío ofrecen, cuánto tardan en responder una consulta y cómo justifican su precio.',
          },
        ],
      },
      {
        h2: 'De los hallazgos a la acción: La Matriz de Priorización Comercial',
        intro:
          'Un diagnóstico que entrega cien páginas de observaciones sin jerarquía paraliza al equipo. La clave metodológica de MORPHO consiste en ordenar cada oportunidad según dos ejes objetivos.',
        subSections: [
          {
            h3: 'Impacto en Facturación Neta vs. Esfuerzo de Implementación',
            content:
              'Clasificamos cada hallazgo en victorias rápidas (ajustes de oferta, tiempos de respuesta, activación de recuperación de carritos o corrección de tracking que se ejecutan en menos de 15 días) y proyectos estructurales de mediano plazo.',
          },
        ],
      },
    ],
    ctaTitle: '¿Querés una auditoría externa y objetiva de tu sistema comercial?',
    ctaDescription:
      'Ejecutamos un Diagnóstico Comercial y Benchmark completo de tu negocio para identificar dónde están hoy tus mayores oportunidades de facturación.',
    ctaButtonText: 'SOLICITAR DIAGNÓSTICO COMERCIAL',
    whatsappMessage:
      '¡Hola Ronan! Leí tu artículo sobre Diagnóstico Comercial y Benchmark y me gustaría evaluar una auditoría para mi empresa.',
  },
  {
    slug: 'estructura-ventas-b2c-adquisicion-crm-conversion',
    title: 'Cómo Diseñar un Modelo de Adquisición y Estructura de Ventas B2C que Convierta Todos los Días',
    seoTitle: 'Modelo de Adquisición y Estructura de Ventas B2C con CRM | MORPHO',
    seoDescription:
      'Cómo conectar tus campañas de Meta y Google Ads con un proceso de ventas B2C ordenado en CRM y WhatsApp para reducir el CAC y multiplicar la tasa de cierre.',
    summary:
      'El método completo para alinear marketing de adquisición y equipos de ventas B2C: desde la estructura de campañas y atribución hasta el pipeline en CRM, velocidad de contacto y cadencias de seguimiento.',
    category: 'Adquisición & Ventas B2C',
    publishedAt: '2025-02-16',
    updatedAt: '2025-02-19',
    readingTime: '8 min de lectura',
    searchIntent:
      'Informativa / Comercial: líderes de negocios B2C que necesitan escalar su captación de clientes y profesionalizar el proceso de cierre de su equipo de ventas.',
    keywordHypotheses: [
      'estructura de ventas b2c y adquisición de clientes (hipótesis pendiente de validación)',
      'cómo organizar un equipo de ventas por whatsapp y crm (hipótesis pendiente de validación)',
      'mejorar conversión de leads de meta ads a ventas (hipótesis pendiente de validación)',
    ],
    author: {
      name: 'Ronan Lavorato',
      role: 'Founder & Lead Growth Strategist en MORPHO',
      profileUrl: '/sobre-mi',
    },
    relatedServiceSlug: 'adquisicion-y-ventas-b2c',
    relatedServiceTitle: 'Modelo de Adquisición y Estructura de Ventas B2C',
    secondaryServiceSlug: 'objeciones-y-contratacion-comercial',
    secondaryServiceTitle: 'Manejo de Objeciones y Contratación Comercial',
    keyTakeaways: [
      'Generar leads baratos sin intención ni filtro satura a los vendedores y empeora la rentabilidad global del sistema.',
      'Reducir el tiempo de primer contacto (Speed-to-Lead) a menos de 10 minutos en horario comercial puede duplicar la tasa de conversación efectiva.',
      'El 60% de las ventas consultivas B2C se cierran entre el segundo y el quinto seguimiento estructurado, etapa que la mayoría de los equipos abandona.',
    ],
    sections: [
      {
        h2: 'Por qué fracasa el modelo tradicional de "Agencia por un lado y Vendedores por el otro"',
        intro:
          'En empresas de educación, servicios al consumidor, salud, estética, turismo o productos de ticket medio-alto, es habitual ver la misma fricción: marketing festeja que bajó el costo por lead, mientras dirección comercial reclama que "los contactos no sirven y nadie compra".',
        subSections: [
          {
            h3: 'Fricción estratégica en la captación vs. Volumen basura',
            content:
              'Cuando optimizás campañas de Meta o Google únicamente por volumen de clics o formularios instantáneos sin contexto, el algoritmo busca usuarios propensos a hacer clic en todo pero con baja capacidad de pago. Incorporar una pregunta calificadora o alimentar las señales de conversión desde el CRM hacia Meta CAPI cambia radicalmente la calidad de la audiencia.',
          },
          {
            h3: 'Pipeline claro y etapas medibles en CRM',
            content:
              'Atender cientos de consultas desde celulares sueltos de WhatsApp sin etiquetas ni estados de avance hace imposible dirigir un equipo. Estructurar un pipeline simple de 5 etapas permite saber exactamente cuántos prospectos están en negociación y cuál es la tasa de cierre individual de cada vendedor.',
          },
        ],
      },
      {
        h2: 'Las 3 palancas operativas para escalar un equipo B2C',
        intro:
          'Una vez que el flujo de adquisición y el registro están ordenados, el crecimiento depende de la ejecución disciplinada de tres indicadores diarios.',
        subSections: [
          {
            h3: '1. Velocidad de respuesta (SLA) y apertura consultiva',
            content:
              'En ventas digitales B2C, la intención se enfría por minuto. Combinar una bienvenida inmediata (humana o asistida) con una pregunta que invite al diálogo evita el clásico monólogo informativo.',
          },
          {
            h3: '2. Cadencia de seguimiento con aporte de valor',
            content:
              'Hacer seguimiento no es hostigar al cliente con "¿lo pensaste?". Es compartir al día siguiente un caso real similar, al tercer día resolver una duda técnica frecuente y al quinto día presentar una condición clara con fecha límite.',
          },
        ],
      },
    ],
    ctaTitle: '¿Querés alinear tu pauta publicitaria con un sistema de ventas B2C predecible?',
    ctaDescription:
      'Construimos tu arquitectura de adquisición, ordenamos el pipeline comercial y establecemos los KPIs para escalar con rentabilidad.',
    ctaButtonText: 'VER SERVICIO DE ADQUISICIÓN Y VENTAS B2C',
    whatsappMessage:
      '¡Hola Ronan! Leí tu artículo sobre Modelo de Adquisición y Ventas B2C y quiero consultar para ordenar el embudo comercial de mi empresa.',
  },
  {
    slug: 'psicologia-consumidor-manejo-objeciones-equipos-comerciales',
    title: 'Psicología del Consumidor y Manejo de Objeciones: Cómo Cerrar Ventas sin Regalar Margen',
    seoTitle: 'Psicología del Consumidor y Manejo de Objeciones en Ventas | MORPHO',
    seoDescription:
      'Cómo aplicar psicología del consumidor para rebatir objeciones de precio e indecisión en ventas B2C, y cómo evaluar la aptitud comercial al contratar vendedores.',
    summary:
      'Por qué los clientes dicen "está caro" o "lo voy a pensar", cómo entrenar a tu equipo para desactivar la aversión al riesgo sin destruir el precio, y qué evaluar al incorporar nuevos perfiles comerciales.',
    category: 'Psicología de Ventas & Equipos',
    publishedAt: '2025-02-18',
    updatedAt: '2025-02-20',
    readingTime: '8 min de lectura',
    searchIntent:
      'Informativa / Transaccional: líderes comerciales y dueños de negocio que buscan técnicas prácticas de manejo de objeciones y criterios para entrenar o seleccionar vendedores.',
    keywordHypotheses: [
      'manejo de objeciones en ventas ejemplos prácticos (hipótesis pendiente de validación)',
      'psicología del consumidor aplicada al cierre de ventas (hipótesis pendiente de validación)',
      'cómo evaluar y contratar vendedores efectivos (hipótesis pendiente de validación)',
    ],
    author: {
      name: 'Ronan Lavorato',
      role: 'Founder & Lead Marketing Strategist en MORPHO',
      profileUrl: '/sobre-mi',
    },
    relatedServiceSlug: 'objeciones-y-contratacion-comercial',
    relatedServiceTitle: 'Manejo de Objeciones y Contratación Comercial',
    secondaryServiceSlug: 'adquisicion-y-ventas-b2c',
    secondaryServiceTitle: 'Modelo de Adquisición y Ventas B2C',
    keyTakeaways: [
      'Una objeción no es un rechazo definitivo: en el 80% de los casos es un pedido de mayor certidumbre o falta de contraste de valor.',
      'El vendedor que ofrece un descuento ante la primera duda de precio confirma inconscientemente que el precio original estaba inflado.',
      'Para contratar perfiles comerciales confiables, las entrevistas teóricas no alcanzan: es indispensable evaluar mediante roleplay de objeciones reales.',
    ],
    sections: [
      {
        h2: 'Qué ocurre en la mente del comprador cuando plantea una objeción',
        intro:
          'Desde la psicología del consumidor sabemos que toda decisión de compra implica una tensión entre el beneficio deseado y el riesgo percibido (riesgo económico, riesgo de que el producto o servicio no funcione, o esfuerzo de cambio).',
        subSections: [
          {
            h3: 'La diferencia entre una condición real y una objeción de escudo',
            content:
              'Cuando un prospecto responde "lo voy a pensar" o "cualquier cosa te aviso", rara vez significa que se sentará con una planilla a meditarlo. Es un mecanismo automático de defensa para salir de la conversación sin confrontar porque aún no percibe suficiente valor diferencial o confianza.',
          },
          {
            h3: 'El método de 4 pasos para desactivar la objeción "Está caro"',
            content:
              'Antes de tocar un centavo del precio, un asesor comercial entrenado aplica una secuencia conversacional precisa:',
            bullets: [
              '1. Validar sin confrontar: escuchar con calma y empatizar para bajar la guardia defensiva del comprador.',
              '2. Aislar la objeción: preguntar "¿Más allá de la inversión económica, sentís que esta solución es exactamente lo que necesitás para resolver [su problema], o te queda alguna duda sobre cómo funciona?".',
              '3. Contrastar costo vs. retorno o costo de no actuar: cuantificar cuánto le cuesta al cliente seguir con el problema sin resolver o comprar una alternativa inferior.',
              '4. Ofrecer alternativas de viabilidad (financiación, alcance modular o garantía) manteniendo intacto el valor percibido.',
            ],
          },
        ],
      },
      {
        h2: 'Cómo evaluar la capacidad real de negociación al contratar vendedores',
        intro:
          'Existe una diferencia crítica entre cerrar una venta con un cliente y contratar a un vendedor para tu estructura, pero ambas disciplinas comparten el mismo núcleo: la competencia conversacional bajo presión.',
        subSections: [
          {
            h3: 'Por qué el currículum no predice el rendimiento en el piso de ventas',
            content:
              'Muchos candidatos se venden muy bien en una entrevista tradicional pero se bloquean cuando deben escuchar al cliente, hacer preguntas de diagnóstico o sostener el precio ante una objeción en WhatsApp o teléfono.',
          },
          {
            h3: 'La prueba práctica de Roleplay como filtro decisivo',
            content:
              'Al estructurar un proceso de selección comercial, diseñamos un escenario de simulación de 10 minutos con un producto real de la empresa y tres objeciones habituales. Evaluar si el candidato escucha, repregunta, mantiene el temple y aplica el feedback en un segundo intento predice con enorme precisión su desempeño real.',
          },
        ],
      },
    ],
    ctaTitle: '¿Querés entrenar a tu equipo en manejo de objeciones o profesionalizar tu selección de vendedores?',
    ctaDescription:
      'Armamos el Playbook de objeciones a medida de tu negocio, entrenamos a tus asesores y estructuramos las pruebas técnicas para tus próximas contrataciones comerciales.',
    ctaButtonText: 'CONOCER EL SERVICIO DE OBJECIONES Y TALENTO',
    whatsappMessage:
      '¡Hola Ronan! Leí tu artículo sobre Psicología del Consumidor y Manejo de Objeciones y quiero consultar por este servicio para mi equipo.',
  },
];

export function getArticleBySlug(slug: string): ArticleItem | undefined {
  return ARTICLES_DATA.find((article) => article.slug === slug);
}
