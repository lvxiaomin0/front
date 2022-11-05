import Vue from 'vue'
import App from './App.vue'
// import bulma from 'bulma'
// import 'bulma/css/bulma.css'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import router from './router'
import axios from 'axios'
import store from './store'
import HappyScroll from 'vue-happy-scroll'
// 引入css
import 'vue-happy-scroll/docs/happy-scroll.css'


//自定义组件名
Vue.component('happy-scroll', HappyScroll)

Vue.config.productionTip = false
// Vue.use(bulma)
Vue.use(Buefy)
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(HappyScroll)
Vue.prototype.axios = axios

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
