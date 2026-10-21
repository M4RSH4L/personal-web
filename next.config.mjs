/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/servicios/bi-retail',
        destination: '/servicios/inteligencia-de-negocios-retail',
        permanent: true,
      },
      {
        source: '/servicios/mercadolibre',
        destination: '/servicios/vender-en-mercado-libre',
        permanent: true,
      },
      {
        source: '/servicios/diagnostico',
        destination: '/servicios/diagnostico-comercial-benchmark',
        permanent: true,
      },
      {
        source: '/servicios/ventas-b2c',
        destination: '/servicios/adquisicion-y-ventas-b2c',
        permanent: true,
      },
      {
        source: '/servicios/objeciones',
        destination: '/servicios/objeciones-y-contratacion-comercial',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
