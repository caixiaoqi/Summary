<template>
    <div class="app-container calender-list-container">
        <el-card class="box-card" style="min-height:600px">
            <div slot="header" class="clearfix">
                <span>服务器监控面板</span>
            </div>
						<el-row class="panel-group" :gutter="40">
							<el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
								<div class='card-panel' style="background-color:#49aced">
									<div class="card-panel-icon-wrapper icon-people">
										<p>上级平台连接状态:</p>
									</div>
									<div class="card-panel-description">
										<div class="card-panel-text">连接成功</div>
									</div>
								</div>
							</el-col>
							<el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
								<div class="card-panel" style="background-color:#49aced">
									<div class="card-panel-icon-wrapper icon-message">
										<p>本地数据源连接状态:</p>
									</div>
									<div class="card-panel-description">
										<div class="card-panel-text">连接成功</div>
									</div>
								</div>
							</el-col>
							<el-col :xs="12" :sm="12" :lg="8" class="card-panel-col">
								<div class="card-panel" style="background-color:#49aced">
									<div class="card-panel-icon-wrapper icon-money">
										<p>数据传输运行状态:</p>
									</div>
									<div class="card-panel-description">
										<div class="card-panel-text">传输等待</div>
									</div>
								</div>
							</el-col>
  					</el-row>
        </el-card>
				
    </div>
</template>
<script>

export default {
 
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.panel-group {
  margin-top: 18px;
  .card-panel-col{
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    border-color: rgba(0, 0, 0, .05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      // .icon-people {
      //    background: #40c9c6;
      // }
      // .icon-message {
      //   background: #36a3f7;
      // }
      // .icon-money {
      //   background: #f4516c;
      // }
      // .icon-shoppingCard {
      //   background: #34bfa3
      // }
    }
    .icon-people {
			color: #fff;
    }
    .icon-message {
      color: #fff;
    }
    .icon-money {
      color: #fff;
    }
    .icon-shoppingCard {
      color: #34bfa3
    }
    .card-panel-icon-wrapper {
      float: left;
      // margin: 14px 0 0 14px;
      padding: 23px;
      transition: all 0.38s ease-out;
			border-radius: 6px;
			p {
				font-size: 20px
			}
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 53px;
        color: #fff;
        font-size: 25px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>

