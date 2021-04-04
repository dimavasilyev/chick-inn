const withImages = require('next-images');
const withManifest = require('next-manifest');
const withFonts = require('next-fonts');

const defaults = {
  output: './', // The folder where the manifest will be generated.
  name: "Chick'Inn",
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
