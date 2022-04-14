const withImages = require("next-images");

module.exports = withImages({
  assetPrefix: "i.ibb.co",
  esModule: true,
  dynamicAssetPrefix: true,
  webpack(config, options) {
    return config;
  },
});

module.exports = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ["assets.vercel.com"],
    domains: ["i.ibb.co"],
    formats: ["image/avif", "image/webp"],
  },
};
