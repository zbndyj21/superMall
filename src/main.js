import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入element-ui, Use element
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(elementUi)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
