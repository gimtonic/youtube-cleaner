const config = {
  webpack: {
    configure: (webpackConfig: any, { env, paths }: any) => {
      return {
        ...webpackConfig,
        entry: {
          main: [
            env === "development" &&
              require.resolve("react-dev-utils/webpackHotDevClient"),
            paths.appIndexJs,
          ].filter(Boolean),
          content: "./src/services/content.ts",
          background: "./src/services/background.ts",
        },
        output: {
          ...webpackConfig.output,
          filename: "static/js/[name].js",
        },
        optimization: {
          ...webpackConfig.optimization,
          runtimeChunk: false,
        },
      };
    },
  },
};

export default config;


// const webpack = require('webpack')
// const path = require('path')
// const CopyPlugin = require('copy-webpack-plugin')
// const srcDir = path.join(__dirname, '..', 'src')

// module.exports = {
//   entry: {
//     popup: path.join(srcDir, 'popup.tsx'),
//     'service-worker': path.join(srcDir, 'service-worker.ts')
//   },
//   output: {
//     path: path.join(__dirname, '../dist'),
//     filename: '[name].js',
//     clean: true
//   },
//   optimization: {
//     splitChunks: {
//       name: 'vendor',
//       chunks(chunk) {
//         return chunk.name !== 'background'
//       }
//     }
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: 'ts-loader',
//         exclude: /node_modules/
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.ts', '.tsx', '.js']
//   },
//   plugins: [
//     new CopyPlugin({
//       patterns: [{ from: '.', to: '.', context: 'public' }],
//       options: {}
//     })
//   ]
// }


// const { merge } = require('webpack-merge');
// const common = require('./webpack.common.js');

// module.exports = merge(common, {
//     devtool: 'inline-source-map',
//     mode: 'development'
// });