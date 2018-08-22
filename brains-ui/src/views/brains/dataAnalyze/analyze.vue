<template>
  <div class="app-container calender-list-container">
		<el-card class="box-card" id="analyzeCard" style="min-height:800px">
			<div class="filter-container userFilter" style="min-height:60px">
				<div style="float:left;">
					<router-link to="/dataAnalyze/index">
						<el-button type="primary" size="small" >返回</el-button>
					</router-link>
				</div>
				<div style="float:right;">
					<el-button-group>
						<el-button type="warning" size="small">清除筛选</el-button>
						<!-- <router-link to="/dataAnalyze/multipleAnalyze"> -->
							<el-button type="success" size="small" @click="toMultipleAnalyze">多纬分析</el-button>
						<!-- </router-link> -->
					</el-button-group>
				</div>
			</div>
			<el-table
				ref="multipleTable"
				:data="tableData3"
				tooltip-effect="dark"
				@header-click="firstClick"
				style="width: 100%"
				border
			>
				<el-table-column
					type="selection"
					width="55">
				</el-table-column>
				<el-table-column
					label="姓名"
					width="120">
					<template slot-scope="scope">{{ scope.row.name }}</template>
				</el-table-column>
				<el-table-column
					prop="age"
					label="年龄"
					sortable
					width="120">
					<template slot-scope="scope">{{ scope.row.age }}</template>
				</el-table-column>
				<el-table-column
					label="拼音"
					show-overflow-tooltip>
					<template slot-scope="scope">{{ scope.row.spell }}</template>
				</el-table-column>
				<el-table-column
					label="职位"
					show-overflow-tooltip>
					<template slot-scope="scope">{{ scope.row.position }}</template>
				</el-table-column>
			</el-table>
			<div class="pagination-container">
				<el-pagination background
					layout="total, sizes, prev, pager, next, jumper" >
				</el-pagination>
			</div>
		</el-card>
		<el-dialog id="nameFilterDialog" title="姓名筛选" width="40%" :before-close="handleClose" :visible.sync="nameFilterVisible">
			<div id="nameFilter">
				<el-form ref="form2" label-position="top">
					<el-row :gutter="20">
						<el-col :span="12">
							<el-form-item label="排序" label-width="100px">
								<el-radio size="medium" v-model="radio7" label="1" border>升序</el-radio>
    						<el-radio size="medium" v-model="radio7" label="2" border>降序</el-radio>
							</el-form-item>
						</el-col>
					</el-row>
					<el-form-item label="筛选器" label-width="100px">
					</el-form-item>
					<el-row :gutter="20">
						<el-col :span="12">
							<el-form-item label="" label-width="100px">
								<el-select size="small" style="width:100%" placeholder="请选择">
									<el-option
										v-for="item in dataType"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item label="">
								<el-input size="small"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
						<el-radio v-model="radio" label="1">与</el-radio>
  					<el-radio v-model="radio" label="2">或</el-radio>
					<el-row :gutter="20" style="margin-top:14px">
						<el-col :span="12">
							<el-form-item label="" label-width="100px">
								<el-select size="small" style="width:100%" placeholder="请选择">
									<el-option
										v-for="item in dataType1"
										:key="item.value"
										:label="item.label"
										:value="item.value">
									</el-option>
								</el-select>
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item label="">
								<el-input size="small"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</div>
			<div slot="footer" class="dialog-footer">
					<el-button type="warning">重置</el-button>
					<el-button type="primary">确定</el-button>
					<el-button type="success" @click="nameFilterVisible = false">取消</el-button>
      </div>
		</el-dialog>
  </div>
</template>
<script>
export default {
	name: 'analyzeDetails',
	data() {
		return {
			tableData3: [{
					name: '张三',
          age: '22',
					spell: 'zhangsan',
					position: '总经理'
        },{
					name: '李四',
          age: '43',
					spell: 'lisi',
					position: '设计师'
        },{
					name: '王五',
          age: '22',
					spell: 'wangwu',
					position: '工程师'
				}],
				dataType:[{
          value: '1',
          label: '开头是'
				}],
				dataType1:[{
          value: '1',
          label: '结尾是'
        }],
				radio: '1',
				radio7: '1',
				multipleSelection: [],
				nameFilterVisible: false
		}
	},
	methods: {
		toMultipleAnalyze() {
			this.$router.push({name:'multipleAnalyze'})
		},
		firstClick(val) {
			console.log(val)
			if (val.label === '姓名') {
				this.nameFilterVisible = true
			}
		}
	}
}
</script>
<style lang="scss">
	#analyzeCard .el-table th:nth-child(2) {
		background: url("../../../assets/filter.png") no-repeat;
		background-position: 90%;
	}
	#nameFilterDialog {
		.el-form-item {
			margin-bottom: 10px;
		}
	}
	#nameFilter {
		width:100%;
		min-height:240px;
		background-color:#fff;
		margin:0 auto;
		padding:30px 30px;
	}
</style>

