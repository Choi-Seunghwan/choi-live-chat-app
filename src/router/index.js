import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home.vue';
import Room from '@/pages/Room.vue';
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
      path: '/room',
      name: 'room',
      component: Room
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
});
