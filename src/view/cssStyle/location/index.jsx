import React, { Component } from 'react'
import './index.scss'

import { isElementInViewport } from 'src/utils/index'
class Location extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingImageSrc: false
    }
  }
  // 判断4模块是否出现在可视页面中
  elInViewprot () {
    let el = document.getElementsByClassName('four')[0]
    this.setState({
      loadingImageSrc: isElementInViewport(el)
    }, () => {
      console.log('模块4是否出现在视口中:' , this.state.loadingImageSrc)
    })
  }
  componentDidMount() {
    // 对容器滚动条进行监听
    let el = document.getElementsByClassName('content-box')[0]
    el.addEventListener('scroll', () => {
      this.elInViewprot()
    })
  }
  render () {
    
    return (
      <div className='location-container'>
        <div className='one'>
        1.     Absolute：绝对定位，是相对于最近的且不是static定位的父元素来定位<br/>

        2.     Fixed：绝对定位，是相对于浏览器窗口来定位的，是固定的，不会跟屏幕一起滚动。<br/>

        3.     Relative：相对定位，是相对于其原本的位置来定位的。<br/>

        4.     Static：默认值，没有定位。<br/>

        5.     Inherit：继承父元素的position值。<br/>
        {this.state.loadingImageSrc ? '4模块出现在可视页面中' : '4模块不在在可视页面中'}
        </div>
        <div className='two'>
          2
          <div className='five'>绝对定位</div>
          <div className='six'>直接使用相对定位</div>
        </div>
        <div className='three'>3</div>
        <div className='four'>
          <p>4</p>
        </div>
      </div>
    )
  }
}
export default Location