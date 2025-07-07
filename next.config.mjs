/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['placeholder.svg'],
    unoptimized: true
  },
  experimental: {
    appDir: true
  },
  // Enable static export if needed
  // output: 'export',
  // trailingSlash: true,
  // distDir: 'dist'
}

export default nextConfig
