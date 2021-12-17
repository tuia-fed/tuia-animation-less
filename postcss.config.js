const fs = require('fs');
const {homepage, version, author, animateConfig} = JSON.parse(fs.readFileSync('package.json'));

const header = `
@charset "UTF-8";
/*!
 * animate.css - ${homepage}
 * Version - ${version}
 *
 * Copyright (c) ${new Date().getFullYear()} ${author.name}
 */
`;

module.exports = (ctx) => {
  const prefix = ctx.env === 'compat' ? '' : animateConfig.prefix;
  const devMessage = `🎉🎉🎉🎉 \nanimate.less ${ctx.env} build was compiled sucessfully! \n`;

  console.log(devMessage);

  return {
    map: false,
    plugins: {
      'postcss-easy-import': {root: ctx.file.dirname},
      'postcss-prefixer': {
        prefix,
        ignore: [/\[class\*=.*\]/, /demo-/, /ele/, /ele2/, /box/, /tip/, /btn-box/, /active/],
      },
      "postcss-px2rem-exclude": {
        remUnit: 37.5, // 兼容old
        exclude: /examples/
      },
      'postcss-preset-env': {
        autoprefixer: {
          cascade: false,
        },
        features: {
          'custom-properties': true,
        },
      },
      cssnano: ctx.env === 'production' || ctx.env === 'compat' ? {} : false,
      'postcss-header': {
        header,
      },
    },
  };
};