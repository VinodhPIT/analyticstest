/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["storage.googleapis.com"],
    unoptimized: true,
  },

  env: {
    apiDomain: "https://admin.inckd.com",
    LIVE_URL: "https://www.inckd.com",
  },
}

module.exports = nextConfig
