/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/your-repo-name", // ← replace with your actual repo name
  assetPrefix: "/your-repo-name/", // ← replace with your actual repo name
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
