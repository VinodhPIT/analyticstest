/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiDomain: process.env.VERCEL ?"https://apiadmin.inckd.com" :"https://admin.inckd.com",
    
  },


}

module.exports = nextConfig
