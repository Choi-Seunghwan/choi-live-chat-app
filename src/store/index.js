import Vue from 'vue';
import Vuex from 'vuex';
import connection from './connection.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { connection }
});
