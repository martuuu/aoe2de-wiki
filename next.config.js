/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    viewTransition: true,
  },
  images: {
    domains: ['tu-dominio-si-hay-imagenes-externas.com']
  }
}

module.exports = nextConfig