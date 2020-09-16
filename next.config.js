const withImages = require('next-images');
const withManifest = require('next-manifest');
const withFonts = require('next-fonts');

const defaults = {
  // next-manifest options
  output: './', // The folder where the manifest will be generated.
  // manifest options
  name: "Chick'Inn",
  // icons: [
  //   {
  //     src: '/static/icons/icon-192x192.png',
  //     sizes: '192x192',
  //     type: 'image/png',
  //   },
  //   {
  //     src: '/static/icons/icon-512x512.png',
  //     sizes: '512x512',
  //     type: 'image/png',
  //   },
  // ],
};

module.exports = withFonts(
  withManifest(
    withImages({
      manifest: {
        ...defaults,
      },
      webpack(config) {
        config.resolve.modules.push(__dirname);
        return config;
      },
    }),
  ),
);
