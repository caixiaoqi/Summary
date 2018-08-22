const getters = {
  sidebar: state => state.app.sidebar,
  visitedViews: state => state.app.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  userId: state => state.user.userId,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  permissions: state => state.user.permissions,
  setting: state => state.user.setting,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  userEmail: state => state.user.email,
  userLastLoginIp: state => state.user.lastLoginIp,
  userMobile: state => state.user.mobile,
  userPhone: state => state.user.phone,
  orgId: state => state.user.orgId,

  menus: state => state.menu.menus,
  buttons: state => state.menu.buttons
}
export default getters
