import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    reset(state) {
      state.count = 0;
    },
    setValue(state, value) {
      state.count = value;
    },
  },
});

export default store;
