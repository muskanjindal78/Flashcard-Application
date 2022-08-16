import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: "",
    createDeckname: "",
    createDeckCardNo: ""
  },
  getters: {
    userId: state => state.userId
  },
  mutations: {
    addUserId: (state, user_id) => {
      state.userId = user_id
    },
    addCreateDeckname: (state, {deckname, deckNo}) => {
      state.createDeckname = deckname
      state.createDeckCardNo = deckNo
    },
  },
  actions: {},
  modules: {},
});
