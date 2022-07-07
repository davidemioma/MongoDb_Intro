/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "rb.gy",
      "logos-world.net",
      "www.freepnglogos.com",
      "i.pinimg.com",
    ],
  },
};

module.exports = nextConfig;
