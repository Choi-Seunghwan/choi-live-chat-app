import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home.vue';
import LiveRoom from '@/pages/LiveRoom.vue';
import NotFound from '@/pages/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/liveroom',
      name: 'liveroom',
      component: LiveRoom
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
});
