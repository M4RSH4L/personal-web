export interface ServiceSection {
  title: string;
  description: string;
  bullets: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  number: string;
  shortTitle: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  searchIntent: string;
  keywordHypotheses: string[];
  badge: string;
  heroSubtitle: string;
  targetAudience: string[];
  problemsSolved: {
    problem: string;
    consequence: string;
    solution: string;
  }[];
  coreModules: ServiceSection[];
  methodologySteps: {
    step: string;
    title: string;
    detail: string;
  }[];
  deliverables: string[];
  scopeClarification?: {
    title: string;
    note: string;
    tracks: {
      name: string;
      status: string;
      description: string;
      items: string[];
    }[];
  };
  faqs: ServiceFAQ[];
  whatsappMessage: string;
  ctaLabel: string;
  relatedArticleSlugs: string[];
  relatedServiceSlugs: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    slug: 'inteligencia-de-negocios-retail',
    number: '01',
    shortTitle: 'Inteligencia de Negocios Retail',
    title: 'Inteligencia de Negocios para Retail: Dashboards, Márgenes y Control Operativo',
    seoTitle: 'Inteligencia de Negocios para Retail y Dashboards Comerciales | MORPHO',
    seoDescription:
      'Consultoría de Business Intelligence aplicado al retail. Dashboards de facturación, unidades, kilogramos, márgenes por sucursal/canal y análisis de inventario para tomar decisiones con datos reales.',
    searchIntent:
      'Empresas minoristas, cadenas de locales, distribuidoras y comercios de consumo masivo o especializado que necesitan comprender sus datos operativos, proteger márgenes y gestionar mejor sus sucursales e inventario.',
    keywordHypotheses: [
      'inteligencia de negocios para retail (hipótesis - validar volumen)',
      'business intelligence comercios minoristas (hipótesis - validar volumen)',
      'dashboards comerciales para sucursales y retail (hipótesis - validar volumen)',
      'análisis de rentabilidad e inventario retail (hipótesis - validar volumen)',
    ],
    badge: 'BUSINESS INTELLIGENCE · RETAIL & SUCURSALES',
    heroSubtitle:
      'Transformamos las planillas dispersas y los reportes tardíos de tu sistema de facturación en tableros ejecutivos claros para medir rentabilidad real por sucursal, canal, categoría, unidad o kilogramo vendido.',
    targetAudience: [
      'Comercios minoristas con una o múltiples sucursales físicas y canal online.',
      'Negocios de alimentos, tiendas especializadas, pet shops, indumentaria o consumo donde el volumen en unidades o kilogramos impacta el margen.',
      'Dueños y gerentes comerciales que facturan volumen pero no tienen visibilidad diaria de la contribución neta por línea de producto.',
    ],
    problemsSolved: [
      {
        problem: 'Ceguera entre facturación bruta y margen real',
        consequence:
          'Se empujan ventas de productos o promociones que generan caja aparente pero erosionan la utilidad neta después de costos de reposición, mermas y comisiones.',
        solution:
          'Modelado de margen de contribución por SKU, familia de producto, unidad o kilogramo para identificar qué sostiene realmente la rentabilidad del negocio.',
      },
      {
        problem: 'Rendimiento desigual entre sucursales, vendedores o canales',
        consequence:
          'Locales o canales con costos fijos similares rinden de forma dispar sin que la dirección detecte a tiempo si el problema es de tráfico, ticket promedio o mix de productos.',
        solution:
          'Tableros comparativos por punto de venta y canal (mostrador, WhatsApp, e-commerce, marketplace) con apertura por ticket promedio, unidades por ticket y conversión.',
      },
      {
        problem: 'Capital inmovilizado en inventario o quiebres de stock silenciosos',
        consequence:
          'Exceso de mercadería de baja rotación que inmoviliza flujo de caja, mientras los productos de alta demanda sufren quiebres en fechas clave.',
        solution:
          'Análisis de rotación, cobertura de stock en días y alertas de reposición basadas en velocidad real de salida.',
      },
    ],
    coreModules: [
      {
        title: '1. Integración y Limpieza de Datos Comerciales',
        description:
          'Unificamos la información proveniente de tu ERP/POS de facturación, planillas operativas, plataformas de e-commerce y medios de cobro en una estructura confiable.',
        bullets: [
          'Homologación de catálogos, categorías, sucursales y listas de precios.',
          'Depuración de registros duplicados, notas de crédito, devoluciones y mermas.',
          'Automatización de actualización para eliminar horas de carga manual en Excel.',
        ],
      },
      {
        title: '2. Análisis de Facturación, Unidades, Kilogramos y Márgenes',
        description:
          'Medimos el negocio en las magnitudes físicas y financieras que realmente explican su economía operativa.',
        bullets: [
          'Evolución de ventas en moneda constante, unidades físicas y volumen (kg/litros cuando aplica al rubro).',
          'Cálculo de margen bruto y margen de contribución neto descontando costos directos, logística y comisiones financieras.',
          'Detección del desvío entre precio de lista, descuentos otorgados y precio efectivo de venta.',
        ],
      },
      {
        title: '3. Rendimiento por Sucursal, Canal y Vendedor',
        description:
          'Visibilidad comparativa para entender qué puntos de venta traccionan y dónde existen oportunidades inmediatas de mejora.',
        bullets: [
          'Benchmark interno entre sucursales: ticket promedio, cantidad de tickets, artículos por compra y venta por metro cuadrado o turno.',
          'Comparativa de rentabilidad entre canal físico, tienda online, WhatsApp y marketplaces.',
          'Seguimiento de objetivos mensuales y proyección de cierre de mes (run-rate).',
        ],
      },
      {
        title: '4. Análisis de Inventario y Oportunidades Comerciales',
        description:
          'Convertimos el stock en una variable estratégica para liberar caja y aumentar la disponibilidad de los productos ganadores.',
        bullets: [
          'Clasificación ABC de productos por facturación, volumen físico y aporte al margen neto.',
          'Identificación de stock inmovilizado o de baja rotación para diseñar acciones comerciales de liquidación inteligente.',
          'Análisis de venta cruzada (cross-selling) para armar combos y elevar el ticket promedio en mostrador y digital.',
        ],
      },
    ],
    methodologySteps: [
      {
        step: 'Fase 01',
        title: 'Relevamiento de Fuentes y Preguntas de Negocio',
        detail:
          'Auditamos qué sistemas utilizás hoy (POS, ERP, Excel, Tiendanube, Mercado Libre) y definimos los 8 a 12 indicadores críticos que la dirección necesita mirar cada semana.',
      },
      {
        step: 'Fase 02',
        title: 'Modelado de Datos y Reglas de Margen',
        detail:
          'Estructuramos las tablas de ventas, costos, unidades/kilogramos y sucursales asegurando que los números cierren exactamente con la realidad contable y operativa.',
      },
      {
        step: 'Fase 03',
        title: 'Construcción de Dashboards Ejecutivos y Operativos',
        detail:
          'Desarrollamos tableros visuales e interactivos (Looker Studio / Power BI / Sheets avanzados) diseñados para responder preguntas en segundos sin ruido visual.',
      },
      {
        step: 'Fase 04',
        title: 'Rutina de Lectura y Toma de Decisiones',
        detail:
          'Capacitamos al equipo y establecemos una cadencia de revisión para transformar los hallazgos del tablero en decisiones de precios, compras, surtido y promociones.',
      },
    ],
    deliverables: [
      'Mapa de arquitectura de datos comerciales y diccionario de KPIs del negocio.',
      'Dashboard ejecutivo interactivo con filtros por fecha, sucursal, canal, categoría y producto.',
      'Reporte de rentabilidad real (facturación, unidades/kg, costo directo y margen de contribución).',
      'Matriz ABC de inventario e informe de oportunidades de mejora de ticket promedio y rotación.',
    ],
    faqs: [
      {
        question: '¿Necesito cambiar mi sistema de facturación actual para implementar Business Intelligence?',
        answer:
          'No. Trabajamos sobre los datos que ya genera tu sistema actual (mediante exportaciones estructuradas, conectores o APIs) y los combinamos con tus planillas de costos o inventario sin interrumpir la operación diaria de tus locales.',
      },
      {
        question: '¿Por qué es importante medir unidades y kilogramos además de la facturación en pesos o dólares?',
        answer:
          'En contextos de cambios de precios o inflación, mirar solo la facturación nominal puede ocultar una caída en el volumen físico real vendido. Medir unidades y kilogramos permite saber si tu negocio está creciendo genuinamente en volumen y participación de mercado.',
      },
      {
        question: '¿En cuánto tiempo están operativos los primeros tableros?',
        answer:
          'Una vez disponibilizadas las fuentes de datos iniciales, la primera versión funcional del dashboard de ventas y márgenes se entrega entre las semanas 2 y 3 de trabajo.',
      },
    ],
    whatsappMessage:
      'Hola Ronan, estoy viendo el servicio de Inteligencia de negocios para retail en Morpho y quiero consultar para ordenar los datos y márgenes de mi negocio.',
    ctaLabel: 'Solicitar diagnóstico retail',
    relatedArticleSlugs: ['kpis-dashboards-retail-rentabilidad-sucursales'],
    relatedServiceSlugs: ['diagnostico-comercial-benchmark', 'adquisicion-y-ventas-b2c'],
  },
  {
    slug: 'vender-en-mercado-libre',
    number: '02',
    shortTitle: 'Consultoría Mercado Libre',
    title: 'Consultoría para Empezar a Vender y Escalar con Rentabilidad en Mercado Libre',
    seoTitle: 'Consultoría para Vender en Mercado Libre: Estrategia y Rentabilidad | MORPHO',
    seoDescription:
      'Asesoría especializada para iniciar o profesionalizar tu canal de ventas en Mercado Libre: estructura de costos, comisiones, logística, catálogo, pricing y posicionamiento orgánico y publicitario.',
    searchIntent:
      'Empresas, comercios minoristas, fabricantes e importadores que quieren empezar a vender en Mercado Libre o profesionalizar su cuenta sin perder margen en comisiones y envíos.',
    keywordHypotheses: [
      'consultoría para vender en mercado libre (hipótesis - validar volumen)',
      'cómo empezar a vender en mercado libre como empresa (hipótesis - validar volumen)',
      'asesoría mercado libre rentabilidad y comisiones (hipótesis - validar volumen)',
      'estrategia comercial mercado libre catálogo y envíos (hipótesis - validar volumen)',
    ],
    badge: 'MARKETPLACE STRATEGY · MERCADO LIBRE',
    heroSubtitle:
      'Estructuramos y profesionalizamos tu operación en Mercado Libre con un cálculo preciso de costos: que cada venta genere margen real después de comisiones, impuestos y logística.',
    targetAudience: [
      'Comercios físicos, distribuidoras o marcas propias que aún no venden en Mercado Libre y quieren iniciar con el pie derecho.',
      'Empresas que ya tienen publicaciones activas pero no logran tracción o sienten que trabajan solo para pagar comisiones y envíos.',
      'Negocios que necesitan ordenar su catálogo, precios, reputación y operatoria logística (Mercado Envíos, Flex, Full).',
    ],
    problemsSolved: [
      {
        problem: 'Publicar con el mismo precio de mostrador sin calcular la estructura del canal',
        consequence:
          'Al descontar comisión por categoría, costo fijo por unidad, retenciones impositivas y envío gratis obligatorio, la venta termina dando pérdida neta.',
        solution:
          'Matriz calculadora de pricing específica para Mercado Libre (Clásica vs Premium, tramos de envío y financiación) antes de publicar un solo artículo.',
      },
      {
        problem: 'Publicaciones invisibles que no convierten visitas en compras',
        consequence:
          'Títulos genéricos, fichas técnicas incompletas y fotografías poco claras hacen que el algoritmo no muestre el producto o que el comprador elija a la competencia.',
        solution:
          'Optimización SEO interna de Mercado Libre: investigación de términos de búsqueda, atributos técnicos completos, portadas limpias e infografías persuasivas.',
      },
      {
        problem: 'Fricción operativa en despachos, preguntas y reclamos',
        consequence:
          'Demoras en el despacho o respuestas tardías deterioran el termómetro de reputación, haciendo caer drásticamente la exposición orgánica de toda la cuenta.',
        solution:
          'Diseño del flujo operativo diario: protocolos de respuesta rápida, control de tiempos de despacho y estrategia escalonada hacia MercadoLíder.',
      },
    ],
    coreModules: [
      {
        title: '1. Viabilidad Comercial, Costos, Comisiones y Rentabilidad',
        description:
          'Analizamos tu catálogo frente a la demanda real y modelamos la ecuación económica completa del canal.',
        bullets: [
          'Desglose exacto de cargos por venta (publicación Clásica vs Premium), costos fijos por tramo de precio y umbrales de envío gratis.',
          'Armado de packs, combos y kits para superar el umbral de envío o diluir los cargos fijos unitarios aumentando el margen neto.',
          'Definición de política de precios diferenciada por canal (Mostrador vs Tienda Propia vs Mercado Libre).',
        ],
      },
      {
        title: '2. Configuración de Cuenta y Estrategia de Lanzamiento',
        description:
          'Dejamos la arquitectura técnica y comercial lista para operar sin errores desde el primer día.',
        bullets: [
          'Configuración inicial de cuenta, datos fiscales, integraciones de facturación y parámetros de Mercado Envíos.',
          'Plan de activación de reputación inicial (primeras ventas calificadas) con productos ancla estratégicamente seleccionados.',
          'Evaluación de modalidades logísticas según ubicación y tipo de mercadería: Colecta, Flex y preparación para Full.',
        ],
      },
      {
        title: '3. Arquitectura de Catálogo y Publicaciones de Alta Conversión',
        description:
          'Construimos publicaciones pensadas tanto para el algoritmo de búsqueda de Mercado Libre como para la psicología del comprador.',
        bullets: [
          'Estructuración de títulos por jerarquía de palabras clave reales de búsqueda (producto + marca + atributo + modelo/medida).',
          'Completitud rigurosa de fichas técnicas y variantes para ganar filtros laterales de búsqueda.',
          'Guía visual para fotografías de portada y secuencias de imágenes que responden las dudas frecuentes antes de que el usuario pregunte.',
        ],
      },
      {
        title: '4. Operación Comercial, Product Ads y Crecimiento Sostenido',
        description:
          'Acompañamos la puesta en marcha para convertir las visitas en ventas recurrentes y escalar las publicaciones ganadoras.',
        bullets: [
          'Protocolo de atención preventa (transformar preguntas en cierres en menos de 5 minutos) y gestión postventa para evitar reclamos.',
          'Estrategia de participación en acciones comerciales (Ofertas Relámpago, Central de Promociones) cuidando el margen mínimo.',
          'Criterios de activación de Mercado Libre Product Ads (ACOS objetivo vs margen de contribución) una vez validada la conversión orgánica.',
        ],
      },
    ],
    methodologySteps: [
      {
        step: 'Fase 01',
        title: 'Estudio de Categoría, Competencia y Matriz de Costos',
        detail:
          'Evaluamos qué venden hoy los líderes de tu rubro en Mercado Libre, a qué precios y cuál es tu margen neto real por producto.',
      },
      {
        step: 'Fase 02',
        title: 'Setup de Cuenta, Logística y Selección de Surtido Inicial',
        detail:
          'Definimos el catálogo de entrada (productos de rotación vs productos de margen) y configuramos la operatoria logística y comercial.',
      },
      {
        step: 'Fase 03',
        title: 'Optimización de Publicaciones y Lanzamiento',
        detail:
          'Estructuramos títulos, fichas técnicas, precios, combos y plantillas de respuesta para salir al mercado con estándar profesional.',
      },
      {
        step: 'Fase 04',
        title: 'Monitoreo de Indicadores, Reputación y Escala',
        detail:
          'Medimos impresiones, tasa de conversión por publicación, tiempos de respuesta y rentabilidad neta para iterar y escalar.',
      },
    ],
    deliverables: [
      'Calculadora de rentabilidad y pricing para Mercado Libre adaptada a tu estructura de costos e impuestos.',
      'Benchmark competitivo de tu categoría dentro del marketplace (precios, tipos de envío y oferta de líderes).',
      'Matriz de optimización de catálogo (títulos SEO, atributos técnicos y estructura de kits/combos).',
      'Manual operativo de atención preventa, postventa y cuidado de reputación para tu equipo.',
    ],
    faqs: [
      {
        question: '¿Este servicio es solo para quienes empiezan desde cero o también para cuentas que ya venden?',
        answer:
          'Aplica a ambos escenarios. Si empezás desde cero, evitamos los errores costosos de aprendizaje en precios y reputación. Si ya tenés cuenta activa pero estancada, auditamos dónde estás perdiendo margen o posicionamiento y reestructuramos el catálogo.',
      },
      {
        question: '¿Cómo se evita que las comisiones de Mercado Libre se coman toda la ganancia?',
        answer:
          'El error habitual es subir productos individuales de bajo ticket donde el costo fijo por unidad y el envío absorben el margen. Lo resolvemos mediante ingeniería de surtido (packs, kits, presentaciones mayoristas/familiares) y una calculadora exacta de punto de equilibrio por publicación.',
      },
      {
        question: '¿Puedo integrar Mercado Libre con mi stock de tienda física o Tiendanube?',
        answer:
          'Sí. Durante la consultoría relevamos tu operación actual y definimos la mejor forma de sincronizar stock y precios para evitar sobreventas y quiebres.',
      },
    ],
    whatsappMessage:
      'Hola Ronan, vi el servicio de Consultoría para vender en Mercado Libre en Morpho y me gustaría evaluar la estrategia y rentabilidad para mi negocio.',
    ctaLabel: 'Evaluar canal Mercado Libre',
    relatedArticleSlugs: ['como-calcular-rentabilidad-comisiones-mercado-libre'],
    relatedServiceSlugs: ['inteligencia-de-negocios-retail', 'diagnostico-comercial-benchmark'],
  },
  {
    slug: 'diagnostico-comercial-benchmark',
    number: '03',
    shortTitle: 'Diagnóstico Comercial & Benchmark',
    title: 'Diagnóstico Comercial y Benchmark Competitivo: Detectá Fugas y Oportunidades Reales',
    seoTitle: 'Diagnóstico Comercial y Benchmark de Competencia para Empresas | MORPHO',
    seoDescription:
      'Auditoría integral del sistema comercial, benchmark de competencia y precios, análisis de conversión del embudo e identificación de fugas de ventas con plan de acción priorizado.',
    searchIntent:
      'Empresas y negocios en marcha que sienten que se estancaron, invierten en marketing o estructura sin ver retorno claro, convierten poco o pierden terreno frente a competidores.',
    keywordHypotheses: [
      'diagnóstico comercial para empresas (hipótesis - validar volumen)',
      'auditoría comercial y benchmark de competencia (hipótesis - validar volumen)',
      'análisis de embudo de ventas y conversión (hipótesis - validar volumen)',
      'consultoría de posicionamiento y precios (hipótesis - validar volumen)',
    ],
    badge: 'COMMERCIAL AUDIT · BENCHMARK & CRO',
    heroSubtitle:
      'Antes de gastar más presupuesto en publicidad o sumar estructura a ciegas, auditamos de punta a punta tu sistema comercial, tu posicionamiento frente a la competencia y las fugas exactas donde hoy estás perdiendo ventas.',
    targetAudience: [
      'Empresas con facturación activa que llegaron a una meseta de crecimiento y necesitan claridad objetiva sobre qué ajustar.',
      'Negocios que reciben tráfico o consultas pero tienen una baja tasa de cierre y no distinguen si la falla está en el precio, la oferta, la web o la atención comercial.',
      'Directores y dueños que quieren comparar su propuesta de valor, precios y experiencia de compra contra los referentes reales de su mercado.',
    ],
    problemsSolved: [
      {
        problem: 'Decisiones comerciales basadas en intuición o percepciones internas',
        consequence:
          'Se aplican descuentos innecesarios creyendo que "el problema es el precio", cuando la falla real está en la propuesta de valor, los tiempos de respuesta o la falta de confianza en el punto de contacto.',
        solution:
          'Benchmark objetivo de competidores directos y sustitutos: comparativa real de precios, condiciones comerciales, tiempos de entrega, garantías y argumentos de venta.',
      },
      {
        problem: 'Fugas invisibles a lo largo del embudo de adquisición y venta',
        consequence:
          'El negocio invierte en atraer visitas o leads, pero más del 70% se pierde en pasos intermedios (formularios confusos, carritos abandonados, presupuestos nunca seguidos).',
        solution:
          'Revisión completa del embudo desde el clic o consulta inicial hasta la compra y recompra, cuantificando las pérdidas en cada etapa.',
      },
      {
        problem: 'Dispersión de esfuerzos en iniciativas de bajo impacto',
        consequence:
          'El equipo se desgasta en tareas operativas secundarias mientras los cuellos de botella estructurales siguen sin resolverse.',
        solution:
          'Matriz de priorización ICE/Impacto-Viabilidad con una hoja de ruta concreta de victorias rápidas (quick wins) y mejoras estructurales a 30, 60 y 90 días.',
      },
    ],
    coreModules: [
      {
        title: '1. Auditoría Integral del Sistema Comercial Actual',
        description:
          'Revisamos con lupa los números, canales y procesos vigentes para establecer una línea base real.',
        bullets: [
          'Análisis histórico de ventas, ticket promedio, estacionalidad, tasa de conversión y tasa de recompra.',
          'Evaluación de canales de adquisición activos (orgánico, pauta en Meta/Google, marketplaces, referidos, fuerza de ventas).',
          'Revisión de la calidad del tracking y atribución para verificar si los datos con los que hoy decidís son confiables.',
        ],
      },
      {
        title: '2. Benchmark de Competencia, Precios y Propuesta de Valor',
        description:
          'Salimos al mercado a evaluar cómo te ve un comprador cuando te compara con tus principales alternativas.',
        bullets: [
          'Mapeo comparativo de entre 5 y 8 competidores directos e indirectos en tu categoría.',
          'Análisis de estructura de precios, promociones, financiación, costos de envío y políticas de cambio/garantía.',
          'Evaluación de la claridad y diferenciación de tu propuesta de valor (¿por qué un cliente racional o emocional debería elegirte a vos?).',
        ],
      },
      {
        title: '3. Diagnóstico de Embudo, Conversión (CRO) y Atención Comercial',
        description:
          'Recorremos el camino real del cliente (Customer Journey) para detectar fricciones técnicas, visuales y humanas.',
        bullets: [
          'Auditoría de experiencia de usuario en sitio web, landing pages o tienda online (velocidad, claridad de oferta, fichas de producto y checkout).',
          'Evaluación misteriosa (mystery shopping) o revisión de conversaciones reales en WhatsApp/CRM: tiempos de respuesta, calidad de asesoramiento y seguimiento.',
          'Identificación de puntos exactos de abandono y causas principales de no compra.',
        ],
      },
      {
        title: '4. Matriz de Priorización y Plan de Acción Ejecutable',
        description:
          'No entregamos un informe teórico para archivar: entregamos un plan de ejecución ordenado por retorno económico estimado.',
        bullets: [
          'Cuantificación del impacto potencial de corregir cada fuga detectada.',
          'Priorización de acciones según Impacto Comercial vs Complejidad de Implementación.',
          'Hoja de ruta operativa dividida en acciones inmediatas (días 1-15), corto plazo (días 15-45) y mediano plazo (días 45-90).',
        ],
      },
    ],
    methodologySteps: [
      {
        step: 'Fase 01',
        title: 'Inmersión y Recolección de Evidencia',
        detail:
          'Entrevista profunda de negocio, acceso de lectura a métricas actuales y definición de los competidores y canales a auditar.',
      },
      {
        step: 'Fase 02',
        title: 'Investigación de Mercado y Auditoría de Embudo',
        detail:
          'Ejecución del benchmark competitivo, análisis de precios/oferta y prueba completa del recorrido de compra y atención.',
      },
      {
        step: 'Fase 03',
        title: 'Diagnóstico de Cuellos de Botella y Cuantificación',
        detail:
          'Cruce de datos internos y externos para aislar las causas raíz que frenan la conversión o erosionan el margen.',
      },
      {
        step: 'Fase 04',
        title: 'Presentación Ejecutiva y Hoja de Ruta Priorizada',
        detail:
          'Sesión de entrega con documento accionable, matriz de prioridades y definición de próximos pasos de implementación.',
      },
    ],
    deliverables: [
      'Informe completo de Diagnóstico Comercial con hallazgos respaldados por datos y capturas reales.',
      'Matriz comparativa de Benchmark Competitivo (precios, oferta, canales, fortalezas y debilidades).',
      'Mapa de fugas del embudo comercial (web, pauta y atención por WhatsApp/ventas).',
      'Roadmap priorizado de implementación a 30/60/90 días según impacto y viabilidad.',
    ],
    faqs: [
      {
        question: '¿Cuánto dura el proceso de Diagnóstico Comercial y Benchmark?',
        answer:
          'Es un sprint intensivo de entre 10 y 15 días hábiles desde la recepción de la información inicial hasta la presentación ejecutiva del informe y el plan de acción.',
      },
      {
        question: '¿Qué pasa después de recibir el diagnóstico? ¿Me ayudan a implementarlo?',
        answer:
          'Sí. El diagnóstico está diseñado como una pieza autónoma de altísimo valor que tu equipo puede ejecutar por su cuenta, o bien podemos acompañarte directamente en la implementación de los módulos priorizados (adquisición, BI, capacitación comercial o e-commerce).',
      },
      {
        question: '¿Para qué tipo de empresas es más recomendable empezar por este servicio?',
        answer:
          'Es el punto de partida ideal para empresas que ya tienen operación y ventas en marcha pero sienten que están tomando decisiones a ciegas o que su inversión actual en marketing no rinde lo que debería.',
      },
    ],
    whatsappMessage:
      'Hola Ronan, estoy viendo el servicio de Diagnóstico comercial y benchmark en Morpho y me gustaría evaluar una auditoría para mi negocio.',
    ctaLabel: 'Solicitar diagnóstico comercial',
    relatedArticleSlugs: ['como-hacer-benchmark-comercial-detectar-fugas-embudo'],
    relatedServiceSlugs: ['inteligencia-de-negocios-retail', 'adquisicion-y-ventas-b2c'],
  },
  {
    slug: 'adquisicion-y-ventas-b2c',
    number: '04',
    shortTitle: 'Adquisición y Ventas B2C',
    title: 'Modelo de Adquisición y Estructura de Ventas B2C: Del Clic al Cierre Rentable',
    seoTitle: 'Modelo de Adquisición de Clientes y Estructura de Ventas B2C | MORPHO',
    seoDescription:
      'Diseño y optimización del sistema de adquisición y ventas B2C: estrategia de pauta (Meta y Google Ads), embudos de conversión, CRM, seguimiento por WhatsApp, estructura de equipos y KPIs.',
    searchIntent:
      'Empresas B2C (servicios al consumidor, educación, salud/estética, equipamiento, retail de ticket medio/alto y e-commerce asistido) que necesitan ordenar o escalar su sistema de captación y cierre de ventas.',
    keywordHypotheses: [
      'modelo de adquisición de clientes b2c (hipótesis - validar volumen)',
      'estructura de ventas b2c y conversión (hipótesis - validar volumen)',
      'consultoría de embudos de venta y crm whatsapp (hipótesis - validar volumen)',
      'escalar adquisición de clientes meta ads y ventas (hipótesis - validar volumen)',
    ],
    badge: 'GROWTH SYSTEM · ADQUISICIÓN & VENTAS B2C',
    heroSubtitle:
      'Conectamos la generación de demanda (Meta Ads, Google Ads y contenido orgánico) con un proceso comercial B2C estructurado, medible y repetible para que los leads se conviertan en ventas reales y recompras.',
    targetAudience: [
      'Empresas B2C de venta consultiva o asistida (academias, clínicas, servicios al consumidor, turismo, hogar, automotriz, equipamiento) donde el cierre ocurre por WhatsApp, llamada o salón.',
      'Marcas D2C y e-commerce que necesitan integrar adquisición paga con recuperación activa de carritos y retención de clientes.',
      'Negocios donde marketing y el equipo de vendedores trabajan desconectados, culpándose mutuamente por la calidad de los leads o la falta de cierres.',
    ],
    problemsSolved: [
      {
        problem: 'Divorcio entre las campañas publicitarias y el piso de ventas',
        consequence:
          'Se mide el éxito por "costo por clic" o "cantidad de mensajes", pero nadie rastrea qué anuncio o audiencia trajo a los clientes que efectivamente pagaron.',
        solution:
          'Sistema unificado de punta a punta: atribución desde el anuncio (Meta CAPI / GTM / UTMs) hasta el estado de venta cerrada en el CRM o planilla de control.',
      },
      {
        problem: 'Leads que se enfrían por falta de velocidad y cadencia de seguimiento',
        consequence:
          'El prospecto consulta en caliente, recibe una respuesta tardía o meramente informativa (solo el precio) y nunca vuelve a ser contactado con método.',
        solution:
          'Diseño de protocolos de contacto inmediato (SLA), secuencias de seguimiento estructuradas de 5 a 7 toques y automatizaciones de apoyo por WhatsApp y email.',
      },
      {
        problem: 'Equipos de ventas B2C sin métricas de productividad ni procesos claros',
        consequence:
          'Vendedores saturados respondiendo consultas no calificadas o trabajando sin objetivos diarios de tasa de contacto, tasa de cierre y ticket promedio.',
        solution:
          'Ordenamiento de la estructura comercial: filtros de precalificación, asignación inteligente de leads, pipeline en CRM y tablero de KPIs individuales y grupales.',
      },
    ],
    coreModules: [
      {
        title: '1. Estrategia de Adquisición Multicanal (Paid & Orgánico)',
        description:
          'Atraemos demanda calificada combinando pauta de respuesta directa y contenido que construye autoridad y confianza previa.',
        bullets: [
          'Arquitectura de campañas en Meta Ads (Advantage+ / CBO) y Google Search de alta intención de compra.',
          'Sistema modular de creativos (hooks basados en dolores reales, pruebas sociales, demostraciones y comparativas) para evitar la fatiga publicitaria.',
          'Filtros estratégicos en formularios, landing pages o flujos de bienvenida para elevar la intención del prospecto antes de pasar a ventas.',
        ],
      },
      {
        title: '2. Diseño del Funnel, Gestión de Leads y CRM',
        description:
          'Ordenamos el recorrido de cada contacto para que ninguna oportunidad comercial quede olvidada en una bandeja de entrada.',
        bullets: [
          'Definición de etapas claras del pipeline comercial B2C (Nuevo Lead → Contactado → Calificado → Propuesta/Presupuesto → Cierre / Recontacto).',
          'Configuración y ordenamiento de herramientas de gestión (HubSpot, Kommo, CRM propio o estructura estandarizada de WhatsApp Business).',
          'Automatización de recordatorios de asistencia, recuperación de carritos abandonados y reactivación de prospectos indecisos.',
        ],
      },
      {
        title: '3. Estructura de Equipos de Ventas, Seguimiento y Retención',
        description:
          'Alineamos la operación humana para maximizar la productividad de cada asesor comercial y el valor de vida del cliente (LTV).',
        bullets: [
          'Separación de roles cuando el volumen lo requiere (precalificación/setter vs cierre/closer vs atención postventa y recompra).',
          'Cadencias obligatorias de seguimiento comercial con aportes de valor (casos, garantías, resolución de dudas) en lugar de solo preguntar "¿pudiste ver el presupuesto?".',
          'Programas de recompra, venta cruzada (cross-sell) y referidos para amortizar el costo de adquisición inicial (CAC).',
        ],
      },
      {
        title: '4. KPIs Comerciales, Atribución y Mejora Continua',
        description:
          'Instalamos una cultura de gestión basada en números reales de extremo a extremo.',
        bullets: [
          'Medición semanal de CAC (Costo de Adquisición de Cliente), CPL calificado, velocidad de primer contacto (Speed-to-Lead) y tasa de cierre por vendedor.',
          'Feedback loop entre ventas y marketing: las dudas reales del cliente en WhatsApp se convierten en los nuevos anuncios de la semana siguiente.',
          'Optimización continua de presupuesto hacia los canales, anuncios y vendedores con mayor retorno neto.',
        ],
      },
    ],
    methodologySteps: [
      {
        step: 'Fase 01',
        title: 'Diagnóstico de Adquisición y Embudo Comercial',
        detail:
          'Auditamos tus campañas actuales, la conversión de tus páginas y cómo está gestionando hoy los contactos tu equipo de ventas.',
      },
      {
        step: 'Fase 02',
        title: 'Arquitectura de Funnel, Tracking y Pipeline CRM',
        detail:
          'Implementamos medición limpia (CAPI/GTM), estructuramos las etapas del pipeline y definimos las reglas de seguimiento.',
      },
      {
        step: 'Fase 03',
        title: 'Despliegue de Campañas y Protocolos de Venta',
        detail:
          'Activamos las nuevas campañas de adquisición junto con las cadencias de contacto, plantillas y automatizaciones de soporte.',
      },
      {
        step: 'Fase 04',
        title: 'Optimización Semanal de Conversión y Escala',
        detail:
          'Analizamos métricas de punta a punta (inversión → lead → cierre → recompra) para escalar el volumen cuidando la rentabilidad.',
      },
    ],
    deliverables: [
      'Arquitectura completa del embudo de adquisición y ventas B2C con mapa de conversión.',
      'Estructura de campañas publicitarias, matriz de ángulos creativos y configuración de tracking.',
      'Playbook de seguimiento comercial B2C (etapas de CRM, SLAs de respuesta y secuencias de recontacto).',
      'Tablero de control de KPIs de adquisición y productividad comercial (CPL, CAC, Tasa de Cierre, ROAS y LTV).',
    ],
    faqs: [
      {
        question: '¿Cómo sé si mi problema hoy está en la publicidad o en el equipo de ventas?',
        answer:
          'Lo determinamos en la primera semana midiendo tres indicadores: el costo y perfil del lead que ingresa, el tiempo que tarda el equipo en dar la primera respuesta útil, y el porcentaje de prospectos calificados que reciben al menos 4 seguimientos estructurados. Casi siempre la mejora máxima surge de alinear ambos frentes simultáneamente.',
      },
      {
        question: '¿Qué resultados concretos se han logrado con este enfoque?',
        answer:
          'En proyectos reales de adquisición y ventas B2C (como Kodland, GoITeens, Rocket Tech School y Lo Que Mastica Tu Mascota), este sistema permitió reducir el CAC en un 35%, aumentar la asistencia y conversión en más del 140% y llevar la tasa de recompra al 44%.',
      },
      {
        question: '¿Se adapta a empresas que venden por WhatsApp además de tienda online?',
        answer:
          'Totalmente. En Latinoamérica, WhatsApp es el canal de cierre B2C por excelencia. Diseñamos el sistema para que WhatsApp deje de ser una caja negra caótica y pase a ser un canal medible, estructurado y de alta conversión.',
      },
    ],
    whatsappMessage:
      'Hola Ronan, vi el servicio de Modelo de adquisición y ventas B2C en Morpho y quiero consultar para ordenar la captación y el cierre de ventas.',
    ctaLabel: 'Conversar sobre adquisición y ventas',
    relatedArticleSlugs: ['estructura-ventas-b2c-adquisicion-crm-conversion'],
    relatedServiceSlugs: ['objeciones-y-contratacion-comercial', 'diagnostico-comercial-benchmark'],
  },
  {
    slug: 'objeciones-y-contratacion-comercial',
    number: '05',
    shortTitle: 'Objeciones y Talento Comercial',
    title: 'Manejo de Objeciones, Psicología de Ventas y Evaluación de Perfiles Comerciales',
    seoTitle: 'Manejo de Objeciones en Ventas y Evaluación Comercial | MORPHO',
    seoDescription:
      'Entrenamiento en manejo de objeciones con psicología del consumidor, negociación comercial y estructura de evaluación para selección y contratación de perfiles de ventas.',
    searchIntent:
      'Empresas cuyos vendedores pierden cierres ante objeciones de precio o indecisión, o que necesitan profesionalizar la capacitación y los criterios de evaluación al incorporar perfiles comerciales.',
    keywordHypotheses: [
      'manejo de objeciones en ventas y psicología del consumidor (hipótesis - validar volumen)',
      'capacitación comercial y cierre de ventas por whatsapp (hipótesis - validar volumen)',
      'evaluación y selección de perfiles comerciales (hipótesis - validar volumen)',
      'cómo entrenar vendedores para rebatir objeciones de precio (hipótesis - validar volumen)',
    ],
    badge: 'CONSUMER PSYCHOLOGY · SALES ENABLEMENT & TALENT',
    heroSubtitle:
      'Aplicamos psicología del consumidor y metodología práctica de negociación para que tu equipo transforme dudas y objeciones en cierres rentables, y estructuramos criterios objetivos para evaluar e incorporar perfiles comerciales.',
    targetAudience: [
      'Equipos de ventas B2C o consultivas que actúan como meros "pasadores de precios" y pierden la venta apenas el cliente dice "lo voy a pensar" o "está caro".',
      'Dueños de negocios y líderes comerciales que necesitan estandarizar el discurso de ventas para no depender del talento improvisado de un único vendedor estrella.',
      'Empresas en crecimiento que necesitan evaluar candidatos comerciales con pruebas reales de negociación antes de tomar una decisión de contratación.',
    ],
    problemsSolved: [
      {
        problem: 'Vendedores que responden objeciones de precio ofreciendo descuento inmediato',
        consequence:
          'Se destruye el margen de ganancia de la empresa porque el vendedor no sabe construir valor percibido ni aislar la verdadera duda del comprador.',
        solution:
          'Entrenamiento en psicología de decisión y matrices de rebatimiento de objeciones (Precio vs Valor, Urgencia, Confianza, Comparación con competidores y Postergación).',
      },
      {
        problem: 'Conversaciones comerciales lineales sin diagnóstico previo del cliente',
        consequence:
          'Se envía información genérica sin entender qué motiva la compra del prospecto, generando indiferencia y falta de respuesta (ghosting comercial).',
        solution:
          'Estructuración de conversaciones consultivas: preguntas de apertura, detección de dolor/motivación, presentación de solución a medida y llamado a la acción claro.',
      },
      {
        problem: 'Contratación comercial a ciegas basada solo en currículums o entrevistas informales',
        consequence:
          'Alta rotación, meses perdidos en curvas de aprendizaje fallidas y desgaste por incorporar perfiles que no se adaptan al tipo de venta del negocio.',
        solution:
          'Diseño de matrices de evaluación por competencias comerciales, dinámicas de roleplay con objeciones reales del rubro y onboarding estructurado.',
      },
    ],
    coreModules: [
      {
        title: '1. Psicología del Consumidor Aplicada a Conversaciones de Venta',
        description:
          'Entendemos cómo decide realmente el comprador y qué sesgos cognitivos frenan o aceleran una transacción.',
        bullets: [
          'Identificación de fricciones psicológicas: aversión al riesgo, parálisis por exceso de opciones y desconfianza en compras digitales o de ticket medio/alto.',
          'Construcción de autoridad, prueba social contextual y garantías que reducen la percepción de riesgo sin regalar margen.',
          'Adaptación del tono, ritmo y formato (texto, nota de voz estratégica, micro-video o llamada) según la etapa de decisión del cliente.',
        ],
      },
      {
        title: '2. Matriz Práctica de Manejo de Objeciones y Negociación',
        description:
          'Documentamos y entrenamos respuestas concretas para cada objeción real que recibe tu equipo todos los días.',
        bullets: [
          'Mapeo de las 15 objeciones más frecuentes de tu negocio ("es caro", "lo consulto con mi socio/pareja", "vi otro más barato", "ahora no es el momento").',
          'Técnica de 4 pasos: Escucha activa y validación → Pregunta de aislamiento → Reencuadre de valor/evidencia → Cierre de próximo paso.',
          'Guiones dinámicos y árboles de decisión para ventas por WhatsApp, teléfono y reuniones presenciales o por videollamada.',
        ],
      },
      {
        title: '3. Capacitación, Roleplay y Coaching de Vendedores',
        description:
          'Llevamos la teoría a la práctica real revisando conversaciones reales del equipo.',
        bullets: [
          'Auditoría de chats y llamadas reales del equipo actual para detectar vicios habituales y oportunidades inmediatas de mejora.',
          'Sesiones prácticas de entrenamiento y simulación (roleplay) sobre casos reales de tu negocio.',
          'Rúbrica de calidad conversacional para que el líder comercial pueda evaluar y dar feedback semanal en 15 minutos.',
        ],
      },
      {
        title: '4. Evaluación y Estructura para Contratación de Perfiles Comerciales',
        description:
          'Cuando el crecimiento requiere sumar manos al equipo, ordenamos el criterio técnico para evaluar candidatos con rigor comercial.',
        bullets: [
          'Definición precisa del perfil requerido según tu modelo de venta (prospección/hunter, asesor receptivo B2C, closer consultivo o ejecutivo de cuentas).',
          'Diseño de pruebas prácticas de evaluación: casos de respuesta a objeciones en vivo y simulación comercial antes de contratar.',
          'Manual de onboarding comercial (Playbook de ventas) para acelerar la productividad de las nuevas incorporaciones en sus primeros 30 días.',
        ],
      },
    ],
    scopeClarification: {
      title: 'Claridad de Alcance: Cierre de Ventas vs. Contratación de Perfiles Comerciales',
      note: 'En MORPHO separamos con total precisión ambos frentes para que contrates exactamente lo que tu etapa de negocio necesita hoy (estructura modular adaptable):',
      tracks: [
        {
          name: 'Módulo A: Manejo de Objeciones, Negociación y Cierre de Ventas',
          status: 'Servicio Principal Activo',
          description:
            'Enfocado en mejorar la tasa de conversión de tu equipo actual (o tuya como dueño) frente a prospectos reales mediante psicología del consumidor, guiones y coaching práctico.',
          items: [
            'Auditoría de conversaciones reales en WhatsApp / CRM / llamadas.',
            'Playbook a medida de manejo de objeciones y cierre.',
            'Entrenamiento práctico con el equipo comercial.',
          ],
        },
        {
          name: 'Módulo B: Evaluación Técnica y Proceso de Contratación Comercial',
          status: 'Módulo Complementario a Medida',
          description:
            'Enfocado en empresas que necesitan ampliar o renovar su equipo de vendedores con criterios técnicos de validación comercial (no es una bolsa de empleo genérica, sino evaluación especializada de aptitud comercial).',
          items: [
            'Definición del scorecard del puesto y esquema de incentivos/comisiones.',
            'Diseño de pruebas prácticas de negociación y roleplay para filtrar candidatos.',
            'Acompañamiento en la evaluación final de ternas y playbook de inducción.',
          ],
        },
      ],
    },
    methodologySteps: [
      {
        step: 'Fase 01',
        title: 'Auditoría de Conversaciones y Motivos de No Compra',
        detail:
          'Analizamos chats, llamadas y presupuestos perdidos para identificar con evidencia por qué no están comprando los prospectos actuales.',
      },
      {
        step: 'Fase 02',
        title: 'Diseño del Playbook de Objeciones y Perfil Comercial',
        detail:
          'Construimos la matriz de respuestas, la estructura conversacional y, si aplica al alcance, el scorecard de evaluación de vendedores.',
      },
      {
        step: 'Fase 03',
        title: 'Entrenamiento Práctico / Evaluación de Candidatos',
        detail:
          'Ejecutamos los talleres de roleplay con el equipo en funciones o las pruebas técnicas de validación para los candidatos en proceso.',
      },
      {
        step: 'Fase 04',
        title: 'Monitoreo de Tasa de Cierre y Calibración',
        detail:
          'Medimos la evolución en la tasa de conversión de lead a venta y ajustamos los argumentos según la respuesta del mercado.',
      },
    ],
    deliverables: [
      'Diagnóstico de calidad conversacional y mapa de objeciones reales de tu negocio.',
      'Playbook Comercial de Manejo de Objeciones y Cierre (guiones para WhatsApp, teléfono y reuniones).',
      'Sesiones de entrenamiento práctico y rúbrica de auditoría continua de conversaciones.',
      'Scorecard de perfil comercial y protocolo de pruebas prácticas de roleplay para evaluación de candidatos (cuando se incluye el módulo de contratación).',
    ],
    faqs: [
      {
        question: '¿Cuál es la diferencia entre el entrenamiento en objeciones y la consultoría de contratación comercial?',
        answer:
          'El entrenamiento en manejo de objeciones trabaja sobre el proceso de cierre de ventas con los clientes (cómo responder dudas de precio, tiempo o confianza para concretar la operación). La consultoría de contratación comercial trabaja sobre la selección y validación de los vendedores que formarán parte de tu equipo. Podés contratar solo el frente de objeciones o integrar ambos si estás armando equipo.',
      },
      {
        question: '¿Los guiones de ventas hacen que la atención por WhatsApp suene robótica?',
        answer:
          'Todo lo contrario. No usamos respuestas copiadas y pegadas rígidas que espantan al comprador. Diseñamos estructuras conversacionales basadas en psicología del consumidor para que el vendedor sepa exactamente qué preguntar y cómo empatizar de forma humana, ágil y persuasiva.',
      },
      {
        question: '¿Cómo ayuda el Playbook comercial cuando se incorpora un vendedor nuevo?',
        answer:
          'Reduce a la mitad el tiempo de adaptación. En lugar de que el nuevo integrante aprenda por ensayo y error quemando leads pagos, ingresa con un manual claro de quién es el cliente, cómo se presenta la oferta y cómo se resuelve cada objeción frecuente.',
      },
    ],
    whatsappMessage:
      'Hola Ronan, vi el servicio de Manejo de objeciones y contratación comercial en Morpho y quiero consultar para nuestro equipo de ventas.',
    ctaLabel: 'Consultar por objeciones y equipo',
    relatedArticleSlugs: ['psicologia-consumidor-manejo-objeciones-equipos-comerciales'],
    relatedServiceSlugs: ['adquisicion-y-ventas-b2c', 'diagnostico-comercial-benchmark'],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES_DATA.find((service) => service.slug === slug);
}
