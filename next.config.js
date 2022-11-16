/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: { appDir: true }
}

module.exports = nextConfig
