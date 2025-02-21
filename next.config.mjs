/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  trailingSlash: true,
  images: {
    domains: ['www.jmthaifood.com'],
  },
};

export default nextConfig;