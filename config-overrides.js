const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#836EFE',
      '@success-color': '#836EFE',
      '@text-selection-bg': '#836EFE',
      '@link-color': '#836EFE',
    },
  })
);
