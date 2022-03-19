/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: getBasePath(),
  basePath: getBasePath(),
  webpack(webpackConfig) {
    webpackConfig.output.publicPath =
      getBasePath() + webpackConfig.output.publicPath; //资源生成前缀
    return webpackConfig;
  },

  publicRuntimeConfig: {
    basePath: getBasePath(), //写入路径
  },
};

function getBasePath() {
  var basePath = "";
  if (isProd && process.env.BASE_PATH) {
    if (process.env.BASE_PATH.startsWith("/")) {
      basePath = process.env.BASE_PATH;
    } else {
      basePath = "/" + process.env.BASE_PATH;
    }
  }
  return basePath;
}

module.exports = nextConfig;
