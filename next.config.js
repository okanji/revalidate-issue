/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/server-page",
        permanent: true,
      },
     
    ];
  },
};

module.exports = nextConfig;
