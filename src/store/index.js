import Vue from 'vue';
import Vuex from 'vuex';
import context from './context.ts';
import networkConnector from './networkConnector';
import live from './live.ts';
import media from './media.ts';
import account from './account.ts';
import chat from './chat.ts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { networkConnector, context, media, live, account, chat }
});
