import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/modules/Auth/Login'
import Layout from '@/modules/Layout/Layout'
import IndexIndex from '@/modules/Index/Index'
import TestIndex from '@/modules/Test/Index'
import FetchData from '@/modules/Test/FetchData'
import LifeCycle from '@/modules/Test/LifeCycle'
import JqueryStyle from '@/modules/Test/JqueryStyle'
import ComponentsTest from '@/modules/Test/ComponentsTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      //导航钩子，用于处理用户权限
      //todo 访问组件
      beforeEnter: (to, from, next) => {
        if (localStorage.username) {
          next();
        } else {
          next('/login');
        }
      },
      children: [
        {
          path: '/',
          component: IndexIndex
        },
        {
          path: 'TestIndex',
          component: TestIndex
        },
        {
          path: 'ComponentsTest',
          component: ComponentsTest
        },
        {
          path: 'LifeCycle',
          component: LifeCycle
        },
        {
          path: 'Jquery',
          component: JqueryStyle
        },
        {
          path: 'FetchData',
          component: FetchData
        }
      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})
