<template>
  <div class="register-container">
    <el-form  :model="form" :rules="rules" ref="form" class="register-form" 
   label-width="80px">
      <h3 class="title">用户注册</h3>
        
         <el-form-item label="用户名称" prop="userName">
          <el-input  v-model="form.userName" placeholder="用户名称" />
        </el-form-item>
        <el-form-item label="登录帐号" prop="loginCode">
          <el-input  v-model="form.loginCode" placeholder="登录帐号" />
        </el-form-item>
        <el-form-item label="登录密码" prop="password">
         <el-input type="password"  v-model="form.password"
           placeholder="登录密码"></el-input>
         </el-form-item>
         <el-form-item label="确认密码" prop="checkpassword">
          <el-input type="password"  v-model="form.checkpassword"
           placeholder="确认密码"></el-input>
         </el-form-item>
         <el-form-item label="性别" prop="性别">
           <el-radio-group v-model="form.sex">
               <el-radio label="1">男</el-radio>
               <el-radio label="2">女</el-radio>
            </el-radio-group>
         </el-form-item>
        <el-form-item label="电子邮箱" prop="email">
         <el-input  v-model="form.email" 
           placeholder="电子邮箱"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="mobile">
         <el-input  v-model.number="form.mobile"
           placeholder="手机号码"></el-input>
        </el-form-item>
        <!-- <el-form-item label="固定电话" prop="phone">
         <el-input  v-model="form.phone" 
           placeholder="固定电话"></el-input>
        </el-form-item>
        <el-form-item label="微信账号" prop="wxOpenid">
         <el-input  v-model="form.wxOpenid"
           placeholder="微信账号"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="remarks">   
        <el-input type="textarea" v-model="form.remarks"
          placeholder="备注"></el-input>
        </el-form-item> -->
         <el-form-item >  
          <el-button  type="primary"  @click.native.prevent="createRegister">立即创建</el-button>
          <el-button  @click.native.prevent="backLogin">返回登录</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
      let confirmPwd=(rules,value,callback)=>{
          let pwd = this.form.password
          let checkPwd = value
          if(!checkPwd){
            return callback(new Error('请再次输入登录密码'));
          }else if(pwd!=checkPwd){
            return callback(new Error('两次密码输入不一致，请重新输入'));
          }else{
            return callback();
          }
  　　}
      let pwdRules=(rules,value,callback)=>{
        
        let chinese = /[\u4e00-\u9fa5]$/
        let blank = /\s/g
        if(!value){
          return callback(new Error('登录密码不能为空'));
        }else if(value.length<this.pwdMin || value.length>this.pwdMax){
          return callback(new Error('要求密码的格式为'+this.pwdMin+'-'+this.pwdMax+'位'));
       }else if(chinese.exec(value)){
          return callback(new Error('要求密码的格式不能有中文'));
        }else if(blank.exec(value)){
          return callback(new Error('要求密码的格式不能有空格'));
        }else{
          return callback();
        }
　　  }
      let CheckTel = (rule, value, callback) => { 
        if (!value) {
          callback(new Error('请输入电话号码'));
        } else if (!Number.isInteger(value)) {
          callback(new Error('电话号码必须是数字'));
        } else if (value.toString().length != 11) {
          callback(new Error('电话号码必须是11位'));
        } else {
          callback();
        }
      }
    return {
      form: {
        loginCode : undefined,
        userName: undefined,
        password: undefined,
        checkpassword:undefined,
        email:undefined,
        mobile:undefined,
        phone:undefined,
        sex:'1',
        avatarUrl:undefined,
        wxOpenid:undefined,
        remarks:undefined,
      },
      checkpassword:'',
      rules: {
        loginCode: [{ required: true, message:'请输入登录帐号',trigger: 'blur' }],
        username: [{ required: true, message:'请输入用户名称',trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur', validator:pwdRules},],
        checkpassword: [{ required: true, trigger: 'blur',validator:confirmPwd}],
        email:[{ type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }],
        mobile:[{ required:false, trigger: ['blur', 'change'],validator:CheckTel}],
      },
      loading: false,
      pwdMin : undefined,
      pwdMax : undefined
    }
  },
  created(){
      this.getPwdLimit('UC_PWD_MIN')
      this.getPwdLimit('UC_PWD_MAX')
  },
  methods: {
    getPwdLimit(confCode){
        this.$store.dispatch('PwdLimit',confCode).then(response => {
          let pwdLimit = response.data.confValue
          if(confCode=='UC_PWD_MIN'){
            this.pwdMin = pwdLimit
          }else{
            this.pwdMax = pwdLimit
          }
        })
      },
      createRegister(){
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('Register', this.form).then(response => {
              this.loading = false
              if(response.data.status == 0){
                    this.$notify({
                      title: '成功',
                      message: '注册成功',
                      type: 'success',
                      duration: 2000
                    })
                this.$router.push({ path: '/login' })
              }else{
                this.$notify({
                      title: '提示',
                      message: response.data.message,
                      type: 'warning',
                      duration: 2000
                    })
              }
            }).catch(error => {
              this.loading = false
            })
          }
        })
      },
      backLogin(){
        this.form = {
          loginCode : undefined,
          userName: undefined,
          password: undefined,
          checkpassword:undefined,
          email:undefined,
          mobile:undefined,
          phone:undefined,
          sex:undefined,
          avatarUrl:undefined,
          wxOpenid:undefined,
          remarks:undefined,
        }
         this.$router.push({ path: '/login' })
      }  
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
.register-container {
    position: fixed;
    background-color: #2d3a4b;
    height: 250%;
    width:100%;
    .title {
      font-size: 26px;
      font-weight: 400;
      color: #eee;;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }  
    .register-form {
      position: absolute;
      left: 0;
      right: 0;
      width: 650px;
      padding: 0px 35px 15px 35px;
      margin: 50px auto;
    }
    .el-input {
      display: inline-block;
      height: 47px;
      width: 100%;
    }
}  
</style>


