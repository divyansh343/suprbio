/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SECRET_KEY_JWT: 'f8dXkim6Sdyc5oOV5A3nS3tWETzP4pTK',
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
