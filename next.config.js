/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['a.storyblok.com'],
  },
  env: {
    STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN,
  },
};

module.exports = nextConfig;
