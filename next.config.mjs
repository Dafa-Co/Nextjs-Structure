/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_URL: "https://e-commerce-z199.onrender.com/api/v1/",
  },
  async redirects() {
    return [
      {
        source: "/auth",
        destination: "/auth/login",
        permanent: true,
      },
      {
        source: "/",
        destination: "/public/coming",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
