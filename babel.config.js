/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-undef */
module.exports = function(api) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    api.cache(true);
    return {
      presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        '@babel/preset-typescript',
        '@babel/preset-react'      
      ],
      plugins: [
        [
          "module-resolver",
        '@babel/plugin-syntax-jsx'
        ]
      ]
    };
  };
  