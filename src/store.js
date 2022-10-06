import { createStore } from "vuex";
import axios from "axios";

let store = createStore({
  state() {
    return {
      users: [],
      isAuthenticated: false,
    };
  },
  mutations: {
    getUsers(state, payload) {
      state.users = payload;
    },
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
  actions: {
    async getUsers(context) {
      let res = await axios.get("https://jsonplaceholder.typicode.com/users");
      context.commit("getUsers", res.data);
      console.log(res.data);
    },
  },
});

export default store;
