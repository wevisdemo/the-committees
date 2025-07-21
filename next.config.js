const repoName = "the-committees";

const nextConfig = {
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true, // 👈 จำเป็นถ้าใช้ <Image />
  },
};

module.exports = nextConfig;
