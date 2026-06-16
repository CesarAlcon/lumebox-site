/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.bitrix24.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
}

module.exports = nextConfig
