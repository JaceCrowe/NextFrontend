/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    //working on adding popular technologies to the default
    serverComponentsExternalPackages: ['bcrypt'],
  },
}

module.exports = nextConfig
