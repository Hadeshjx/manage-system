import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import './plugins/element.js'


new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
