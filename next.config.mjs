import dotenv from 'dotenv';

/** @type {import('next').NextConfig} */
const nextConfig = { 
  env: {
    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/public/uploads/**',
      },
    ],
  },};

export default nextConfig;

