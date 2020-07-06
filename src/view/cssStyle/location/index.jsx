import React, { Component } from 'react'
import './index.scss'
class Location extends Component {
  render () {
    return (
      <div className='location-container'>
        <div className='one'>
        1.     Absolute：绝对定位，是相对于最近的且不是static定位的父元素来定位<br/>

        2.     Fixed：绝对定位，是相对于浏览器窗口来定位的，是固定的，不会跟屏幕一起滚动。<br/>

        3.     Relative：相对定位，是相对于其原本的位置来定位的。<br/>

        4.     Static：默认值，没有定位。<br/>

        5.     Inherit：继承父元素的position值。<br/>
        </div>
        <div className='two'>
          2
          <div className='five'>绝对定位</div>
          <div className='six'>直接使用相对定位</div>
        </div>
        <div className='three'>3</div>
        <div className='four'>4</div>
      </div>
    )
  }
}
export default Location