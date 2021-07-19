import axios from 'axios'
import router from '@/router/router'
import { getConfig } from '@/api/api'

const ALERT_TIME = 4000
export default {
  state: ()=> ({
    isAuth: false,
    token: '',
    loading: false,
    errMessage: '',
   }),
  mutations: {
    userAuthentificated(state, token) {
      state.isAuth = true
      state.token = token
    },
    lading(state, value) {
      state.loading = value
    },
    setErrorMsg(state, msg) {
      state.errMessage = msg
    },
    removeAlert(state) {
      state.errMessage = ''
    }
  },
  getters: {
    isUserAuth(state) {
      return state.isAuth
    },
    isLoading(state) {
      return state.loading
    },
    getToken(state) {
      return state.token
    },
    errorMsg(state) {
      return state.errMessage
    }
  },
  actions: {
    async fetchLoginUser({ commit }, data) {
      const configLogin = getConfig('login-user')
      configLogin.data = data
      try {
        commit('lading', true)
        const {data: { token }} = await axios(configLogin)
        if(!token) throw new Error()
        commit('userAuthentificated', token)
        router.push('/posts')
      } catch (e) {
        commit('setErrorMsg', 'User authorize error')
        setTimeout(() => commit('removeAlert'), ALERT_TIME)
      } finally {
        commit('lading', false)
      }
    },
    async fetchRegisterUser({ commit }, data) {
      const configRegister = getConfig('register-user')
      configRegister.data = data
      try {
        commit('lading', true)
        const {data: { token }} = await axios(configRegister)
        if(!token) throw new Error()
        commit('userAuthentificated', token)
        router.push('/posts')
      } catch (e) {
        commit('setErrorMsg', 'User create error')
        setTimeout(() => commit('removeAlert'), ALERT_TIME)
      } finally {
        commit('lading', false)
      }
    }
  }
}
