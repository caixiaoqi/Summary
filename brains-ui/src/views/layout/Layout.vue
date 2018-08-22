<template>
<el-container>
   <el-header style="height:70px">
      <!-- 头部 -->
      <keep-alive>
        <ucHeader></ucHeader>
      </keep-alive>
  </el-header>
  <div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <!-- <tags-view></tags-view> -->
      <app-main></app-main>
    </div>
  </div>
</el-container>
</template>

<script>
import { Navbar, Sidebar, AppMain, TagsView, ucHeader } from '@/views/layout/components'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView,
    ucHeader
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    }
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
