import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import mutations from './mutation';
import actions from './action';
import plugins from './plugins';

// modules
import count from './modules/count';
import module2 from './modules/module2';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    count,
    module2,
  },
  plugins,
});
