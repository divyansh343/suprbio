/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')({
  dest: 'public'
})

module.exports = withPWA({
  env: {
    SECRET_KEY_JWT: 'f8dXkim6Sdyc5oOV5A3nS3tWETzP4pTK',
  },
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "**",
    }, ],
  },
  reactStrictMode: true,
  swcMinify: true,
})