const path = require('path');
exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: '/using-dsg',
    component: require.resolve('./src/templates/using-dsg.tsx'),
    context: {},
    defer: true,
  });
};

exports.onCreateWebpackConfig = async ({ actions: { setWebpackConfig } }) => {
  setWebpackConfig({
    resolve: {
      alias: {
        '@/components': path.resolve(__dirname, 'src/components'),
      },
    },
  });
};
