/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc'],
  },
  //Environment Variables
  env: {
    siteName: 'nextjs-boilerplate',
  },
  //compress: false,
  reactStrictMode: true, //React strict mode highlighting potential problems, identify unsafe lifecycles and legacy API errors
  distDir: 'build',
};

module.exports = nextConfig;
