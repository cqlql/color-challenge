module.exports = {
  publicPath: '',
  css: {
    extract: false,
  },
  assetsDir: 'assets',
  productionSourceMap: false,
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.ts',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '颜色分辨力挑战',
    },
  },
}
