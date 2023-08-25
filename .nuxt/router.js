import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _557784aa = () => interopDefault(import('../pages/indexBak.vue' /* webpackChunkName: "pages/indexBak" */))
const _5d039349 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _0c5d6452 = () => interopDefault(import('../pages/noticeDetailList.vue' /* webpackChunkName: "pages/noticeDetailList" */))
const _847fd334 = () => interopDefault(import('../pages/noticeList.vue' /* webpackChunkName: "pages/noticeList" */))
const _5b158fcc = () => interopDefault(import('../pages/userDetail.vue' /* webpackChunkName: "pages/userDetail" */))
const _699b3659 = () => interopDefault(import('../pages/userList.vue' /* webpackChunkName: "pages/userList" */))
const _d9481f9c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/indexBak",
    component: _557784aa,
    name: "indexBak"
  }, {
    path: "/login",
    component: _5d039349,
    name: "login"
  }, {
    path: "/noticeDetailList",
    component: _0c5d6452,
    name: "noticeDetailList"
  }, {
    path: "/noticeList",
    component: _847fd334,
    name: "noticeList"
  }, {
    path: "/userDetail",
    component: _5b158fcc,
    name: "userDetail"
  }, {
    path: "/userList",
    component: _699b3659,
    name: "userList"
  }, {
    path: "/",
    component: _d9481f9c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
