import React, { Component } from 'react'
// 头部
import Header from '@components/header'
// footer组件
import Footer from '@components/footer'
import { browserType } from '@utils'
import './style/layout.scss'
class Layouts extends Component {
  render() {
    console.log(browserType())
    return (
      <section className='layout-content'>
        {/* 左侧菜单 */}
        <nav className='menu-box'>
          <div className='menu-content'>菜单</div>
        </nav>
        <div className='layout-right'>
          <header className='header-box'>
            <Header></Header>
          </header>
          <div className='content-box'>内容</div>
          <footer className='footer-box'>
            <Footer></Footer>
          </footer>
        </div>
      </section>
    )
  }
}
export default Layouts
