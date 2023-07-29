/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SESSION_NAME: 'TFH Web',
    SESSION_KEY: 'TFH_WEB_USER',
    API_URL: 'http://localhost:5000/api/v2',
    API_KEY: 'TFH_ADMIN',
  },
};

module.exports = nextConfig;
