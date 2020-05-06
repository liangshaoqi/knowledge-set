import Home from '@view/home/home'
import LoveHeart from '@view/animation/loveHeart/index'
export default {
  menus: [ // 菜单相关的路由
    { route: '/app/home', title: '首页', icon: '', component: Home },
    { route: '/app/love', title: '爱心动画', icon: '', component: LoveHeart },
  ],
  other: [ // 非菜单路由
    
  ]
}