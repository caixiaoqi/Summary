<template>

  <div class="login-container">
    <el-form autoComplete="on" :model="loginForm" style="background-color:#fff;border-radius:5px;" :rules="loginRules" ref="loginForm" label-position="left" label-width="0px"
      class="card-box login-form">
      <div style="width:100%;height:50px;text-align:center">
        <img src="../../assets/head.png" alt="" >
      </div>  
      <h3 class="title" style="height:55px;line-height:55px;vertical-align:middle">消息传输中间件控制台</h3>
				<el-input style="width:100%;padding-left:0px;" placeholder="请输入用户名"></el-input>
				<el-input style="width:100%;padding-left:0px;" type="password" placeholder="请输入密码"></el-input>						
        <el-button type="primary" style="width:100%;background:#ebcd41;border:none" :loading="loading" @click.native.prevent="handleLogin">
          登录
        </el-button>
    </el-form>
      <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
  </div>
</template>

<script>
import headPng from '@/assets/head.png'
export default {
  name: 'login',
  data() {
    const validatePass = (rule, value, callback) => {
      if (value.length < 1) {
        callback(new Error('密码不能小于1位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, message:'请输入用户名',trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password'
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.loginForm).then(() => {
            this.loading = false;
            this.$router.push({ path: '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleRegister(){
       this.$router.push({ path: '/register' })
    },
  }
 
}
</script>

<style rel="stylesheet/scss" lang="scss">
  $bg:transparent;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .login-container {
    position: fixed;
    height: 100%;
    width:100%;
    background-color: $bg;
   
   .el-input {
     width: 320px;
    height: 44px;
    line-height: 44px;
    border: none;
    border-radius: 30px;
    padding-left: 30px;
    font-size: 14px;
    margin-bottom: 24px
   }
   
   
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
      &_login {
        font-size: 20px;
      }
    }
    .title {
      font-size: 26px;
      font-weight: 400;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
      color: #505152;
    }
    .login-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 400px;
      padding: 35px 35px 15px 35px;
      margin: 230px auto;
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      // background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select:none;
    }
    .thirdparty-button{
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
      #particles-js {
    background-color: #188ae2;
    height: 100%;
  }
  }
</style>
