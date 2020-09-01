import React from 'react'
import { Button } from 'antd'
export default function DecoratorCom () {
  let test1 = (e) => {
    // 装饰器基本用法
    function testable (target) {
      target.isTestable = true
    }
    @testable
    class MyTestableClass {}
    console.log(MyTestableClass.isTestable)
  }
  let test2 = () => {
    function readonly (target) { // target就是class类
      console.log(target)
      target.a = 2
    }
    class Person {
      @readonly
      name () {
        console.log()
        return this.a
      }
    }
    let josn = new Person()
    console.log(josn.name())
  }
  let test3 = () => {
    function log (text) {
      return function (target) {
        target.prototype.logger = () => {
          return `${text}, ${target.name}被调用`
        }
      }
    }
    @log('你好')
    class MyClass {}
    let test = new MyClass()
    console.log(test.logger())
  }
  let test4 = () => {
    class C {
      @readonly(false)
      a () {}
      method () {
        console.log('cat')
      }
    }
    // 对于类属性或方法的装饰本质是操作其描述符，可以把此时的装饰器理解成是 Object.defineProperty(obj, prop, descriptor)的语法糖
    function readonly(value) {
      return function (target, key, descriptor) {
        /**
         * 此处target为C.prototype
         * key为a, method
         * 原 descriptor 为：{ value: f, enumarable: false, writable: true, configurable: true }
         * @param {*} target
         * @param {*} name
         * @param {*} descriptor
         */
        console.log(key)
        descriptor.writable = value // 不允许修改
        return descriptor
      }
    }
    let c = new C()
    c.method()
    c.method = () => console.log('dog') // 修改会报错因为是只读类型,因为descriptor.writable为false
  }
  return (
    <div>
      <p>decorator装饰器的使用</p>
      <Button onClick={test1}>基础用法1</Button>
      <Button onClick={test2}>基础用法2</Button>
      <Button onClick={test3}>基础用法3</Button>
      <Button onClick={test4}>基础用法4</Button>
    </div>
  )
}