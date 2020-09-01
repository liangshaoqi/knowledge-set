const path = require('path')
const { override, fixBabelImports, addLessLoader, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra')
module.exports = override(
  addDecoratorsLegacy(),
  // antd按需加载
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  // 主题颜色
  addLessLoader({
    javascriptEnabled: true,
    // modifyVars: { '@primary-color': '#1DA57A' }
  }),
  // 别名配置
  addWebpackAlias({
    'src': path.resolve(__dirname, 'src/'),
    '@': path.resolve(__dirname, 'src/'),
    '@view': path.resolve(__dirname, 'src/view'),
    '@routes': path.resolve(__dirname, 'src/routes'),
    '@components': path.resolve(__dirname, 'src/components'),
    '@utils': path.resolve(__dirname, 'src/utils'),
  })
)