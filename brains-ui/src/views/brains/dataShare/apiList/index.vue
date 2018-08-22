<template>
  <div class="app-container calender-list-container">
		<el-card class="box-card">
			<div class="filter-container searchFilter">
				<el-input size="small" style="width: 200px;" class="filter-item" placeholder="请输入接口名称/关键字">
        </el-input>
				<el-select size="small" clearable class="filter-item" style="width: 130px" placeholder="请选择部门">
          <el-option v-for="item in  department" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
				<el-button size="small" class="filter-item" type="primary" icon="el-icon-search" >搜索</el-button>
				<el-button size="small" class="filter-item" type="warning"  >重置</el-button>
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
					label="名称"
					>
					<template slot-scope="scope">{{ scope.row.date }}</template>
				</el-table-column>
				<el-table-column
					label="备注"
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
		name: 'apiList',
    data() {
			return {
				department: [{
          value: '1',
          label: '部门1'
        },{
          value: '1',
          label: '部门2'
        }],
        value: '',
				tableData3: [{
					id: '1',
          date: '法人登记信息',
          name: '根据统一深灰信用代码或组织机构代码或登记注册号查询法人登记基本信息，查询参数至少传一个。'
				},
				{
					id: '2',
          date: '婚姻登记基本信息',
          name: '提供个人婚姻登记基本信息，包含姓名、身份证号码等。'
				},
				{
					id: '3',
          date: '一窗受理平台结果分布',
          name: '一窗受理平台结果分布'
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
<style rel="stylesheet/scss" lang="scss">
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
