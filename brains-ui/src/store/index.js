import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import tagsView from './modules/tagsView'
// import permission from './modules/permission'
import user from './modules/user'
import menu from './modules/menu'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    tagsView,
    // permission,
    menu
  },
  getters
})

export default store
