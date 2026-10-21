# MORPHO — Agente Humano de Marketing (Next.js App Router + SEO/GEO)

Sitio web corporativo y plataforma de adquisición orgánica de **MORPHO**, dirigido por **Ronan Lavorato**.

## Arquitectura Tecnológica

- **Framework:** Next.js (App Router, Server Components por defecto, Static Site Generation `SSG`)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4 (`@tailwindcss/postcss`) + Tipografías optimizadas vía `next/font/google` (`Plus Jakarta Sans`, `Inter Tight`, `Caveat`)
- **SEO & GEO:**
  - Metadata API dinámica y canónicas absolutas por página
  - `/sitemap.xml` y `/robots.txt` autogenerados
  - Datos estructurados JSON-LD (`Organization`, `Person`, `WebSite`, `Service`, `BlogPosting`, `BreadcrumbList`, `FAQPage`, `ProfilePage`)

## Estructura de Rutas Principales

- `/` — Home principal (Propuesta de valor, 5 servicios, metodología, casos reales, agente interactivo, simulador de ROI, contenido experto y Morpho Academy)
- `/servicios` — Hub comparativo de las 5 especialidades comerciales
- `/servicios/inteligencia-de-negocios-retail` — Servicio 1: Business Intelligence aplicado al retail
- `/servicios/vender-en-mercado-libre` — Servicio 2: Consultoría para empezar a vender y escalar en Mercado Libre
- `/servicios/diagnostico-comercial-benchmark` — Servicio 3: Diagnóstico comercial y benchmark competitivo
- `/servicios/adquisicion-y-ventas-b2c` — Servicio 4: Modelo de adquisición y estructura de ventas B2C
- `/servicios/objeciones-y-contratacion-comercial` — Servicio 5: Manejo de objeciones, psicología del consumidor y evaluación/contratación comercial
- `/sobre-mi` — Página de autor y trayectoria verificable de Ronan Lavorato
- `/recursos` — Biblioteca de artículos y guías técnicas
- `/recursos/[slug]` — 5 guías fundacionales enlazadas a cada servicio

## Ejecución Local

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Configurar variables de entorno en `.env.local` (ver `.env.example`).
3. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```
4. Compilar para producción:
   ```bash
   npm run build
   npm run start
   ```
