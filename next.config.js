/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    siteName: 'nextjs-boilerplate',
    baseUrl: 'docs',
  },
  basePath: '/docs',
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc'],
  },
  //Environment Variables

  //compress: false,
  reactStrictMode: true, //React strict mode highlighting potential problems, identify unsafe lifecycles and legacy API errors
  distDir: 'build',
};

module.exports = nextConfig;
