import Vue from 'vue'
import VueRouter from 'vue-router'

//通过懒加载的方式导入组件
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
//1.安装插件
Vue.use(VueRouter)

//2.创建路由对象,这里只能用routes，不能自定义其他名字，它实际上是Vuerouter的一个属性
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }

]
const router = new VueRouter({
  routes,
  mode: 'history'

})

//3.导出
export default router
