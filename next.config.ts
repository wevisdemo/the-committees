import type { NextConfig } from "next";
const repoName = "the-committees";

const nextConfig: NextConfig = {
  output: "export", // 👈 สำคัญ: export static
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true, // 👈 จำเป็นถ้าใช้ <Image />
  },
};

export default nextConfig;
