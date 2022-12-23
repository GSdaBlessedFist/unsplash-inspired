/** @type {import('next').NextConfig} */

/** swcMinify: true **/
module.exports = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com'
      },
    ],
  }
}



