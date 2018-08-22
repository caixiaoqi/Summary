<template>
  <div class="app-container calender-list-container">
		<el-card class="box-card">
			<div class="filter-container searchFilter">
				<el-radio-group v-model="radio4" size="medium">
					<el-radio-button label="待审核" ></el-radio-button>
					<el-radio-button label="已同意"></el-radio-button>
					<el-radio-button label="已驳回"></el-radio-button>
    		</el-radio-group>
				<span style="margin-left:20px;">选择时间:</span>
				<el-date-picker
					v-model="value5"
					type="datetimerange"
					size="medium"
					:picker-options="pickerOptions2"
					range-separator="至"
					start-placeholder="开始日期"
					end-placeholder="结束日期"
					align="right">
				</el-date-picker>
				<el-button size="medium" class="filter-item" type="primary" icon="el-icon-search" >搜索</el-button>
			</div>
		</el-card>
		<el-card class="box-card" style="margin-top:10px;">
			<el-table
			ref="apiList"
			:data="tableData3"
			tooltip-effect="light"
			style="width: 100%"
			border>
				<el-table-column
					label="接口名称"
					>
					<template slot-scope="scope">{{ scope.row.apiName }}</template>
				</el-table-column>
				<el-table-column
					label="申请联系人与联系方式"
					>
					<template slot-scope="scope">{{ scope.row.contacts }}</template>
				</el-table-column>
				<el-table-column
					label="申请部门"
					>
					<template slot-scope="scope">{{ scope.row.connectApp }}</template>
				</el-table-column>
				<el-table-column
					label="关联应用"
					>
					<template slot-scope="scope">{{ scope.row.connectApp }}</template>
				</el-table-column>
				<el-table-column
					label="申请时间"
					>
					<template slot-scope="scope">{{ scope.row.date }}</template>
				</el-table-column>
				<el-table-column
					label="操作"
					>
					<template slot-scope="scope">
						<el-button type="success" size="mini" @click="handleApiDetail(scope.row.id)">同意
						</el-button>
						<el-button type="danger" size="mini" @click="handleApiDetail(scope.row.id)">驳回
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
	name: 'apiApprove',
	data() {
		return {
			radio4: '待审核',
			pickerOptions2: {
				shortcuts: [{
					text: '最近一周',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
						picker.$emit('pick', [start, end]);
					}
				}, {
					text: '最近一个月',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
						picker.$emit('pick', [start, end]);
					}
				}, {
					text: '最近三个月',
					onClick(picker) {
						const end = new Date();
						const start = new Date();
						start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
						picker.$emit('pick', [start, end]);
					}
				}]
			},
			value5: '',
			tableData3: [{
				id: '1',
				apiName: '婚姻登记信息',
				contacts: '李欣/12357899333',
				org: '信息部',
				connectApp: 'test',
				date: '2018-06-09 00:00:00'
			},
			{
				id: '2',
				apiName: '浙江电力业务办理',
				contacts: '王元刚/15567892333',
				org: '综合管理部',
				connectApp: 'test',
				date: '2018-06-09 00:00:00'
			},
			{
				id: '3',
				apiName: '企业养老保险',
				contacts: '李凡凡/13353333333',
				org: '业务部',
				connectApp: 'test',
				date: '2018-06-09 00:00:00'
			}],
		}
	}
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-card {
    box-shadow: 0 0 0 0;
    .el-card__body {
      padding:15px
    }
  }
  .searchFilter {
    padding-bottom: 0px;
    .filter-item {
      margin-bottom: 0px;
    }
  }
</style>