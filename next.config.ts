/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // allows <img> usage instead of <Image>
  },
};

module.exports = nextConfig;
