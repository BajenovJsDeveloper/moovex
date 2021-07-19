import axios from 'axios'
import { getConfig } from '@/api/api'

export default {
  state: () => ({
    userPosts: [],
    restPosts: [],
    loading: false
  }),
  mutations: {
    saveUserPosts(state, posts) {
      state.userPosts = posts
    },
    saveRestPosts(state, posts) {
      state.restPosts = posts
    },
    appendToRestPosts(state, post) {
      state.restPosts.push(post)
    },
    appendToUserPosts(state, post) {
      state.userPosts.push(post)
    },
    loading(state, value) {
      state.loading = value
    }
  },
  getters: {
    userPosts(state) {
      return state.userPosts
    },
    restPosts(state) {
      return state.restPosts
    },
    isPostLoading(state) {
      return state.loading
    }
  },
  actions: {
    async fetchPosts({ commit }, token) {
      const configUserPosts = getConfig('get-user-posts', token)
      const configaAllPosts = getConfig('get-all-posts', token)
      commit('loading', true)
      try {
        const { data: { posts } } = await axios(configUserPosts)
        const allPostsData = await axios(configaAllPosts)
        const userPosts = allPostsData.data.filter(post => posts.includes(post.id))
        const restPosts = allPostsData.data.filter(post => !posts.includes(post.id))
        commit('saveUserPosts', userPosts)
        commit('saveRestPosts', restPosts)
      } catch (e) {
        console.log(e.message)
      } finally {
        commit('loading', false)
      }
    },
    async removePost({ commit, state }, { id, token }) {
      const configRemovePost = getConfig('remove-user-post', token)
      configRemovePost.url += id
      try {
        commit('loading', true)
        await axios(configRemovePost)
        commit('appendToRestPosts', state.userPosts.find(post => post.id === id))
        commit('saveUserPosts', state.userPosts.filter(post => post.id !== id))
      } catch (e) {
        console.log(e.message)
      } finally {
        commit('loading', false)
      }
    },
    async appendPost({ commit, state }, { id, token }) {
      const configAddPosts = getConfig('add-user-post', token)
      configAddPosts.data = { posts: [id] }
      try{
        commit('loading', true)
        await axios(configAddPosts)
        commit('appendToUserPosts', state.restPosts.find(post => post.id === id))
        commit('saveRestPosts', state.restPosts.filter(post => post.id !== id))
      } catch (e) {
        console.log(e.message)
      } finally {
        commit('loading', false)
      }
    }
  }
}