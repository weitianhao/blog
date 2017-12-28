import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/home.vue'
import Welcome from '../components/welcome/welcome'
import Articalupdate from '../components/artical/articalupdate.vue'
import Articallist from '../components/artical/articalist.vue'
import Articaladd from '../components/artical/articaladd.vue'
import addoneclass from '../components/classify/addoneclass.vue'
import addtwoclass from '../components/classify/addtwoclass.vue'
import classlist from '../components/classify/classlist.vue'
import addport from '../components/port/addport.vue'
import backport from '../components/port/backport.vue'
import fontport from '../components/port/fontport.vue'
import bockbord from '../components/bord/bockbord.vue'
import mainbord from '../components/bord/mainbord.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Login
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        component: Welcome
      },
      {
        path: 'Articalupdate',
        component: Articalupdate
      },
      {
        path: 'Articallist',
        component: Articallist
      },
      {
        path: 'Articaladd',
        component: Articaladd
      },
      {
        path: 'addoneclass',
        component: addoneclass
      },
      {
        path: 'addtwoclass',
        component: addtwoclass
      },
      {
        path: 'classlist',
        component: classlist
      },
      {
        path: 'addport',
        component: addport
      },
      {
        path: 'backport',
        component: backport
      },
      {
        path: 'fontport',
        component: fontport
      },
      {
        path: 'bockbord',
        component: bockbord
      },
      {
        path: 'mainbord',
        component: mainbord
      }
    ]
  }
]
const router = new VueRouter({
  routes
})
export default router
