import store from '@/store';
const _import = require('@/router/_import_' + process.env.NODE_ENV);
import Layout from '@/views/layout/Layout'


function mixedNessMenus(menus) {
  let nessaryMenus = [
    { path: '/login', component: () => import('@/views/login/index'), hidden: true },
    { path: '/404', component: () => import('@/views/404'), hidden: true },
    { path: '/register',component: () => import('@/views/register/index'), hidden: true },
    {
      path: '',
      component: Layout,
      redirect: 'dashboard',
      hidden: true,
      children: [{
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'dashboard',
        meta:{ title:'首页',noCache: true }
      }] 
    }
  ];
  console.log("mixedNessMenus", menus);
  for (let i = 0 ; i < menus.length; i++) {
    nessaryMenus.push(menus[i]);
  }
  let errorRoute = {
      path: '*',
      redirect: '/404',
      hidden: true
    };
    nessaryMenus.push(errorRoute);
  return nessaryMenus;
}

function splitMenus(data) {
  let menus = {};
  let btnsPemit = {};
  let count = data.length;
  for (let i = 0; i < count; i++) {
    let menu = data[i];
    let type = menu.type;
    //console.log('menu.type', type, 'type == 2', type == 2);
    if (type == 1) { //菜单
      //console.log('菜单', i);
      let parentId = menu.parentId;
      let children = menus[parentId];
      if (!children) {
        children = [];
      }
      children.push(menu);
      menus['' + parentId] = children;
    } else { //权限
      let btnPermit = menu.permission;
      if (btnPermit) { //过滤空权限
        //console.log('权限', i, 'btnPermit', btnPermit);
        btnsPemit['' + menu.permission] = true;
      }
    }
  };
  return {menus: menus, btnsPemit: btnsPemit};
}

function setChildren(source, menus) {
  let nodeId = source.id;
  let nodeMeta = {
    title: source.name
  };
  let nodeIcon = source.iconUrl;
  if (nodeIcon) {
    nodeMeta['icon'] = nodeIcon;
  }
  let isShow = source.isShow;
  let nodeHref = source.href
  let nodePath = source.path;
  let node = {
    path: nodePath,
    name: nodePath,
    meta: nodeMeta
  };
  if (nodeHref.includes('@')) {
    node['component'] = Layout;
  } else {
    node['component'] = _import(nodeHref);
  }
  console.log("node", node,"isShow", isShow, "isShow == 1", isShow == 1);
  if (isShow == 0) {
    node['hidden'] = true;
  }
  let children = menus['' + nodeId];
  if (children) {
    children.sort((a, b) => {
      return a.weight - b.weight
    });
    for (let i = 0; i < children.length; i++) {
      let subNode = children[i];
      children[i] = setChildren(subNode, menus);
    }
    node['children'] = children;
  } 
  // else {
  //   node['children'] = [];
  // }
  //console.log('node', node);
  return node;
};

/**
 * 获取菜单树
 */
function buildMenuTree(menus, rootId) {
  console.log("buildMenuTree ", menus);
  if (!rootId) {
    rootId = "0";
  }
  let rootMenus = menus['' + rootId];
  //console.log("rootMenus ", rootMenus);
  if (rootMenus) {
    rootMenus.sort((a, b) => {
      return a.weight - b.weight
    });
    //console.log("rootMenus--- ", rootMenus);
    for (let i = 0; i < rootMenus.length; i++) {
      let rootMenu = rootMenus[i];
      rootMenu = setChildren(rootMenu, menus);
      rootMenus[i] = rootMenu;
    }
  } else {
    rootMenus = [];
  }
  return rootMenus;
};

/**
 * 校验按钮是否有权限
 */
function isBtnPermit(perExpres) {
  if (!perExpres) {
    return false;
  }
  perExpres = perExpres.replace(/_/g, ':');
  let isAnd = perExpres.includes('&');
  let isOr = perExpres.includes('|');
  if (isAnd && isOr) {
    console.warn('权限不能同时采用 & 和 | ');
    return false;
  }
  if (!isAnd && !isOr) {
    isAnd = true;
  }
  const btnsPemit = store.getters.buttons;

  if (isAnd) {
    let permissions = perExpres.split('&');
    for (let i = 0; i < permissions.length; i++) {
      let permission = permissions[i];
      if (!btnsPemit[permission]) {
        return false;
      }
    }
    return true;
  }
  if (isOr) {
    let permissions = perExpres.split('|');
    for (let i = 0; i < permissions.length; i++) {
      let permission = permissions[i];
      if (btnsPemit[permission]) {
        return true;
      }
    }
    return false;
  }
  return false;
};

export default {
  isBtnPermit,
  splitMenus,
  mixedNessMenus,
  buildMenuTree
}

