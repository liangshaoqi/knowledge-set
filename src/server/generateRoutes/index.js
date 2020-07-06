const path = require('path')
const fs = require('fs')

const relativePath = '../../view/workbook'

const filePath = path.resolve(__dirname, relativePath)
console.log('需要读取的文件路径:', filePath)
// 同步读取文件目录
let files = fs.readdirSync(filePath)
console.log(files)
// 生成路由菜单数组
if (files && files.length > 0) {
  
}