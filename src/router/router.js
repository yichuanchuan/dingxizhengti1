/*
 * @Description:
 * @Version: 2.0
 * @Author: yichuanhao
 * @Date: 2024-03-21 09:14:53
 * @LastEditors: yichuanhao 1274816963@qq.com
 * @LastEditTime: 2024-03-31 10:33:14
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home/Home.vue';
import entrancePage from '../views/entrancePage/entrancePage.vue';
import footstone from '../views/footstone/footstone.vue';
import aWall from '../views/aWall/aWall.vue';
import bWall from '../views/bWall/bWall.vue';
import aBeam from '../views/aBeam/aBeam.vue';
import aWindow from '../views/aWindow/aWindow.vue';
import aLight from '../views/aLight/aLight.vue';
import entrance from '../views/entrance/entrance.vue';
import over from '../views/over/over.vue';
Vue.use(VueRouter);

const routes = [
  { path: '/', meta: { name: '视频页' }, component: entrance },
  { path: '/entrancePage', meta: { name: '数说定电' }, component: entrancePage },
  { path: '/footstone', meta: { name: '基石' }, component: footstone },
  { path: '/aWall', meta: { name: '一面墙' }, component: aWall },
  { path: '/bWall', meta: { name: '一面墙' }, component: bWall },
  { path: '/aBeam', meta: { name: '一道梁' }, component: aBeam },
  { path: '/aWindow', meta: { name: '一扇窗' }, component: aWindow },
  { path: '/aLight', meta: { name: '一束光' }, component: aLight },
  { path: '/home', meta: { name: '欢迎页' }, component: Home },
  { path: '/over', meta: { name: '结束页' }, component: over },
];

const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.name;
  next();
});

export default router;
