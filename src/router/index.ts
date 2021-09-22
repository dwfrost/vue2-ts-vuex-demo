import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const firstPage = () => import(/* webpackChunkName: "firstPage" */ '../views/first-page/index.vue');
const secondPage = () => import(/* webpackChunkName: "secondPage" */ '../views/second-page/index.vue');

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'firstPage',
    component: firstPage,
  },
  {
    path: '/first-page',
    name: 'firstPage',
    component: firstPage,
  },
  {
    path: '/second-page',
    name: 'secondPage',
    component: secondPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
