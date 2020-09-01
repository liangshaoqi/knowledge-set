import React from 'react'
import { Button } from 'antd'
export default function DefineProperty() {
  let test1 = () => {
    let data = {
      name: 'm762',
      size: 'm416'
    }
    let dataProxy = new Proxy(data, {
      set(target, prop, newValue) {
        console.log(target, prop, newValue)
        console.log('通知订阅者')
        return true
      },
      get(target, value) {
        return value
      }
    })
    dataProxy.name = 'uzi'
  }
  return (
    <div>
      <p>proxy的使用</p>
      <br/>
      <div>
        <Button onClick={test1}>例1</Button>
      </div>
    </div>
  )
}