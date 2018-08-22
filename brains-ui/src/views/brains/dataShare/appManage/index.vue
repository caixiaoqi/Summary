<template>
  <div class="app-container calender-list-container">
		<el-card class="box-card">
			<el-table
			ref="apiList"
			:data="tableData3"
			tooltip-effect="light"
			style="width: 100%"
			border>
				<el-table-column
					label="应用名称"
					>
					<template slot-scope="scope">{{ scope.row.date }}</template>
				</el-table-column>
				<el-table-column
					label="应用描述"
					show-overflow-tooltip
					
					>
					<template slot-scope="scope">{{ scope.row.name }}</template>
				</el-table-column>
				<el-table-column
					label="操作"
					>
					<template slot-scope="scope">
						<el-button type="success" size="mini" @click="handleApiDetail(scope.row.id)">查看详情
						</el-button>
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
	name:'appManage',
	data() {
		return {
			tableData3: [{
				id: '1',
				date: '婚姻登记信息',
				name: 'text'
			},
			{
				id: '2',
				date: '浙江电力业务办理',
				name: 'text'
			},
			{
				id: '3',
				date: '企业养老保险',
				name: 'text'
			}],
		}
	},
	methods: {
		handleApiDetail(id) {
			this.$router.push({ name:'appDetail',id:id })
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
