import React, { Component } from 'react';
// 头部
import Header from '@components/header';
// footer组件
import Footer from '@components/footer';
import Crumbs from '@/components/crumbs'
import { Switch, Route } from 'react-router-dom';
import { browserType } from '@utils';
import routesConfig from '@routes/config' // 路由配置json
import './style/layout.scss';
import ast from '../../practice/parse';
import Menu from '@view/layout/menu/menu'


class Layouts extends Component {
  componentDidMount() {
    console.log(ast);
  }
  render() {
    console.log(browserType());
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
                  routesConfig.menus.map((item, index) => {
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
