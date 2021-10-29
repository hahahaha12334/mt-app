// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/main.css'
import router from './router'
import store from './store'
Vue.use(ElementUI)
Vue.directive('document-click', {
  bind(el,binding,vnode) {
    document.addEventListener('click',binding.value,false);//false是否捕获
  },
  inserted() {
    console.log('----inserted');
  },
  update() {
    console.log('----update');
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
