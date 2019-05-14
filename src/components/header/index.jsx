import React, { Component, Fragment } from 'react'
import { Icon } from 'antd'
import { browserType } from '@utils'
class HeaderBox extends Component {
  // 菜单点击事件
  menuOpen = () => {
    console.log()
    debugger
  }
  render() {
    return (
      <Fragment>
        <div className="header-content">头部</div>
        {/* 左上角菜单 */}
        <nav
          className={
            browserType() === 'pc' ? 'mobile-nav isPc' : 'mobile-nav isMobile'
          }
        >
          <Icon type="menu" onClick={icon => this.menuOpen(icon)} />
        </nav>
      </Fragment>
    )
  }
}
export default HeaderBox
