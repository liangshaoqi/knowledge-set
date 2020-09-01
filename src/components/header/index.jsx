import React, { Component } from 'react'
import { Icon } from 'antd'
import { browserType } from '@utils'
import './style.scss'
class HeaderBox extends Component {
  // 菜单点击事件
  menuOpen = () => {
    console.log()
  }
  componentDidMount() {
    Promise.race([this.wake(3000), this.wake(2000), this.wake(1000)]).then(result => {
      // console.log(result)
    }).catch(err => {
      console.log(err)
    })
  }
  wake = (time) => {
    return new Promise((resolve, reject) => {
      setTimeout(_ => {
        resolve(`${time / 1000}秒后醒来`)
      }, time)
    })
  }
  render() {
    return (
      <header className='header-box'>
        <div className="header-content">头部</div>
        {/* 左上角菜单 */}
        <nav
          className={
            browserType() === 'pc' ? 'mobile-nav isPc' : 'mobile-nav isMobile'
          }
        >
          <Icon type="menu" onClick={icon => this.menuOpen(icon)} />
        </nav>
      </header>
    )
  }
}
export default HeaderBox
