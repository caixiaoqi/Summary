<template>
<el-container>
   <el-header style="height:70px">
      <!-- 头部 -->
      <keep-alive>
        <ucHeader></ucHeader>
      </keep-alive>
  </el-header>
  <div class="app-wrapper">
    <app-main></app-main>
  </div>
</el-container>
</template>

<script>
import { ucHeader,AppMain } from '@/views/layout/components'

export default {
  name: 'layout',
  components: {
    ucHeader,
    AppMain
  },
  computed: {
   
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
.el-header {
  padding: 0;
}
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
