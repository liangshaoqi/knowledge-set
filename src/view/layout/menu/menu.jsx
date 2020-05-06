import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
// import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './menu.scss';
const { Item } = Menu;
export default function Menus() {
  let [menuList] = useState([
    {
      name: '首页',
      id: '1',
      path: '/app/home',
    },
    {
      name: '动画-爱心',
      path: '/app/love',
      id: '2',
    },
  ]);
  let [collapsed] = useState(false)
  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed)
  // }
  return (
    <>
      <div className='logo-view'>
        <div title='React'>React</div>
        {/* <Button onClick={toggleCollapsed} type='primary'>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button> */}
      </div>
      <Menu
        className="menu-view"
        mode="inline"
        defaultSelectedKeys="/app/home"
        theme="dark"
        inlineCollapsed={collapsed}
      >
        {
          menuList.map((item) => {
            return (
              <Item key={item.path}>
                <Link to={item.path}>
                  <span>{item.name}</span>
                </Link>
              </Item>
            )
          })
        }
      </Menu>
    </>
  );
}
