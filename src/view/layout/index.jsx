import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from '@components/header'; // 头部
import Footer from '@components/footer'; // footer组件
import Crumbs from '@/components/crumbs'
import routesConfig from '@routes/config' // 路由配置json
import Menu from '@view/layout/menu/menu'

import './style/layout.scss';


class Layouts extends Component {
  componentDidMount() {
  }
  transData(routes) {
    let arr = []
    const addData = (routes) => {
      for (let i = 0; i < routes.length; i++) {
        if (routes[i].children) {
          addData(routes[i].children)
        } else {
          arr.push(routes[i])
        }
      }
    }
    addData(routes)
    return arr
  }
  render() {
    return (
      <section className="layout-content">
        {/* 左侧菜单 */}
        <nav className="menu-box">
          <Menu></Menu>
        </nav>
        <div className="layout-right">
          <Header></Header>
          <Crumbs></Crumbs>
          <div className="content-box">
            {
              <Switch>
                {
                  this.transData(routesConfig.menus).map((item, index) => {
                    return <Route path={item.route} component={item.component} key={index}></Route>
                  })
                }
              </Switch>
            }
          </div>
          <footer className="footer-box">
            <Footer></Footer>
          </footer>
        </div>
      </section>
    );
  }
}
export default Layouts;
