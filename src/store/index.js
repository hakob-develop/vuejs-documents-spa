import Vue from 'vue';
import Vuex from 'vuex';
import documents from './documents';

Vue.use(Vuex);

const store = {
  modules: {
    documents,
  },
  state: {
  },
  actions: {
  },
  mutations: {
  },
  plugins: [],
};

export default () => new Vuex.Store(store);
