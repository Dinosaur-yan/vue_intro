import { createStore } from "vuex";
import app from "./modules/app";
import token from "./modules/token";
import user from "./modules/user";
import getters from "./getters";

export default createStore({
  modules: {
    app,
    token,
    user,
  },
  getters,
});
