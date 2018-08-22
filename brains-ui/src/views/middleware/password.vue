<template>
  <div class="app-container calendar-list-container align-center">
    <el-card class="box-card firstMin">
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple">
            <el-form :model="form" ref="form" :rules="rules" :offset="6" label-width="100px">
              <el-col :span="9" :offset="6">
                <el-form-item label="旧密码"   prop="oldPwd">
                  <el-input type="password" placeholder="旧密码"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="9" :offset="6">
                <el-form-item label="新密码"   prop="newPwd">
                  <el-input type="password" placeholder="新密码"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="9" :offset="6">
              <el-form-item label="确认新密码" prop="password_confirm">
                <el-input type="password" placeholder="确认新密码" blur=""></el-input>
              </el-form-item>
              </el-col>
            </el-form>
          </div> 
        </el-col>
        <el-col :span="6" :offset="7">
          <el-button ref="btnSubmit" type="primary" style="margin-left:48px"> 提 交</el-button>
          <el-button>返回</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>   
</template>
