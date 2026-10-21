import React, { useState } from 'react';
import { 
  Play, 
  Lock, 
  Unlock, 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  LogOut, 
  Download, 
  FileText, 
  X, 
  Maximize2, 
  Volume2, 
  Pause,
  KeyRound,
  Sparkles,
  Search
} from 'lucide-react';
import { VideoInfoproduct, VideoLesson, StudentUser } from '../types';

const INFOPRODUCTS: VideoInfoproduct[] = [
  {
    id: 'scale-ecommerce',
    title: 'Escalamiento E-commerce: De $5k a $50k/mes con Meta Ads & CAPI',
    subtitle: 'El blueprint paso a paso para consolidar campañas Advantage+ y tracking server-side sin perder atribución.',
    category: 'ecommerce',
    categoryLabel: 'E-commerce & Ads',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    totalDuration: '2h 45m',
    lessonsCount: 4,
    level: 'Avanzado',
    instructor: 'Ronan Lavorato · Morpho',
    description: 'En este entrenamiento en video desglosamos la arquitectura publicitaria exacta que usamos para marcas de Tiendanube y Shopify para romper techos de facturación sin encarecer el CAC.',
    lessons: [
      {
        id: 'lec-1',
        title: '01. Finanzas del Scaling y Unit Economics de Pauta',
        duration: '38 min',
        summary: 'Cómo calcular tu margen de contribución real y el punto de equilibrio antes de subir presupuesto.'
      },
      {
        id: 'lec-2',
        title: '02. Arquitectura de Campañas Advantage+ CBO',
        duration: '45 min',
        summary: 'Eliminando la fragmentación de audiencias y dejando que el algoritmo trabaje a escala.'
      },
      {
        id: 'lec-3',
        title: '03. Implementación de Meta Conversions API (CAPI) Server-Side',
        duration: '42 min',
        summary: 'Setup técnico para recuperar el 25% de eventos de compra perdidos por restricciones de iOS.'
      },
      {
        id: 'lec-4',
        title: '04. Escala Horizontal vs Vertical: Reglas de Presupuesto',
        duration: '40 min',
        summary: 'Cuándo aumentar presupuesto de conjuntos y cuándo diversificar en nuevos conceptos creativos.'
      }
    ],
    resources: [
      'Calculadora de Unit Economics y ROAS Mínimo (Google Sheets)',
      'Checklist de Auditoría Técnica de Cuentas Meta Ads (PDF)',
      'Template de Nomenclatura y Estructura CBO (Notion)'
    ]
  },
  {
    id: 'ugc-creatives',
    title: 'Fábrica de Creativos UGC & Hooks de Respuesta Directa',
    subtitle: 'Sistema modular para producir 8 variaciones de anuncios semanales que detienen el scroll y convierten.',
    category: 'creativos',
    categoryLabel: 'Creativos & Hooks',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
    totalDuration: '1h 55m',
    lessonsCount: 4,
    level: 'Intermedio',
    instructor: 'Ronan Lavorato · Morpho',
    description: 'Aprende a estructurar creativos nativos estilo TikTok y Reels con hooks probados en los primeros 3 segundos, eliminando la necesidad de producciones costosas.',
    lessons: [
      {
        id: 'ugc-1',
        title: '01. Los 5 Tipos de Ganchos (Hooks) que Detienen el Scroll',
        duration: '28 min',
        summary: 'Dolor vs Solución, Comparativa Odiosa, Prueba Social Cruda, Unboxing Inverso y Desmitificación.'
      },
      {
        id: 'ugc-2',
        title: '02. Guiones Modulares en 3 Bloques (Hook, Body, CTA)',
        duration: '32 min',
        summary: 'Cómo grabar 3 inicios, 2 cuerpos y 3 cierres para obtener 18 anuncios con un solo rodaje.'
      },
      {
        id: 'ugc-3',
        title: '03. Edición Dinámica: Subtítulos, Ritmo y Sonido',
        duration: '30 min',
        summary: 'Herramientas ágiles de edición y buenas prácticas de lectura en pantalla móvil vertical.'
      },
      {
        id: 'ugc-4',
        title: '04. Lectura de Métricas Creativas en Meta Ads Manager',
        duration: '25 min',
        summary: 'Cómo interpretar Thumbstop Rate (3-sec play / impressions) y Hold Rate para iterar anuncios.'
      }
    ],
    resources: [
      'Swipe File con 40 Ejemplos de Hooks de Alto Rendimiento (PDF)',
      'Plantilla de Briefing para Creadores de Contenido UGC (Notion)',
      'Guión Modular editable para Tiendas de Moda y Skincare'
    ]
  },
  {
    id: 'automation-whatsapp',
    title: 'Recuperación Omnicanal de Carritos con WhatsApp Business API & Make',
    subtitle: 'Automatizaciones avanzadas que recuperan hasta el 35% de compras abandonadas en piloto automático.',
    category: 'automatizacion',
    categoryLabel: 'Automatización & CRM',
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0a67e5577ff0?auto=format&fit=crop&w=800&q=80',
    totalDuration: '1h 40m',
    lessonsCount: 3,
    level: 'Avanzado',
    instructor: 'Ronan Lavorato · Morpho',
    description: 'Configura flujos automatizados de WhatsApp y Email que disparan mensajes ultra personalizados con el carrito exacto del comprador y botón de pago directo.',
    lessons: [
      {
        id: 'aut-1',
        title: '01. Arquitectura del Flujo de Abandono en Tiendanube/Shopify',
        duration: '35 min',
        summary: 'Webhooks de eventos: Carrito creado vs Checkout iniciado vs Pago pendiente.'
      },
      {
        id: 'aut-2',
        title: '02. Automatización en Make conectada a WhatsApp API',
        duration: '38 min',
        summary: 'Plantillas oficiales aprobadas por Meta para no recibir bloqueos y maximizar tasa de apertura.'
      },
      {
        id: 'aut-3',
        title: '03. Secuencia Post-Compra y Reactivación a 45 Días',
        duration: '27 min',
        summary: 'Cómo solicitar reseñas en Google y ofrecer cupones temporales de recompra automática.'
      }
    ],
    resources: [
      'Blueprint Blueprint exportable (.json) para importar en Make en 1 click',
      'Textos persuasivos para mensajes de WhatsApp de alta conversión',
      'Guía de Verificación de Cuenta en Meta Business Manager'
    ]
  },
  {
    id: 'tracking-forensic',
    title: 'Tracking Forense & Atribución Multicanal con GTM Server-Side',
    subtitle: 'El mapa definitivo para saber exactamente qué anuncio y qué palabra clave generó cada venta.',
    category: 'tracking',
    categoryLabel: 'Tracking & Datos',
    thumbnail: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80',
    totalDuration: '2h 10m',
    lessonsCount: 4,
    level: 'Mastery',
    instructor: 'Ronan Lavorato · Morpho',
    description: 'Aprende a auditar eventos de e-commerce en Google Tag Manager, configurar server containers y resolver discrepancias entre Shopify/Tiendanube y Meta Ads.',
    lessons: [
      {
        id: 'tr-1',
        title: '01. Diagnóstico de Discrepancias y Pérdidas de Eventos',
        duration: '30 min',
        summary: 'Por qué Meta reporta ventas diferentes a tu pasarela de cobro y cómo auditarlo.'
      },
      {
        id: 'tr-2',
        title: '02. Setup de GTM Server Container en la Nube',
        duration: '40 min',
        summary: 'Instalación paso a paso de tu propio subdominio de tracking de primera parte (First-Party).'
      },
      {
        id: 'tr-3',
        title: '03. Deduplicación de Eventos Web vs Servidor',
        duration: '35 min',
        summary: 'Manejo de event_id para evitar conteo doble de compras en el Pixel de Meta y Google Ads.'
      },
      {
        id: 'tr-4',
        title: '04. Creación de Dashboards en Looker Studio para Clientes',
        duration: '25 min',
        summary: 'Visualización clara de ROAS real, Blended CAC y facturación neta consolidada.'
      }
    ],
    resources: [
      'Contenedor preconfigurado de GTM para importar en tu cuenta (.json)',
      'Plantilla de Dashboard Ejecutivo en Looker Studio',
      'Hoja de Trucos de Parámetros UTM para Campañas'
    ]
  }
];

export const InfoproductsSection: React.FC = () => {
  // Authentication State
  const [user, setUser] = useState<StudentUser | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Course Player State
  const [activeCourse, setActiveCourse] = useState<VideoInfoproduct | null>(null);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoProgress, setVideoProgress] = useState(35);
  const [completedLessons, setCompletedLessons] = useState<string[]>(['lec-1']);

  // Filters
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail.trim() || !loginPassword.trim()) {
      setLoginError('Por favor ingresa tu email y contraseña');
      return;
    }

    // Authenticate
    setUser({
      name: loginEmail.split('@')[0],
      email: loginEmail,
      membershipPlan: 'Acceso Total Alumnos VIP',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    });
    setShowLoginModal(false);
    setLoginError('');
  };

  const handleDemoLogin = () => {
    setUser({
      name: 'Ronan Lavorato',
      email: 'ronan@morpho.agency',
      membershipPlan: 'Acceso Total Master Alumnos',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    });
    setShowLoginModal(false);
    setLoginError('');
  };

  const handleLogout = () => {
    setUser(null);
    setActiveCourse(null);
  };

  const handleOpenCourse = (course: VideoInfoproduct) => {
    if (!user) {
      setShowLoginModal(true);
      return;
    }
    setActiveCourse(course);
    setCurrentLessonIndex(0);
    setIsPlaying(true);
    setVideoProgress(15);
  };

  const toggleLessonCompleted = (lessonId: string) => {
    setCompletedLessons(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const filteredCourses = INFOPRODUCTS.filter(course => {
    const matchesCat = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesQuery = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <section id="academia-infoproductos" className="py-20 md:py-28 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Top Header & Auth Status Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-800 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-[#5293ff] text-xs font-extrabold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D7FF00]" />
              <span>MORPHO ACADEMY · INFOPRODUCTOS EN VIDEO</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Masterclasses & Entrenamientos Exclusivos.
            </h2>
            <p className="text-slate-400 max-w-xl text-sm md:text-base mt-2 leading-relaxed">
              Playbooks técnicos y grabaciones de alto rendimiento en video sobre escalamiento de pauta, creativos que venden, tracking server-side y automatización.
            </p>
          </div>

          {/* User Session Status Box */}
          <div className="shrink-0 flex items-center gap-3">
            {user ? (
              <div className="flex items-center gap-4 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="w-10 h-10 rounded-full bg-[#155EEF] text-white flex items-center justify-center font-bold text-sm">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div className="text-left text-xs">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <span>{user.name}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[11px] text-[#D7FF00] font-medium">{user.membershipPlan}</span>
                </div>
                <button
                  onClick={handleLogout}
                  title="Cerrar sesión"
                  className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
                >
                  <LogOut className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 text-xs font-extrabold text-[#101828] bg-[#D7FF00] hover:bg-[#cbf400] active:scale-[0.98] rounded-xl transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                <KeyRound className="w-4 h-4" />
                <span>INICIAR SESIÓN / ACCESO ALUMNOS</span>
              </button>
            )}
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
            {[
              { id: 'all', label: 'Todos los Cursos' },
              { id: 'ecommerce', label: 'E-commerce & Ads' },
              { id: 'creativos', label: 'Creativos & UGC' },
              { id: 'automatizacion', label: 'Automatizaciones' },
              { id: 'tracking', label: 'Tracking & CAPI' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#155EEF] text-white shadow-sm'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar masterclass..."
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
            />
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => {
            const isUnlocked = !!user;

            return (
              <div
                key={course.id}
                onClick={() => handleOpenCourse(course)}
                className="group rounded-2xl bg-slate-800/60 border border-white/10 hover:border-[#155EEF]/70 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Thumbnail Container */}
                  <div className="relative aspect-video overflow-hidden bg-slate-900">
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Lock / Unlock Status Badge */}
                    <div className="absolute top-3 right-3">
                      {isUnlocked ? (
                        <div className="p-1.5 rounded-lg bg-emerald-500/90 text-white backdrop-blur-md shadow-sm">
                          <Unlock className="w-3.5 h-3.5" />
                        </div>
                      ) : (
                        <div className="p-1.5 rounded-lg bg-black/70 text-slate-300 backdrop-blur-md border border-white/10 shadow-sm flex items-center gap-1">
                          <Lock className="w-3.5 h-3.5 text-amber-400" />
                          <span className="text-[10px] font-bold pr-1">Privado</span>
                        </div>
                      )}
                    </div>

                    {/* Category Label */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-extrabold bg-[#155EEF] text-white uppercase tracking-wider">
                        {course.categoryLabel}
                      </span>
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover:scale-110 group-hover:bg-[#D7FF00] group-hover:text-[#101828] transition-all">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>

                    {/* Duration badge */}
                    <div className="absolute bottom-3 left-3 text-[11px] font-mono text-white/90 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{course.totalDuration}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-3 h-3 text-[#155EEF]" />
                        {course.lessonsCount} lecciones
                      </span>
                      <span className="text-[#D7FF00] font-semibold">{course.level}</span>
                    </div>

                    <h3 className="font-extrabold text-base text-white group-hover:text-[#D7FF00] transition-colors leading-snug mb-2 line-clamp-2">
                      {course.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 font-normal leading-relaxed">
                      {course.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-5 pt-0 border-t border-white/5 mt-2">
                  <div className="flex items-center justify-between text-xs pt-3">
                    <span className="text-[11px] text-slate-400">{course.instructor}</span>
                    <span className="font-bold text-[#155EEF] group-hover:text-[#D7FF00] inline-flex items-center gap-1 transition-colors">
                      <span>{isUnlocked ? 'Ver Lecciones' : 'Desbloquear'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Login Modal */}
        {showLoginModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div 
              className="relative w-full max-w-md bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowLoginModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#155EEF] text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                  <KeyRound className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  Acceso Exclusivo a Infoproductos
                </h3>
                <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
                  Inicia sesión con tus credenciales de alumno para acceder a todas las masterclasses y materiales descargables.
                </p>
              </div>

              {loginError && (
                <div className="mb-4 p-3 rounded-xl bg-rose-500/20 border border-rose-500/40 text-xs text-rose-300 text-center font-medium">
                  {loginError}
                </div>
              )}

              {/* 1-Click Demo Shortcut */}
              <div className="p-3.5 mb-6 rounded-2xl bg-blue-950/60 border border-blue-500/30 text-left">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold text-[#D7FF00] uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Acceso de Demostración
                  </span>
                  <span className="text-[10px] text-slate-400">1-click test</span>
                </div>
                <p className="text-[11px] text-slate-300 mb-2.5">
                  Haz clic abajo para ingresar instantáneamente con el perfil verificado de alumno:
                </p>
                <button
                  type="button"
                  onClick={handleDemoLogin}
                  className="w-full py-2 px-3 rounded-xl bg-[#155EEF] hover:bg-[#104EC6] text-white font-extrabold text-xs transition-colors cursor-pointer text-center"
                >
                  ⚡ INGRESAR CON PERFIL VIP DEMO
                </button>
              </div>

              <div className="relative my-4 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-700" />
                </div>
                <span className="relative bg-slate-900 px-3 text-xs text-slate-500 uppercase tracking-wider">
                  o con tus credenciales
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Email de Alumno</label>
                  <input
                    type="email"
                    required
                    placeholder="alumno@tuempresa.com"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Contraseña</label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#155EEF]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 text-xs font-extrabold text-[#101828] bg-[#D7FF00] hover:bg-[#cbf400] rounded-xl transition-all shadow-md cursor-pointer mt-2"
                >
                  INICIAR SESIÓN
                </button>
              </form>

              <div className="mt-4 text-center">
                <span className="text-[11px] text-slate-500">
                  ¿No tienes acceso todavía? Escríbenos a{' '}
                  <a href="#contacto" onClick={() => setShowLoginModal(false)} className="text-[#155EEF] hover:underline">
                    soporte@morpho.agency
                  </a>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Video Player Modal (Active Course) */}
        {activeCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200">
            <div 
              className="relative w-full max-w-6xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="p-4 sm:p-5 border-b border-slate-800 bg-slate-950 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#155EEF] flex items-center justify-center text-white font-bold text-xs">
                    M
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase text-[#D7FF00] tracking-wider block">
                      MORPHO ACADEMY PLAYER
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-white truncate max-w-md">
                      {activeCourse.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveCourse(null)}
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body: Player + Lessons List */}
              <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden">
                
                {/* Video Stage (Left) */}
                <div className="lg:col-span-8 bg-black flex flex-col justify-between overflow-y-auto">
                  <div className="relative aspect-video bg-slate-950 flex items-center justify-center overflow-hidden group">
                    <img
                      src={activeCourse.thumbnail}
                      alt="Video background preview"
                      className="w-full h-full object-cover filter brightness-75"
                    />

                    {/* Simulated Player Controls Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-4">
                      {/* Top title inside video */}
                      <div className="flex justify-between items-center text-xs text-white/90">
                        <span className="font-bold bg-black/60 px-2.5 py-1 rounded backdrop-blur-md">
                          {activeCourse.lessons[currentLessonIndex].title}
                        </span>
                        <span className="text-slate-300">Calidad: 1080p HD</span>
                      </div>

                      {/* Center Play/Pause button */}
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="self-center w-16 h-16 rounded-full bg-[#D7FF00] text-[#101828] flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      >
                        {isPlaying ? (
                          <Pause className="w-7 h-7 fill-current" />
                        ) : (
                          <Play className="w-7 h-7 fill-current ml-1" />
                        )}
                      </button>

                      {/* Bottom Player Timeline */}
                      <div className="space-y-2">
                        {/* Progress bar */}
                        <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden cursor-pointer">
                          <div 
                            className="bg-[#D7FF00] h-full transition-all duration-300" 
                            style={{ width: `${videoProgress}%` }}
                          />
                        </div>

                        <div className="flex items-center justify-between text-xs text-white/90">
                          <div className="flex items-center gap-3">
                            <button onClick={() => setIsPlaying(!isPlaying)} className="hover:text-[#D7FF00]">
                              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                            </button>
                            <Volume2 className="w-4 h-4 text-slate-300" />
                            <span className="font-mono text-[11px]">12:45 / {activeCourse.lessons[currentLessonIndex].duration}</span>
                          </div>

                          <div className="flex items-center gap-3 text-xs">
                            <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] font-mono">1.25x</span>
                            <Maximize2 className="w-4 h-4 cursor-pointer hover:text-[#D7FF00]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lesson Summary & Resources tab below video */}
                  <div className="p-6 bg-slate-900 border-t border-slate-800">
                    <h4 className="text-lg font-bold text-white mb-1">
                      {activeCourse.lessons[currentLessonIndex].title}
                    </h4>
                    <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                      {activeCourse.lessons[currentLessonIndex].summary}
                    </p>

                    <div>
                      <span className="text-xs font-extrabold uppercase text-[#D7FF00] tracking-wider block mb-3 flex items-center gap-1.5">
                        <Download className="w-3.5 h-3.5" />
                        Recursos y Plantillas de esta Masterclass
                      </span>
                      <div className="space-y-2">
                        {activeCourse.resources.map((res, i) => (
                          <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-slate-800 border border-slate-700 text-xs">
                            <div className="flex items-center gap-2 text-slate-200">
                              <FileText className="w-4 h-4 text-[#155EEF]" />
                              <span>{res}</span>
                            </div>
                            <button
                              onClick={() => alert(`Descargando material: ${res}`)}
                              className="px-3 py-1 rounded-lg bg-white/10 hover:bg-[#155EEF] text-white font-bold text-[11px] transition-colors"
                            >
                              Descargar
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lessons Sidebar (Right) */}
                <div className="lg:col-span-4 bg-slate-950 border-t lg:border-t-0 lg:border-l border-slate-800 p-5 overflow-y-auto">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                    <span className="text-xs font-bold uppercase text-slate-400">
                      Módulos del Curso ({activeCourse.lessons.length})
                    </span>
                    <span className="text-xs text-[#D7FF00] font-mono font-bold">
                      {completedLessons.length} completadas
                    </span>
                  </div>

                  <div className="space-y-2">
                    {activeCourse.lessons.map((lesson, idx) => {
                      const isCurrent = currentLessonIndex === idx;
                      const isDone = completedLessons.includes(lesson.id);

                      return (
                        <div
                          key={lesson.id}
                          onClick={() => {
                            setCurrentLessonIndex(idx);
                            setVideoProgress(idx * 25 + 10);
                          }}
                          className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex items-start gap-3 ${
                            isCurrent
                              ? 'bg-[#155EEF]/20 border-[#155EEF] text-white'
                              : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                          }`}
                        >
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleLessonCompleted(lesson.id);
                            }}
                            className={`p-1 rounded-full mt-0.5 shrink-0 ${
                              isDone ? 'text-emerald-400' : 'text-slate-500 hover:text-slate-300'
                            }`}
                          >
                            <CheckCircle2 className="w-4 h-4" />
                          </button>

                          <div className="flex-1 min-w-0">
                            <span className="text-xs font-bold block leading-snug truncate">
                              {lesson.title}
                            </span>
                            <span className="text-[11px] text-slate-500 mt-1 block">
                              Duración: {lesson.duration}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
