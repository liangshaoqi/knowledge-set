const path = require('path')
const { override, fixBabelImports, addLessLoader, addWebpackAlias } = require('customize-cra')
module.exports = override(
  // antd按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  // 主题颜色
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' }
  }),
  // 别名配置(减少写相对路径的时间)
  addWebpackAlias({
    '@view': path.resolve(__dirname, 'src/view')
  })
)