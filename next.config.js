/** @type {import('next').NextConfig} */

/** swcMinify: true **/
module.exports = {
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
