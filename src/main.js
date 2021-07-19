import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '@/router/router'
import compositionApi from '@vue/composition-api'
import store from '@/store/index'
import components from '@/components/index'

Vue.use(compositionApi)
Vue.use(VueRouter)
Vue.config.productionTip = false

const isAuthenticated = () => store.getters.isUserAuth
router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta?.requiresAuth)) {
    if (isAuthenticated()) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

components.forEach(component => {
  Vue.component(component.name, component)
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

