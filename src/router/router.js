/*
 * @Description:
 * @Version: 2.0
 * @Author: yichuanhao
 * @Date: 2024-03-21 09:14:53
 * @LastEditors: yichuanhao 1274816963@qq.com
 * @LastEditTime: 2024-03-26 21:11:13
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/Home.vue';
import entrancePage from '../views/entrancePage/entrancePage.vue';
import footstone from '../views/footstone/footstone.vue';
import aWall from '../views/aWall/aWall.vue';
import bWall from '../views/bWall/bWall.vue';
Vue.use(VueRouter);

const routes = [
  { path: '/', meta: { name: '欢迎页' }, component: Home },
  { path: '/entrancePage', meta: { name: '数说定电' }, component: entrancePage },
  { path: '/footstone', meta: { name: '基石' }, component: footstone },
  { path: '/aWall', meta: { name: '一面墙' }, component: aWall },
  { path: '/bWall', meta: { name: '一面墙' }, component: bWall },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.name;
  next();
});

export default router;