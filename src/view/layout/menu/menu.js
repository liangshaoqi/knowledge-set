import React, { useState } from 'react'
import { Menu } from 'antd'

const { SubMenu  } = Menu
const { Item } = SubMenu
export default function Menus() {
  const [ menuList, setMenuList ] = useState(
    [
      {
        name: '首页',
        id: '1',
        path: '/app/home'
      },
      {
        name: '动画-爱心',
        id: '/app/love'
      }
    ]
  )
  let a = () => {
    setMenuList([])
  }
  return (
    <Menu
      mode="inline"
    >
      {
        menuList.map(item => {
          return (
            <SubMenu title={'菜单'}>
              <Item>{item.name}</Item>
            </SubMenu>
          )
        })
      }
      {/* <div>点击修改</div> */}
    </Menu>
  )
}