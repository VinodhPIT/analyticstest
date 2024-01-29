/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiDomain: process.env.VERCEL ?"https://apiadmin.inckd.com" :"https://admin.inckd.com",
    NEXTAUTH_URL: process.env.VERCEL ? "https://www.inckd.com" :  "https://demo.mypits.org:15080"
  },


}

module.exports = nextConfig
