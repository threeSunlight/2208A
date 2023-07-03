import Vue from 'vue'
import App from './App.vue'
 import plugins from './plugins'
import router from './router/index'
import VueRouter from 'vue-router'



Vue.config.productionTip = false



Vue.use(plugins)
Vue.use(VueRouter)

 const vm = new Vue({
  render: h => h(App),
  router
})

console.log(vm);
vm.$mount('#app')