import React from 'react'
import { Button } from 'antd'
export default function DefineProperty() {
  let test1 = () => {
    let obj = {}
    let value = 1
    Object.defineProperty(obj, 'num', {
      get: function() {
        console.log('执行get操作')
        return value
      },
      set: function(newValue) {
        console.log('执行set操作')
        value = newValue
        // 通知订阅者,或者修改视图等
      },
      enumerable: true,
      configurable: true
    })
    console.log(obj)
    obj.num = 3
    console.log(obj.num)
  }
  return (
    <div>
      <p>defineProperty的使用</p>
      <br/>
      <p>Object.defineProperty(obj, prop, descriptor)参数解析</p>
      <pre>
        obj: 要在其上定义属性的对象。<br/>
        prop:  要定义或修改的属性的名称。<br/>
        descriptor: 将被定义或修改的属性的描述符。
      </pre>
      <div>
        <Button onClick={test1}>例1</Button>
      </div>
    </div>
  )
}