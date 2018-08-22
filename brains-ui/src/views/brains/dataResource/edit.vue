<template>
  <el-tabs type="border-card">
		<el-tab-pane label="基础设置">
			<el-card class="box-card">
				<el-card class="box-card" style="border:1px solid #dddddd;min-height:200px;border-radius:0px;">
					<div slot="header" class="clearfix">
        		<span>基础设置</span>
      		</div>
					<el-form ref="form">
						<el-row :gutter="20">
							<el-col :span="12">
								<el-form-item label="工作表名称" label-width="100px">
									<el-input ></el-input>
								</el-form-item>
							</el-col>
							<el-col :span="12">
								<el-form-item label="文件夹" label-width="80px">
									<el-select style="width:100%" v-model="value" placeholder="请选择">
										<el-option
											v-for="item in options"
											:key="item.value"
											:label="item.label"
											:value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
							</el-col>
						
							<el-col :offset="10">
								<el-button size="small" type="warning" @click="handleSubmit">保存</el-button>
								<router-link :to="'/dataResource/index'">
									<el-button size="small" type="primary" @click="handleCancel">取消</el-button>
								</router-link>
							</el-col>
    
						</el-row>
					</el-form>
				</el-card>
			</el-card>
		</el-tab-pane>
		<el-tab-pane label="字段设置">
			<el-card class="box-card">
				<div class="filter-container userFilter" style="height:50px">
					<div style="float:right">
						<el-button size="small" class="filter-item" type="warning" @click="handleZdSubmit()">确定</el-button>
						<el-button size="small" class="filter-item" type="primary" @click="handleZdCancel()">取消</el-button>
					</div>
				</div>
				<el-table
				ref="dataSourceTable"
				:data="zdData"
				tooltip-effect="dark"
				style="width: 100%"
				border
				>
					<el-table-column
						label="原字段名"
						show-overflow-tooltip
						>
						<template slot-scope="scope">{{ scope.row.oldField }}</template>
					</el-table-column>
					<el-table-column
						label="新字段名"
						>
						<template slot-scope="scope">{{ scope.row.newField }}</template>
					</el-table-column>
					<el-table-column
						prop="fieldType"
						label="字段类型"
						>
						<template slot-scope="scope">{{ scope.row.fieldType }}</template>
					</el-table-column>
					<el-table-column
						prop="fieldDes"
						label="字段描述"
						>
						<template slot-scope="scope">{{ scope.row.fieldDes }}</template>
					</el-table-column>
				</el-table>
				<div class="pagination-container">
          <el-pagination background
                        layout="total, sizes, prev, pager, next, jumper" >
          </el-pagination>
        </div>
			</el-card>
		</el-tab-pane>
	</el-tabs>
</template>
<script>
export default {
		name: 'dataResourceEdit',
		data() {
			return {
				options: [{
          value: '1',
          label: '2'
        }],
        value: '',
				zdData: [{
          oldField: 'ID',
					newField: 'id',
					fieldType: '数值',
					fieldDes: '123'
				},
				{
          oldField: 'ID',
					newField: 'id',
					fieldType: '数值',
					fieldDes: '123'
				},
				{
          oldField: 'ID',
					newField: 'id',
					fieldType: '数值',
					fieldDes: '123'
				},
				{
          oldField: 'ID',
					newField: 'id',
					fieldType: '数值',
					fieldDes: '123'
				}],
			}
		},
		methods: {
			handleSubmit() {
				this.$message({
					title: '成功',
					message: '保存成功',
					type: 'success',
					duration: 3000
				})
				this.$router.push({ name: 'dataSource'})
			},
			handleCancel() {

			}
		}
}
</script>
<style rel="stylesheet/scss" lang="scss">
	.el-tabs--border-card {
		border-top: 0px; 
	}
	.el-tabs--border-card>.el-tabs__header {
		background-color: #fff;
	}
	.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
		background-color: #f7f7f7;
	}
  .el-tabs__content {
	 min-height: 800px;
	 background-color: #f7f7f7;
	  .el-card {
		min-height: 500px;
		border:none;
    box-shadow: 0 0 0 0;
    .el-card__body {
      padding:15px
		}
		.el-card__header {
			padding: 0;
			height: 40px;
			background-color:#f0f0f0;
			line-height: 40px;
			text-indent: 20px;
		}
		}
  }
</style>