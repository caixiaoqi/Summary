<template>
	<div>
		<div id="dataResourceTab">
			<el-tabs v-model="activeName" type="border-card">
				<el-tab-pane v-for="item in tabMapOptions" :label="item.label" :key='item.key' :name="item.key">
					<el-card class="box-card">
						<div class="filter-container userFilter" style="height:50px">
							<div style="float:right">
								<el-button size="small" class="filter-item" type="primary" @click="handleAdd()">添加数据源</el-button>
							</div>
						</div>
						<keep-alive>
							<resourceList ref='resourceList' v-if='activeName==item.key' :type='item.key'></resourceList>
						</keep-alive>
					</el-card>
				</el-tab-pane>
    	</el-tabs>
		</div>		
		<el-dialog id="addResourceDialog" title="新建数据源" :before-close="handleClose" :visible.sync="addResourceVisible">
			<el-steps :active="active" finish-status="success" align-center>
				<el-step title="连接配置"></el-step>
				<el-step title="数据表配置"></el-step>
				<el-step title="高级配置"></el-step>
			</el-steps>
			<el-form ref="connForm" :model="connForm" :rules="rules">
			<div v-if="active === 0">
					<el-tabs  type="border-card" tab-position="left">
						<el-tab-pane label="关系型数据库">
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="数据库类型" label-width="100px" prop="dbtype">
											<el-select size="small" @change="dbTypeChange" style="width:100%" v-model="connForm.dbtype" placeholder="请选择">
												<el-option
													v-for="item in dataType"
													:key="item.value"
													:label="item.label"
													:value="item.value">
												</el-option>
											</el-select>
										</el-form-item>
									</el-col>			
								</el-row>
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="服务器" label-width="100px" prop="host">
											<el-input size="small" v-model="connForm.host"></el-input>
										</el-form-item>
									</el-col>
									<el-col :span="12">
										<el-form-item label="端口" label-width="90px" prop="port">
											<el-input size="small" v-model="connForm.port"></el-input>
										</el-form-item>
									</el-col>			
								</el-row>
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="用户名" label-width="100px" prop="username">
											<el-input size="small" v-model="connForm.username"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item label="密码" label-width="100px" prop="password">
											<el-input :type="pwdType" v-model="connForm.password" size="small"></el-input>
											<span class="show-pwd" @click="showPwd"><svg-icon icon-class="eye" /></span>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :span="12">
										<el-form-item :label="DBname" label-width="100px" prop="dbname">
											<el-input size="small" v-model="connForm.dbname"></el-input>
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :span="12" >
										<el-button v-if="connTestLoading" style="margin:10px 0px 0px 100px" size="small" type="primary" :loading="true">连接中</el-button>
										<el-button v-else size="small" style="margin:10px 0px 0px 100px" type="primary" @click="handleConnTest">测试连接</el-button>
									</el-col>
								</el-row>
							
						</el-tab-pane>
						<el-tab-pane label="非关系型数据库">
						</el-tab-pane>
						<el-tab-pane label="数据API">
						</el-tab-pane>
						<el-tab-pane label="数据文件">
						</el-tab-pane>
					</el-tabs>
			</div>
			<div v-else-if="active === 1" id="dataTableConfig"  v-loading="loading2">
				<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
				<div style="margin: 15px 0;"></div>
				<el-checkbox-group v-model="checkedTables" @change="handleCheckedTablesChange">
					<el-checkbox v-for="table in Alltable_list" :label="table" :key="table">{{table}}</el-checkbox>
				</el-checkbox-group>
			</div>
			<div v-else-if="active === 2" id="highConfig"> 
				<el-form ref="form2">
					<el-row :gutter="20">
						<el-col :span="12">
							<el-form-item label="数据源名称" label-width="100px">
								<el-input size="small" v-model="connForm.name"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="12">
							<el-form-item label="定时同步" label-width="100px">
								<el-radio v-model="radio" label="1">开启</el-radio>
  							<el-radio v-model="radio" label="2">关闭</el-radio>
							</el-form-item>
							<el-form-item v-if="radio == 1" label="每天" label-width="100px">
								<el-time-picker
								v-model="value2"
								placeholder="时间">
							</el-time-picker>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</div>
			</el-form>
			<div style="margin-top: 12px;height:40px">
				<el-button size="small" v-if="active > 0" @click="before" style="float:left">上一步</el-button>
				<el-button size="small" v-if="active === 0" @click="next" style="float:right" type="primary" :disabled="stepDisabled">下一步</el-button>
				<el-button size="small" v-if="active ===1" @click="next1" style="float:right" type="primary">下一步</el-button>
				<el-button size="small" v-if="active === 2" @click="handleSubmit" style="float:right" type="success">完成</el-button>
			</div>			
		</el-dialog>
	</div>
</template>
<script>
import  resourceList  from '@/views/brains/dataSource/components/datatable'
import { connTest,addSource } from '@/api/dataSource/dataSource'
export default {
		name: 'dataSource',
		components: {
			resourceList
  	},
		data() {
			return {
				activeTab: 'first',
				addResourceVisible: false,
				active: 0,
				checkAll: false,
				stepDisabled: true,
				Alltable_list: [],
				checkedTables: [],
				pwdType: 'password',
				connTestLoading: false,
				DBname:'数据库名称',
				radio: '2',
				connForm: {
					dbname: undefined,
					username: undefined,
					password: undefined,
					dbtype: undefined,
					host: undefined,
					port: undefined,
					table_list: undefined,
					name: undefined
				},
				rules: {
					dbname: [{ required: true,message:'请输入数据源名称' }],
					username: [{ required: true,message:'请输入用户名' }],
					password: [{ required: true,message:'请输入密码' }],
					dbtype: [{ required: true,message:'请选择数据库类型' }],
					host: [{ required: true,message:'请输入服务器' }],
					port: [{ required: true,message:'请输入端口' }]
				},
        
				isIndeterminate: false,
				value2: undefined,
				tabMapOptions: [
					{ label: '全部', key: 'all' },
					{ label: 'MySQL', key: 'mysql' },
					{ label: 'SqlServer', key: 'sqlserver' },
					{ label: 'Oracle', key: 'oracle' },
					{ label: 'DB2', key: 'db2' },
					{ label: 'postgresql', key: 'postgresql' }
      	],
				activeName: 'all',
				dataType: [{
          value: 'mysql',
          label: 'MySQL'
        },{
          value: 'oracle',
          label: 'Oracle'
        },{
          value: 'postgresql',
          label: 'PostgreSQL'
        },{
          value: 'sqlserver',
          label: 'SqlServer'
        },{
          value: 'db2',
          label: 'DB2'
        }],
				value: '',
				loading2: true
			}
		},
		methods: {
			handleSubmit() {
				// console.log(this.connForm.table_list)
				this.connForm.table_list = JSON.stringify(this.checkedTables)
				this.$refs['connForm'].validate((valid) => {
					if (valid) {
						addSource(this.connForm).then(response => {
							if(response.status == 201){
								this.addResourceVisible = false
								this.$refs.resourceList[0].getList()
								this.active = 0
								this.$notify({
									title: '成功',
									message: '保存成功',
									type: 'success',
									duration: 3000
								})
							}else{
								this.$notify({
									title: "错误",
									message: response.data.message,
									type: "error",
									duration: 2000
								});
            	}
						})
					}else {
						return false
					}
				})
				
				// this.$router.push({ name: 'dataSource'})
			},
			handleAdd() {
				this.resetTemp()
				this.addResourceVisible = true
				this.$nextTick(() => {
        	this.$refs['connForm'].clearValidate()
      	})
			},
			handleClose() {
				this.Alltable_list = []
				this.active = 0
				this.addResourceVisible = false
				this.connTestLoading = false
				this.stepDisabled = true
			},
			handleConnTest() {
				this.$refs['connForm'].validate((valid) => {
					if (valid) {
						this.connTestLoading = true
						connTest(this.connForm).then(response => {
							if(response.status == 200){ 
								// console.log(response)
								// console.log('测试连接成功')
								this.$message({
									message: '连接成功，数据表已加载',
									type: 'success',
									duration: 2000
								})
								this.connTestLoading = false
								this.Alltable_list = response.data.table_list
								this.loading2 = false
								this.stepDisabled = false
							}else {
								// this.nextStatus = true
								// console.log(response)
								this.$message({
									message: response.message,
									type: 'warn',
									duration: 2000
								})
								this.connTestLoading = false
							}
						})
					}
				})
			},
			handleCheckAllChange(val) {
        this.checkedTables = val ? this.Alltable_list : [];
        this.isIndeterminate = false;
      },
      handleCheckedTablesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.Alltable_list.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.Alltable_list.length;
			},
			dbTypeChange(val) {
				// console.log(val)
				switch (val) {
					case 'mysql':
					this.connForm.port = 3306
					this.DBname = '数据库名称'
					break
					case 'oracle':
					this.connForm.port = 1521
					this.DBname = 'service'
					break
					case 'sqlserver':
					this.connForm.port = 1433
					this.DBname = '数据库名称'
					break
					case 'postgresql':
					this.connForm.port = 5432
					this.DBname = '数据库名称'
					break
					case 'db2':
					this.connForm.port = 5000
					this.DBname = '数据库名称'
					break
				}
			},
			resetTemp() {
				this.connForm = {
					dbname: undefined,
					username: undefined,
					password: undefined,
					dbtype: undefined,
					host: undefined,
					port: undefined
				}
			},
			showPwd() {
				if (this.pwdType === 'password') {
					this.pwdType = ''
				} else {
					this.pwdType = 'password'
				}
			},
			before() {
				if (this.active-- == 0) this.active = 0;
			},
			next() {
				// if(this.handleConnTest()){
				// 	this.active = 1
				// }
				this.active = 1
			},
			next1() {
				this.active = 2
			},
			// addCompelet() {
			// 	this.addResourceVisible = false
			// 	this.active = 0
			// }
		}
}
</script>
<style rel="stylesheet/scss" lang="scss">
	$dark_gray:#889aa4;
	#addResourceDialog .el-dialog {
		width: 60%;
		#dataTableConfig {
			width:100%;
			min-height:240px;
			background-color:#fff;
			margin:0 auto;
			padding:30px 0px;
			.el-checkbox {
				margin-left: 30px;
			}
		}
		#highConfig {
			width:100%;
			min-height:240px;
			background-color:#fff;
			margin:0 auto;
			padding:30px 30px;
		}
		.el-steps {
			margin-bottom: 10px;
		}
		.el-tabs--border-card {
				border: 0px;
				box-shadow: 0 0 0 0;
		}
		.el-tabs--left .el-tabs__header {
			margin-right: 0px;
		}
		.el-tabs {
			background-color: transparent;
			.el-tabs__content {
				min-height: 300px;
				background-color: #fff;
			}
		}
		.el-tabs__header .el-tabs__nav-prev,.el-tabs__header .el-tabs__nav-next {
			display:none;
		}
		.el-tabs--left .el-tabs__nav-wrap.is-scrollable {
			padding:0 0 !important;
		}
		.el-form-item {
			margin-bottom: 14px;
		}
	}
	#dataResourceTab {
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
	}
	.show-pwd {
		position: absolute;
		right: 10px;
		top: 2px;
		font-size: 16px;
		color: $dark_gray;
		cursor: pointer;
		user-select:none;
	}
	
</style>