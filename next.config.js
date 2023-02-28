/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SECRET_KEY_JWT: 'f8dXkim6Sdyc5oOV5A3nS3tWETzP4pTK',
  },
  api: {
    bodyParser: {
        sizeLimit: '8mb' // Set desired value here
    }
},
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
