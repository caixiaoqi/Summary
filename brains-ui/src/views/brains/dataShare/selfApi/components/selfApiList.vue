<template>
	<div>
		<el-table
				ref="dataSourceTable"
				v-if="activeTab === tabName"
				:data="tableData3"
				tooltip-effect="light"
				style="width: 100%"
				border
				>
					<el-table-column
					label="序号"
					show-overflow-tooltip
					width="80"
					>
					<template slot-scope="scope">{{ scope.row.index }}</template>
					</el-table-column>
					<el-table-column
					label="接口名称"
					show-overflow-tooltip
					>
					<template slot-scope="scope">{{ scope.row.name }}</template>
					</el-table-column>
					<el-table-column
					label="接口描述"
					show-overflow-tooltip
					>
					<template slot-scope="scope">{{ scope.row.remark }}</template>
					</el-table-column>
					<el-table-column
					label="状态"
					>	
							<template slot-scope="scope">{{ scope.row.status }}</template>
					</el-table-column>
			
					<el-table-column
					label="操作"
					>
					<template slot-scope="scope">
							<el-button size="mini" type="success" @click="handleApiDetail(scope.row.index)">查看详情
							</el-button>
					</template>
					</el-table-column>
        </el-table>
		<div class="pagination-container">
				<el-pagination background
				layout="total, sizes, prev, pager, next, jumper" >
				</el-pagination>
		</div>
	</div>
</template>

<script>
export default {
	name:'selfApiList',
	props: {
		activeTab: '',
		tabName: '',
	},
	data() {
		return {
			tableData3: [{
					index: '1',
          name: '法人登记信息',
					remark: '根据统一深灰信用代码或组织机构代码或登记注册号查询法人登记基本信息，查询参数至少传一个。',
					status: '待上线'
				},
				{
					index: '2',
          name: '法人登记信息',
					remark: '根据统一深灰信用代码或组织机构代码或登记注册号查询法人登记基本信息，查询参数至少传一个。',
					status: '待上线'
				},
				{
					index: '3',
          name: '法人登记信息',
					remark: '根据统一深灰信用代码或组织机构代码或登记注册号查询法人登记基本信息，查询参数至少传一个。',
					status: '待上线'
				}],
		}
	},
	methods: {
		handleApiDetail(id) {
			this.$router.push({ name: 'apiDetail', params: { id:id}})
		}
	}
}
</script>

<style>

</style>
