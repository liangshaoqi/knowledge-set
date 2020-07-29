import React from 'react'
import './index.scss'

export default function Animate() {
  return (
    <div className='animation-view'>
      <div className='loading-view'>
        <p>动画steps使用,steps ( n, [start | end] ),第一个参数是一个正值，指定动画分割的段数
第二个参数定义动画执行开始点，可设定为 start 或 end，这个值为可选值，当未传入参数时默认以 end 方式执行</p>
        <img className='loading' src={require('../../../assets/work/loading.png')} alt='loading'></img>
      </div>
      <div className='person-run'>
        <p>人物奔跑使用background-position属性控制</p>
        <div className='person'></div>
        <div className='person1'></div>
      </div>
    </div>
  )
}