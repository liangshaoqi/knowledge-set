import React, { Component } from 'react'
import './style/layout.scss'
class Layouts extends Component {
  render() {
    return (
      <section className='layout-content'>
        <nav className='menu-box'>菜单</nav>
        <div className='layout-right'>
          <header className='header-box'>头部</header>
          <div className='content-box'>内容</div>
          <footer className='footer-box'>尾部</footer>
        </div>
      </section>
    )
  }
}
export default Layouts
