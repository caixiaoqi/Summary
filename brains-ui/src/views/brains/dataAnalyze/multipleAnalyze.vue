<template>
	<div class="app-container calender-list-container">
		<el-card class="box-card" style="min-height:800px" id="wrapper">
			<div slot="header" class="clearfix">
        <span style="color:#1092dd;">多维分析</span>
					<el-button size="small" style="float:right" class="filter-item" type="primary" @click="handleBack()">返回</el-button>
      </div>
			<iframe ref="iframe" src="./static/PivotTable/html/demo.html" frameborder="0" style="border:0;" width="100%" ></iframe>
		</el-card>
	</div>
  
</template>

<script>
export default {
	mounted() {
			this.openFullScreen()
      this.iframeInit()
    },
    methods: {
			openFullScreen() {
        const loading = this.$loading({
          lock: true,
          text: '加载中',
          spinner: 'el-icon-loading',
					target: '#wrapper'
        });
        setTimeout(() => {
          loading.close();
        }, 500);
      },
      iframeInit() {
        const iframe = this.$refs.iframe
        const clientHeight = document.documentElement.clientHeight - 84
        iframe.style.height = `${clientHeight}px`
			},
			handleBack() {
				this.$router.back(-1)
			}
    }
}
</script>

<style rel="stylesheet/scss" lang="scss">
	.el-card {
    box-shadow: 0 0 0 0;
    .el-card__body {
      padding:15px
    }
  }
</style>

