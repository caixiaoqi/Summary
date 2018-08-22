<template>
  <div class="wrapper">
    <el-row :gutter="20" >
      <el-col :span="6">
        <router-link to="dataResource/index">
          <div class="link blue">
            <img class="img1" src="../../assets/home/sjzyManage.png" alt="">
            <span>数据资源管理</span>
          </div>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link to="dataGuide/index">
          <div class="link blue">
            <img class="img2" src="../../assets/home/dataIndex.png" alt="">
            <span>数据目录管理</span>
          </div>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link to="dataSource/index">
          <div class="link blue">
            <img class="img3" src="../../assets/home/dataSource.png" alt="">
            <span>数据源管理</span>
          </div>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link to="dataAnalyze/index">
          <div class="link blue">
            <img class="img4" src="../../assets/home/dataAnalyze.png" alt="">
            <span>数据分析</span>
          </div>
        </router-link>
      </el-col>
    </el-row>
    <el-row :gutter="20" >
      <el-col :span="6">
        <router-link to="dataShare/apiList">
          <div class="link orange">
            <img class="img5" src="../../assets/home/dataShare.png" alt="">
            <span>数据共享</span>
          </div>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link to="system/server">
          <div class="link orange">
            <img class="img6" src="../../assets/home/dataReport.png" alt="">
            <span>数据上报管理</span>
          </div>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link to="system/server">
          <div class="link green">
            <img class="img7" src="../../assets/home/userConfirm.png" alt="">
            <span>统一用户认证管理</span>
          </div>
        </router-link>
      </el-col>
      <el-col :span="6">
         <router-link to="system/server">
          <div class="link green">
            <img class="img8" src="../../assets/home/log.png" alt="">
            <span>统一日志管理</span>
          </div>
        </router-link>
      </el-col>
    </el-row>
    <el-row :gutter="20" >
      <el-col :span="6">
         <router-link to="system/server">
          <div class="link green">
            <img class="img9" src="../../assets/home/credentials.png" alt="">
            <span>证件库管理</span>
          </div>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  // computed: {
  //   ...mapGetters([
  //     'name',
  //     'roles'
  //   ])
  // }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.wrapper {
  padding: 0px 48px;
}
.el-row {
    margin-top: 41px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
}

.link {
  border-radius: 8px;
  width: 100%;
  background-color: #fff;
  position: relative;
  vertical-align: middle;
  text-align: center;
  display: inline-block;
  &:before {
    content:"";
    display: inline-block;
    padding-bottom: 100%;
    width: .1px;
    vertical-align: middle;
  }
  img {
    vertical-align: middle;
  }
  span {
    display: block;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: -34px;
    color: #3a3a3a;
    font-size: 18px;
    font-family: "Microsoft YaHei"
  }
}

@media screen and (max-width: 900px) {
  .link {
    .img1,.img5 {
      width: 63px;
      height: 63px;
    }
    .img2 {
      width: 60px;
      height: 60px;
    }
    .img3 {
      width: 90px;
      height: 58px;
    }
    .img4 {
      width: 74px;
      height: 55px;
    }
    .img6 {
      width: 73px;
      height: 61px;
    }
    .img7 {
      width: 54px;
      height: 64px;
    }
    .img8 {
      width: 61px;
      height: 61px;
    }
    .img9 {
      width: 64px;
      height: 53px;
    }
  }
}

@media screen and (min-width: 901px) and (max-width: 1200px) {
  .el-row {
    margin-top: 41px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    padding: 44px 20px !important;
  }
}
@media screen and (min-width: 1201px) and (max-width: 1366px) {
  .el-row {
    margin-top: 41px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    padding: 44px 35px !important;
  }
}
@media screen and (min-width: 1367px) and (max-width: 1439px) {
  .el-row {
    margin-top: 41px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    padding: 44px 35px !important;
  }
}
@media screen and (min-width: 1440px) and (max-width: 1600px) {
  .el-row {
    margin-top: 41px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    padding: 44px 35px !important;
  }
}
@media screen and (min-width: 1601px) and (max-width: 1920px) {
  .el-row {
    margin-top: 41px;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    padding: 44px 35px !important;
  }
}

.blue {
  background-color: #45b2e5;
}

.orange {
  background-color: #f9a329;
}

.green {
  background-color: #6fb24b;
}
</style>
