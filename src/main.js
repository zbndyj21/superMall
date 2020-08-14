import Vue from 'vue'
import App from './App.vue'
import router from './router'


//swiper 太坑，搞不定options 全部无效
// import VueAwesomeSwiper from "vue-awesome-swiper";
// Vue.use(VueAwesomeSwiper);
// import "swiper/swiper-bundle.css";

// element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
