import { getUserRoleMenus } from "@/api/menu";
import global_ from '@/utils/menu';

const menu = {
  state: {
    menus: [],
    buttons: {}
  },

  mutations: {
    SET_MENUS: (state, menus) => {
      state.menus = menus
    },
    SET_BUTTONS: (state, buttons) => {
      state.buttons = buttons
    }
  },

  actions: {
    GetMenus({ commit }, userId) {
      getUserRoleMenus(userId).then((response) => {
        //console.log("GetMenus response.data", response.data);
        let mixedMenus = global_.splitMenus(response.data);
        let menus = mixedMenus.menus;
        let btnsPemit = mixedMenus.btnsPemit;
        //console.log("mixedMenus menus", menus, "btnsPemit", btnsPemit);
        let buildMenus = global_.buildMenuTree(menus, "0");
        //console.log("menus tree", buildMenus);
        let nessaryMenus = global_.mixedNessMenus(buildMenus);
        console.log('SET_MENUS', nessaryMenus, 'SET_BUTTONS', btnsPemit);
        console.log('nessaryMenus', JSON.stringify(nessaryMenus));
        commit('SET_BUTTONS', btnsPemit);
        commit('SET_MENUS', nessaryMenus);
      });
    }
  }
}

export default menu

