import { login } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";

const state = {
  token: "",
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
};

const actions = {
  setToken({ commit }, userInfo) {
    const data = login(userInfo);
    commit("SET_TOKEN", data.access_token);
    setToken(data.access_token);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
