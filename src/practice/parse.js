const recast = require('recast')
// 引入变量声明,变量符号,函数声明三种'模具'
const { variableDeclaration, variableDeclarator, functionExpression } = recast.types.builders
const code = `
  function add(a, b) {
    return a + b
  }
`
// 解析代码成AST树
const ast = recast.parse(code)
const add = ast.program.body[0]
// 将准备好的组件置入模具中,并组装回原来的ast对象
ast.program.body[0] = variableDeclaration('const', [
  variableDeclarator(add.id, functionExpression(
    null,
    add.params,
    add.body
  ))
])
// 将AST对象重新转回可阅读的代码
const output = recast.print(ast).code
export default output