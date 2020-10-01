import Vue from 'vue';
import Vuex from 'vuex';
import context from './context.js';
import connection from './connection.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { connection, context }
});
