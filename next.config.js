/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['countryflagsapi.com', 'firebasestorage.googleapis.com'],
  },
  experimental: { appDir: true },
};

module.exports = nextConfig;
