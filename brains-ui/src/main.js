import Vue from 'vue'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import ZkTable from 'vue-table-with-tree-grid'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'

import '@/styles/index.scss' // global css
import './assets/iconfont/iconfont'; // iconfont
import App from './App'
import router from './router'
import store from './store'
import * as filters from './filters' // 全局filter
import global_  from '@/utils/menu';
import '@/icons' // icon
import '@/permission' // permission control
import VueParticles from 'vue-particles'

Vue.use(ElementUI, { locale })
Vue.use(VueParticles)

Vue.config.productionTip = false

Vue.directive('btnHas', {
  update: function (el, binding) {
    if(!global_.isBtnPermit(binding.value)){
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    };
  }
});

store.subscribe((mutation, state) => {
  // console.log('subscribe mutation.type', mutation.type);
  if (mutation.type == "SET_USERID") {
    const userId = store.getters.userId;
    store.dispatch('GetMenus', userId)
  } else if (mutation.type == "SET_MENUS") {
    const menus = store.getters.menus;
    console.log("subscribe SET_MENUS",JSON.stringify(menus) );
    router.addRoutes(menus);
  }
  
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
