import React, { useEffect } from 'react'
import { Button } from 'antd'
import './index.scss'
export default function PrototypeTest () {
  let test1 = () => {
    // 每个函数都有prototype属性,这个属性指向函数的原型对象
    function Person (age) {
      this.age = age
    }
    Person.prototype.name = 'uzi'
    let person1 = new Person()
    let person2 = new Person()
    console.log(person1.name)
    console.log(person2.name)
    console.log(person2.__proto__)
    console.log(Person.prototype)
    console.log(Person.prototype.constructor)
  }
  let test2 = () => {
    // 每个对象(除了null)都会有__proto__属性,这个属性会指向该对象的原型
    function Person() {}
    let person = new Person()
    console.log(person.__proto__ === Person.prototype) // true
  }
  let test3 = () => {
    // 每个原型都有constructor属性,指向该关联的构造函数
    function Person() {}
    console.log(Person === Person.prototype.constructor) // true
  }
  let test4 = () => {
    function Person() {}
    let person = new Person()
    console.log(Object.getPrototypeOf(person) === Person.prototype) // true
    console.log(person.constructor === Person) // true
  }
  let test5 = () => {
    let obj = {}
    obj.name = 'uzi'
    console.log(obj.name)
    console.log(Object.prototype.__proto__)
  }
  let test6 = () => {}
  useEffect(() => {
  })
  return (
    <div className='prototype-test'>
      原型链练习,看图,代码<br/>
      <div className='flex'>
        <img src={require('../../../assets/work/yuanxinlian.png')} alt="" width={400} height={250}/>
        <img src={require('../../../assets/work/yuanxinlian2.png')} alt="" width={400} height={250}/>
        <img src={require('../../../assets/work/yuanxinlian3.png')} alt="" width={400} height={350}/>
        <img src={require('../../../assets/work/yuanxinlian4.png')} alt="" width={400} height={350}/>
      </div>
      <Button onClick={test1}>练习1</Button>
      <Button onClick={test2}>练习2</Button>
      <Button onClick={test3}>练习3</Button>
      <Button onClick={test4}>练习4</Button>
      <Button onClick={test5}>练习5</Button>
      <Button onClick={test6}>练习6</Button>
    </div>
  )
}