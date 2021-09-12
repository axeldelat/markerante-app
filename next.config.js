module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'tailwindui.com',
      'images.unsplash.com',
  ],
  },
  env: {
    ELASTICEMAIL_API: 'DD8E667C8277D66FB729263E7E7C2A0BD9DCE1EA900798462C904BF4D5ACFE7D7513CE2A2C3707BA22AC90833F2EB3CA',
    ELASTICEMAIL_SENDER_EMAIL: 'hola@markerante.com',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
