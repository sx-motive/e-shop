/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    loader: 'cloudinary',
    domains: ['res.cloudinary.com', 'e-shop-motive.netlify.app'],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
