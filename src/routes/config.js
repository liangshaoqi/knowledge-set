import Home from '@view/home/home'
import LoveHeart from '@view/animation/loveHeart/index'
import Animate from '@view/workbook/animate'
import StyledComponents from '@view/workbook/styledComponents'
import UseState from '@view/workbook/useState'
import Hooks from '@view/workbook/hooks'
import ClearEffect from '@view/workbook/clearUseEffect'
export default {
  menus: [ // 菜单相关的路由
    { route: '/app/home', title: '首页', icon: '', component: Home },
    { route: '/app/love', title: '爱心动画', icon: '', component: LoveHeart },
    { route: '/app/workbook', title: '练习册', icon: '',
      children: [
        { route: '/app/workbook/animate', title: '动画', icon: '', component: Animate},
        { route: '/app/workbook/styledComponents', title: 'styledComponents', icon: '', component: StyledComponents},
        { route: '/app/workbook/useState', title: 'useState', icon: '', component: UseState},
        { route: '/app/workbook/Hooks', title: 'Hooks', icon: '', component: Hooks},
        { route: '/app/workbook/ClearEffect', title: 'ClearEffect', icon: '', component: ClearEffect}
      ]
    }
  ],
  other: [ // 非菜单路由
    
  ]
}