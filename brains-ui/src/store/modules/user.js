import { login, getInfo,register,pwdLimit } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { getObj} from '@/api/org'
import { getPwdLimitValue} from '@/api/config'


const user = {
  state: {
    userId:'',
    orgId:'',
    email:'',
    lastLoginIp:'',
    mobile:'',
    phone:'',  
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_USERID: (state, id) => {
      state.userId = id
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_PHONE: (state, phone) => {
      state.phone = phone
    },
    SET_MOBILE: (state, mobile) => {
      state.mobile = mobile
    },
    SET_LASTLOGINIP: (state, lastLoginIp) => {
      state.lastLoginIp = lastLoginIp
    },
    SET_EMAIL: (state, email) => {
      state.email = email
    },
    SET_ORGID: (state, orgId) => {
      state.orgId = orgId
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          console.log(data.data.currentUserToken)
          setToken(data.data.currentUserToken)
          commit('SET_TOKEN', data.data.currentUserToken)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    //注册
    Register({ commit },form) {
      return new Promise((resolve, reject) => {
        register(form).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    //获取密码长度限制
    PwdLimit({ commit },confCode){
      
      return new Promise((resolve, reject) => {
        getPwdLimitValue(confCode).then(response => {
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data.data
          console.log(data)
          // commit('SET_ROLES', data.roles)
          // commit('SET_NAME', data.name)
          // commit('SET_AVATAR', data.avatar)
          commit('SET_EMAIL', data.email)
          commit('SET_LASTLOGINIP', data.lastLoginIp)
          commit('SET_MOBILE', data.mobile)
          commit('SET_PHONE', data.phone)
          commit('SET_USERID', data.id)
          commit('SET_ROLES', data.loginCode)
          commit('SET_NAME', data.userName)
          commit('SET_ORGID', data.orgId)
          commit('SET_AVATAR', 'http://git.oschina.net/uploads/42/547642_geek_qi.png?1499487420')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        commit('SET_NAME','')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
