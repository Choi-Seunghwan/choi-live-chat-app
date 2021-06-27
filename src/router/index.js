import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';
import LiveRoom from '@/pages/LiveRoom.vue';
import startLive from '@/pages/StartLive.vue';
import NotFound from '@/pages/NotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/liveRoom/:roomId',
      name: 'liveRoom',
      component: LiveRoom
    },
    {
      path: '/startLive',
      name: 'startLive',
      component: startLive
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
});
