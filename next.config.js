/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SESSION_NAME: '',
    SESSION_KEY: '',
    API_URL: '',
    API_KEY: '',
    YOUTUBE_API_KEY: '',
    YOUTUBE_UPLOAD_KEY: '',
    YOUTUBE_CHANNEL_ID: '',
  },
  images: {
    domains: ['i.ytimg.com', 'res.cloudinary.com'],
    unoptimized: true,
  },
  output: 'export',
};

module.exports = nextConfig;
