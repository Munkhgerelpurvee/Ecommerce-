/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

export default nextConfig;
