<template>
  <div class="app-container calender-list-container">
		<el-card class="box-card">
			<div class="filter-container userFilter" style="min-height:60px">
				<div style="float:left;">
					<router-link to="/dataShare/appManage">
						<el-button type="primary" size="small" >返回</el-button>
					</router-link>
				</div>
			</div>
			<el-table
			ref="apiList"
			:data="tableData3"
			tooltip-effect="light"
			style="width: 100%"
			border>
				<el-table-column
					label="接口名称"
					>
					<template slot-scope="scope">{{ scope.row.date }}</template>
				</el-table-column>
				<el-table-column
					label="操作"
					>
					<template slot-scope="scope">
						<el-button v-if="scope.row.online" size="mini" type="success" disabled="">已上线</el-button>
						<el-button v-else size="mini" type="primary" @click='handleOnline(scope.row,true)'>上线</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="pagination-container">
				<el-pagination background
					layout="total, sizes, prev, pager, next, jumper" >
				</el-pagination>
			</div>
		</el-card>
  </div>
</template>

<script>
export default {
	name: 'appDetail',
	data() {
		return {
			tableData3: [{
					id: '1',
          date: '法人登记信息',
					name: '根据统一深灰信用代码或组织机构代码或登记注册号查询法人登记基本信息，查询参数至少传一个。',
					online: true,
				},
				{
					id: '2',
          date: '婚姻登记基本信息',
					name: '提供个人婚姻登记基本信息，包含姓名、身份证号码等。',
					online: true,
				},
				{
					id: '3',
          date: '一窗受理平台结果分布',
					name: '一窗受理平台结果分布',
					online: false,
				}],
		}
	},
	methods: {
		handleOnline(row,status) {
			this.$message({
        message: '接口'+row.date+'上线成功',
				type: 'success',
				duration: 4000
			})
			row.online = status
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

