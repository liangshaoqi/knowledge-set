import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Menu } from 'antd';

import routes from '@/routes/config'

import './menu.scss';

const { menus } = routes
const { Item, SubMenu } = Menu;
export default function Menus() {
  let [collapsed] = useState(false)
  useEffect(() => {
    // console.log(1111)
  })
  useEffect(() => {
    // console.log(2)
  })
  useEffect(() => {
    // console.log(3)
  })
  // 渲染菜单项
  const renderMenuItem = (menus) => {
    return menus.map(item => {
      if (item.children) {
        return (
          <SubMenu key={item.route} title={item.title}>
            {renderMenuItem(item.children)}
          </SubMenu>
        )
      } else {
        return (
          <Item key={item.route}>
            <Link to={item.route}>
              <span>{item.title}</span>
            </Link>
          </Item>
        )
      }
    })
  }
  return (
    <>
      <div className='logo-view'>
        <div title='React'>React</div>
      </div>
      <Menu
        className="menu-view"
        mode="inline"
        defaultSelectedKeys="/app/home"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        {renderMenuItem(menus)}
      </Menu>
    </>
  );
}
