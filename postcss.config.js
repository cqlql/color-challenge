/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * Created by cql on 2016/11/15.
 */

module.exports = {
  plugins: [
    // require('autoprefixer')({
    //   remove: false,
    // }),
    require('postcss-pxtorem')({
      // replace: false,
      rootValue: 100,
      propList: ['*', '!border'],
      selectorBlackList: [/^html$/],
    }),
  ],
}
