import React, { useState, useEffect } from 'react';
import { Button} from 'antd'
const recast = require('recast');
export default function Ast() {
  let [code, setCode] = useState(`function add(a, b) {return a + b}`)
  let [count, setCount] = useState(0)
  let change = (e) => {
    setCode(e.target.value)
  }
  let btnClick = () => {
    // 使用工具解析
    const ast = recast.parse(code);
    console.log(ast)
  }
  let addCount = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    // console.log('组件更新')
    document.title = 'AST' + count
  }, [count]) 
  return <div>
    <div>
      <p>输入代码</p>
      <textarea onChange={change} value={code} id="" cols="30" rows="10"></textarea>
      <Button onClick={btnClick}>输出AST</Button>
      <Button onClick={addCount}>add</Button>
    </div>
    <div>
      {/* <p>通过API修改demo.js中的方法,改为export.fn类型,需要到当前目录执行node read demo.js</p> */}
    </div>
  </div>;
}
