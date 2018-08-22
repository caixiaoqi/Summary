import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'
import homeLayout from '../views/layout/homeLayout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  { path: '/register',component: () => import('@/views/register/index'), hidden: true },
  {
    path: '',
    component: homeLayout,
    redirect: 'dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: _import('dashboard/index'),
      name: 'dashboard'
    }]
  },
  {
    path: '/dataResource',
    component: Layout,
    redirect: '/dataResource/index',
    children: [{
      path: 'index',
      component: _import('brains/dataResource/index'),
      name: 'dataResource',
      meta: { title: '数据资源管理', icon: 'dataResource'}
    }]
  },
  {
    path: '/dataResource',
    component: Layout,
    redirect: '/dataResource/edit',
    hidden: true,
    children: [
      {
        path: 'edit/:id',
        component: _import('brains/dataResource/edit'),
        name: 'dataResourceEdit',
        hidden: true,
        meta: { title: '属性编辑' }
      }
    ]
  },
  {
    path: '/dataGuide',
    component: Layout,
    redirect: '/dataGuide/index',
    children: [{
      path: 'index',
      component: _import('brains/dataGuide/index'),
      name: 'dataGuide',
      meta: { title: '数据目录管理', icon: 'dataGuide' }
    }]
  },
  {
    path: '/dataSource',
    component: Layout,
    redirect: '/dataSource/index',
    children: [{
      path: 'index',
      component: _import('brains/dataSource/index'),
      name: 'dataSource',
      meta: { title: '数据源管理', icon: 'dataSource' }
    }]
  },
  {
    path: '/dataAnalyze',
    component: Layout,
    redirect: '/dataAnalyze/index',
    children: [{
      path: 'index',
      component: _import('brains/dataAnalyze/index'),
      name: 'dataAnalyze',
      meta: { title: '数据分析', icon: 'dataAnalyze' }
    }]
  },
  {
    path: '/dataAnalyze',
    component: Layout,
    redirect: '/dataAnalyze/analyze',
    hidden: true,
    children: [{
      path: 'analyze/:id',
      component: _import('brains/dataAnalyze/analyze'),
      name: 'analyzeDetails',
      hidden: true,
      meta: { title: '操作分析', icon: 'dataAnalyze' }
    }]
  },
  {
    path: '/dataAnalyze',
    component: Layout,
    redirect: '/dataAnalyze/multipleAnalyze',
    hidden: true,
    children: [{
      path: 'multipleAnalyze',
      component: _import('brains/dataAnalyze/multipleAnalyze'),
      name: 'multipleAnalyze',
      hidden: true,
      meta: { title: '多维分析', icon: 'dataAnalyze' }
    }]
  },
  {
    path: '/dataShare',
    component: Layout,
    redirect: 'noredirect',
    name: '数据共享',
    meta: {
      title: '数据共享',
      icon: 'dataShare'
    },
    children: [{
      path: 'apiList',
      component: _import('brains/dataShare/apiList/index'),
      name: 'apiList',
      meta: { title: '接口列表',icon: 'menu' }
    },
    {
      path: 'apiDetail/:id',
      component: _import('brains/dataShare/apiList/apiDetail'),
      name: 'apiDetail',
      hidden: true,
      meta: { title: '接口详情'}
    },
    {
      path: 'selfApi',
      component: _import('brains/dataShare/selfApi/index'),
      name: 'selfApi',
      meta: { title: '我的接口',icon: 'user' }
    },{
      path: 'apiApprove',
      component: _import('brains/dataShare/apiApprove/index'),
      name: 'apiApprove',
      meta: { title: '接口审批',icon: 'edit' }
    },{
      path: 'appManage',
      component: _import('brains/dataShare/appManage/index'),
      name: 'appManage',
      meta: { title: '应用管理',icon: 'table' }
    },{
      path: 'appDetail',
      component: _import('brains/dataShare/appManage/appDetail'),
      name: 'appDetail',
      hidden: true,
      meta: { title: '应用详情' }
    }]
  },
  // {
  //   path: '/log',
  //   component: Layout,
  //   name: '统一日志',
  //   redirect: 'noredirect',
  //   meta: {
  //     title: '统一日志',
  //     icon: 'log'
  //   },
  //   children: [
  //     // { path: 'visitLog', component: _import('log/home/index'), name: 'visitLog', meta: { title: '首页', icon: 'home' }},
  //     { path: 'indexLog',component: _import('log/index/index'),name: 'indexLog',meta: {title:'索引',icon: 'index'}},
  //     { path: 'aggregationLog',component: _import('log/aggregation/index'),name: 'aggregationLog',meta: {title:'聚合',icon: 'unified'}},
  //     // { path: 'searchLog',component: _import('log/search/index'),name: 'searchLog',meta: {title:'搜索',icon: 'log'}}
  //   ]
  // },
  // {
  //   path: '/system',
  //   component: Layout,
  //   name: '管理菜单',
  //   redirect: 'noredirect',
  //   meta: {
  //     title: '管理菜单',
  //     icon: 'table'
  //   },
  //   children: [
  //     // { path: 'visitLog', component: _import('log/home/index'), name: 'visitLog', meta: { title: '首页', icon: 'home' }},
  //     { path: 'server',component: _import('middleware/server/index'),name: 'server',meta: {title:'服务监控面板',icon: 'servers'}},
  //     { path: 'data',component: _import('middleware/data/index'),name: 'data',meta: {title:'目标数据源配置',icon: 'datas'}},
  //     { path: 'square',component: _import('middleware/square/index'),name: 'square',meta: {title:'上级平台服务配置',icon: 'square'}},
  //     { path: 'track',component: _import('middleware/track/index'),name: 'track',meta: {title:'传输参数设置',icon: 'track'}},
  //     { path: 'database',component: _import('middleware/database/index'),name: 'database',meta: {title:'数据库映射管理',icon: 'database'}},
  //     { path: 'databaseEdit',hidden:true,component: _import('middleware/database/edit'),name: 'databaseEdit',meta: {title:'编辑数据映射关系',icon: 'database'}},
  //     { path: 'history',component: _import('middleware/history/index'),name: 'history',meta: {title:'传输历史管理',icon: 'history'}},
  //     // { path: 'searchLog',component: _import('log/search/index'),name: 'searchLog',meta: {title:'搜索',icon: 'log'}}
  //   ]
  // },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

export const asyncRouterMap = [
 
]

