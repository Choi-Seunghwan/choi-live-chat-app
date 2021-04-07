import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/pages/Home.vue';
import LiveRoom from '@/pages/LiveRoom.vue';
import createRoom from '@/pages/CreateRoom.vue';
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
      path: '/liveRoom/:roomId',
      name: 'liveRoom',
      component: LiveRoom
    },
    {
      path: '/createRoom',
      name: 'createRoom',
      component: createRoom
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
});
