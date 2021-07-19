import Vuex from 'vuex'
import Vue from 'vue'
import login from '@/store/login'
import posts from '@/store/posts'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    posts
  }
})
