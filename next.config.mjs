/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['drive.google.com']
    },
    env:{
        FRONTEND_URL: process.env.FRONTEND_URL,
        BACKEND_URL: process.env.BACKEND_URL
    },
};

export default nextConfig;
