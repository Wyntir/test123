/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false, // Disable SWC minification
  experimental: {
    forceSwcTransforms: false, // Force Babel instead of SWC
  },
}

module.exports = nextConfig