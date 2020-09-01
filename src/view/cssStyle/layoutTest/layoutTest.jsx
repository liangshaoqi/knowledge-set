import React from 'react'
import './layoutTest.scss'
export default function LayoutTest () {
  return (
    <div className='layout-test'>
      <h2>方法一(两边固定,中间自适应flot)</h2>
      <div className='test1'>
        <div className='main'>main</div>
        <div className='left'>left</div>
        <div className='right'>right</div>
      </div>
      <h2>方法二(flex)</h2>
      <div className='test2'>
        <div className='left'>left</div>
        <div className='main'>main</div>
        <div className='right'>right</div>
      </div>
    </div>
  )
}