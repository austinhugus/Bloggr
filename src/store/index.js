import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog: {}
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setAllBlogs(state, blogs) {
      state.blogs = blogs
    },
    addToBlogs(state, blog) {
      state.blogs.push(blog)
    },
    setActiveBlog(state, blog) {
      state.activeBlog = blog
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllBlogs({ commit }) {
      try {
        let res = await api.get('blogs')
        commit("setAllBlogs", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createBlog({ commit, dispatch }, blogDeetz) {
      try {
        let res = await api.post('blogs', blogDeetz)
        commit('addToBlogs', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getBlogDeetz({ commit }, _id) {
      try {
        let res = await api.get('blogs/' + _id)
        commit("setActiveBlog", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async removeBlog({ commit, dispatch }, _id) {
      try {
        let res = await api.delete('blogs/' + _id)
        router.push({ name: "Home" })
      } catch (error) {
        console.error(error)
      }
    }
  }


});
