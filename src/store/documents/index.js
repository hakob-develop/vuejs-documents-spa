import mutations from './mutations';
import * as getters from './getters';
import * as actions from './actions';

export default {
  state: {
    documents: [],
    current: null,
  },
  mutations,
  actions,
  getters,
};
