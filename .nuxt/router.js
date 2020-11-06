import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _941d8802 = () => interopDefault(import('../pages/indexBak.vue' /* webpackChunkName: "pages/indexBak" */))
const _0147b7d8 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _11463fa8 = () => interopDefault(import('../pages/noticeDetailList.vue' /* webpackChunkName: "pages/noticeDetailList" */))
const _32ad670a = () => interopDefault(import('../pages/noticeList.vue' /* webpackChunkName: "pages/noticeList" */))
const _f802743e = () => interopDefault(import('../pages/userDetail.vue' /* webpackChunkName: "pages/userDetail" */))
const _6bd624a4 = () => interopDefault(import('../pages/userList.vue' /* webpackChunkName: "pages/userList" */))
const _35b480fd = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _941d8802,
    name: "indexBak"
  }, {
    path: "/login",
    component: _0147b7d8,
    name: "login"
  }, {
    path: "/noticeDetailList",
    component: _11463fa8,
    name: "noticeDetailList"
  }, {
    path: "/noticeList",
    component: _32ad670a,
    name: "noticeList"
  }, {
    path: "/userDetail",
    component: _f802743e,
    name: "userDetail"
  }, {
    path: "/userList",
    component: _6bd624a4,
    name: "userList"
  }, {
    path: "/",
    component: _35b480fd,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
