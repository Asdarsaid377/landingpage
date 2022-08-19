/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["api-bunka.teknologi-nusantara.com"]
  }
}
module.exports = nextConfig
