module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'tailwindui.com',
      'images.unsplash.com',
      'www.facebook.com',
      'cdn.sanity.io',
  ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}