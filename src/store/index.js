import Vue from 'vue';
import Vuex from 'vuex';
import context from './context.js';
import networkConnector from './networkConnector.js';
import room from './room.ts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { networkConnector, context, room }
});
