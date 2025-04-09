/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ];
  },
  poweredByHeader: false,
  compress: true,
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig