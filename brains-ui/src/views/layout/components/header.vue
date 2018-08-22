<template>
  <header class="bbs-header">
      <div class="header-left">
        <img :src="headPng" width="40" height="40" alt="">
				<h2 style="font-size:2em;">国舟智慧大脑</h2>
			</div>
    <div class="right-menu">
      <!-- <el-tooltip effect="dark" content="全屏" placement="bottom">
        <screenfull class="screenfull right-menu-item"></screenfull>
      </el-tooltip> -->
      <notice class="errLog-container notice right-menu-item"></notice>
			<span class="loginName">{{systemName}}</span>
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <img class="user-avatar" src="https://ws1.sinaimg.cn/large/006tKfTcgy1frucgmd1l7j305k05kglm.jpg">
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu class="user-dropdown" slot="dropdown">
          <router-link class="inlineBlock" to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>

          <!-- <router-link class="inlineBlock" to="/admin/userInfo">
            <el-dropdown-item>
              个人信息
            </el-dropdown-item>
          </router-link>

          <router-link class="inlineBlock" to="/system/changePwd">
            <el-dropdown-item>
              修改密码
            </el-dropdown-item>
          </router-link> -->

          <el-dropdown-item divided>
            <span @click="logout" style="display:block;">退出系统</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
import Screenfull from '@/components/Screenfull'
import Notice from '@/components/Notice'
import headPng from '@/assets/head.png'
export default {
	components: {
    Screenfull,
    Notice
  },
  data() {
    return {
      systemName:'欢迎您,管理员!',
      headPng,
    }
  },
	computed: {
		...mapGetters([
			'name',
			'avatar'
    ])
  },
  created() {
    
  },
	methods: {
		logout() {
      this.$store.dispatch('FedLogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
	}
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
$header-height: 70px;
.bbs-header {
  width: 100%;
  height: $header-height;
  background: #1092dd;
  border-bottom: 1px solid #e0e4e9;
  box-shadow: 10px 1px 15px rgba(0, 0, 0, 0.17);
  padding: 0 24px;
  position: fixed;
  top:0;
  z-index:999;
  -webkit-transform: translateZ(0);

}
.header-left {
  float: left;
  display: flex;
  align-items: center;
  height: $header-height;
	width: 400px;
	h2 {
    color: #fff;
    margin-left: 10px
	}
}
.screenfull {
    position: absolute;
    right: 190px;
    top: 20px;
    color: red;
  }
.notice {
  position: absolute;
    right: 210px;
    top: 16px;
}
.errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .time {
		position: absolute;
		right: 210px;
		color: #fff;
		font-size: 14px;
		display: block;
		height: $header-height;
		line-height: $header-height;
		width: 120px;
		text-align: center;
	}
	.loginName {
		position: absolute;
		right: 90px;
		color: #fff;
		font-size: 14px;
		display: block;
		height: $header-height;
		line-height: $header-height;
		width: 120px;
		text-align: center;
	}
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 50px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 14px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        background-color: transparent;
        border-radius: 20px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
				font-size: 12px;
				color: #fff;
      }
    }
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus{
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
			margin: 0 8px;
    }
    .screenfull {
			height: 20px;
    }
  }
</style>


