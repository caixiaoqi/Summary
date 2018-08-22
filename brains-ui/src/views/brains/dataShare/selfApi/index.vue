<template>
	<div>
		<div id="dataResourceTab">
			<el-tabs id="dataResourceTab" type="border-card" v-model="activeTab">
				<el-tab-pane label="接口申请" name="first">
					<el-card class="box-card">
						<div class="filter-container userFilter" style="height:50px">
							<div style="float:right">
								<el-button size="small" class="filter-item" type="primary" @click="handleApiApply()">新接口申请</el-button>
							</div>
						</div>
						<selfApiList tabName="first" :activeTab="this.activeTab"></selfApiList>
					</el-card>
				</el-tab-pane>
				<el-tab-pane label="接口注册" name="second">
					<el-card class="box-card">
						<div class="filter-container userFilter" style="height:50px">
							<div style="float:right">
								<el-button size="small" class="filter-item" type="primary" @click="handleSourceReg()">数据资源注册</el-button>
								<el-button size="small" class="filter-item" type="warning" @click="handleapiReg()">新接口注册</el-button>
							</div>
						</div>
						<selfApiList tabName="second" :activeTab="this.activeTab"></selfApiList>
					</el-card>
				</el-tab-pane>
			</el-tabs>
		</div>		
		<el-dialog id="addResourceDialog" title="新接口申请" :visible.sync="addResourceVisible">
			<el-steps :active="active" align-center>
				<el-step title="应用选择"></el-step>
				<el-step title="接口选择"></el-step>
				<el-step title="申请明细"></el-step>
			</el-steps>
			<div v-if="active === 0">
				<el-table
				ref="dataSourceTable"
				:data="appData"
				tooltip-effect="dark"
				style="width: 100%"
				border
				>
					<el-table-column
						type="selection" 
						width="55">
					</el-table-column>
					<el-table-column
						label="序号"
						show-overflow-tooltip
						>
						<template slot-scope="scope">{{ scope.row.index }}</template>
					</el-table-column>
					<el-table-column
						label="应用名称"
						>
						<template slot-scope="scope">{{ scope.row.name }}</template>
					</el-table-column>
				</el-table> 
				<div class="pagination-container">
					<el-pagination background
						layout="total, sizes, prev, pager, next, jumper" >
					</el-pagination>
				</div>
			</div>
			<div v-else-if="active === 1">
				<el-table
				ref="dataSourceTable"
				:data="appData"
				tooltip-effect="dark"
				style="width: 100%"
				border
				>
					<el-table-column
						type="selection" 
						width="55">
					</el-table-column>
					<el-table-column
						label="序号"
						show-overflow-tooltip
						>
						<template slot-scope="scope">{{ scope.row.index }}</template>
					</el-table-column>
					<el-table-column
						label="接口名称"
						>
						<template slot-scope="scope">{{ scope.row.name }}</template>
					</el-table-column>
				</el-table> 
				<div class="pagination-container">
					<el-pagination background
						layout="total, sizes, prev, pager, next, jumper" >
					</el-pagination>
				</div>
			</div>
			<div v-else-if="active === 2" class="highConfig"> 
				<el-form ref="form">
					<el-row :gutter="20">
						<el-col :span="12">
							<el-form-item label="联系人" label-width="100px">
								<el-input size="small"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item label="联系方式" label-width="90px">
								<el-input size="small"></el-input>
							</el-form-item>
						</el-col>			
					</el-row>
					<el-row :gutter="20">
						<el-col :span="12">
							<el-form-item label="应用场景" label-width="100px">
								<el-input size="small"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item label="申请文件" label-width="90px">
								<el-upload
									class="upload-demo"
									ref="upload"
									action=""
									:on-preview="handlePreview"
									:on-remove="handleRemove"
									:file-list="fileList"
									:auto-upload="false">
									<el-button slot="trigger" size="small" type="primary">选取文件</el-button>
									<!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
								</el-upload>
							</el-form-item>
						</el-col>			
					</el-row>
					<el-table
					ref="dataSourceTable"
					:data="appData"
					tooltip-effect="dark"
					style="width: 100%"
					border
					>
						<el-table-column
							type="selection" 
							width="55">
						</el-table-column>
						<el-table-column
							label="序号"
							show-overflow-tooltip
							>
							<template slot-scope="scope">{{ scope.row.index }}</template>
						</el-table-column>
						<el-table-column
							label="字段名称"
							>
							<template slot-scope="scope">{{ scope.row.name }}</template>
						</el-table-column>
						<el-table-column
							label="字段编码"
							>
							<template slot-scope="scope">{{ scope.row.code }}</template>
						</el-table-column>
					</el-table> 
					<div class="pagination-container">
						<el-pagination background
							layout="total, sizes, prev, pager, next, jumper" >
						</el-pagination>
					</div>
				</el-form>
			</div>
			<div style="margin-top: 12px;height:40px">
				<el-button size="small" v-if="active > 0" @click="before" style="float:left">上一步</el-button>
				<el-button size="small" v-if="active >=0 && active <=1" @click="next" style="float:right" type="primary">下一步</el-button>
				<el-button size="small" v-if="active === 2" @click="addCompelet" style="float:right" type="success">完成</el-button>
			</div>			
		</el-dialog>
		<el-dialog id="sourceRegDialog" title="数据资源注册" :visible.sync="sourceRegVisible">
			<el-steps :active="active1" align-center>
				<el-step title="接口信息"></el-step>
				<el-step title="数据资源选择"></el-step>
			</el-steps>
			<div v-if="active1 === 0" class="highConfig">
				<el-form ref="form1">
					<el-row :gutter="20">
						<el-col :span="12">
							<el-form-item label="联系人" label-width="80px">
								<el-input size="small"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item label="联系方式" label-width="80px">
								<el-input size="small"></el-input>
							</el-form-item>
						</el-col>			
					</el-row>
					<el-row :gutter="20">
						<el-col :span="24">
							<el-form-item label="接口名称" label-width="80px">
								<el-input size="small"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="24">
							<el-form-item label="接口描述" label-width="80px">
								<el-input type="textarea" size="small"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="24">
							<el-form-item label="应用场景" label-width="80px">
								<el-input type="textarea" size="small"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="24">
							<el-form-item label="请求示例" label-width="80px">
								<el-input type="textarea" size="small"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="24">
							<el-form-item label="返回示例" label-width="80px">
								<el-input type="textarea" size="small"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="24">
							<el-form-item label="网络地址" label-width="80px">
								<el-input size="small"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</div>
			<div v-else-if="active1 === 1">
				<div style="position:relative;padding-left:230px" class="highConfig">
					<brainsTree ></brainsTree>
					<el-table
					ref="dataSourceTable"
					:data="appData"
					tooltip-effect="dark"
					style="width: 100%"
					border
					>
						<el-table-column
							type="selection" 
							width="55">
						</el-table-column>
						<el-table-column
							label="序号"
							show-overflow-tooltip
							>
							<template slot-scope="scope">{{ scope.row.index }}</template>
						</el-table-column>
						<el-table-column
							label="应用名称"
							>
							<template slot-scope="scope">{{ scope.row.name }}</template>
						</el-table-column>
					</el-table> 
					<div class="pagination-container">
						<el-pagination background
							layout="total, sizes, prev, pager, next, jumper" >
						</el-pagination>
					</div>
				</div>
			</div>
			<div style="margin-top: 12px;height:40px">
				<el-button size="small" v-if="active1 ===1" @click="before1" style="float:left">上一步</el-button>
				<el-button size="small" v-if="active1 ===0" @click="next1" style="float:right" type="primary">下一步</el-button>
				<el-button size="small" v-if="active1 === 1" @click="addCompelet1" style="float:right" type="success">完成</el-button>
			</div>
		</el-dialog>
		<el-dialog id="apiRegDialog" title="新接口注册" :visible.sync="apiRegVisible">
			<el-steps :active="active2" align-center>
				<el-step title="接口信息"></el-step>
				<el-step title="出入参数"></el-step>
			</el-steps>
			<div v-if="active2 === 0" class="highConfig">
				<el-form ref="form1" label-width="80px">
					<el-row :gutter="20">
						<el-col :span="12">
							<el-form-item label="联系人">
								<el-input size="small"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item label="联系方式">
								<el-input size="small"></el-input>
							</el-form-item>
						</el-col>			
					</el-row>
					<el-row :gutter="20">
						<el-col :span="24">
							<el-form-item label="接口名称">
								<el-input size="small"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="24">
							<el-form-item label="接口描述" >
								<el-input type="textarea" size="small"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="24">
							<el-form-item label="应用场景" >
								<el-input type="textarea" size="small"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="24">
							<el-form-item label="请求示例">
								<el-input type="textarea" size="small"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="24">
							<el-form-item label="返回示例" >
								<el-input type="textarea" size="small"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
					<el-row :gutter="20">
						<el-col :span="24">
							<el-form-item label="网络地址">
								<el-input size="small"></el-input>
							</el-form-item>
						</el-col>
					</el-row>
				</el-form>
			</div>
			<div v-else-if="active2 === 1">
				<div class="addForm">
					<div class="addFormHeader">
						接口入参
					</div>
					<div style="padding:15px 20px">
						<el-form ref="form3" label-position="top">
							<el-row :gutter="20">
								<el-col :span="6">
									<el-form-item label="字段名称">
										<el-input size="small"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="字段代码">
										<el-input size="small"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="字段描述">
										<el-input size="small"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="操作">
										<el-button size="small" type="primary" icon="el-icon-plus" @click="addDomain"></el-button>
										<el-button size="small" type="primary" icon="el-icon-minus"></el-button>
									</el-form-item>
								</el-col>
							</el-row>
						</el-form>
					</div>
				</div>
				<div class="addForm" style="margin-top:20px;">
					<div class="addFormHeader">
						接口出参
					</div>
					<div style="padding:15px 20px;">
						<el-form ref="form4" label-position="top">
							<el-row :gutter="20">
								<el-col :span="6">
									<el-form-item label="字段名称">
										<el-input size="small"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="字段代码">
										<el-input size="small"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="字段描述">
										<el-input size="small"></el-input>
									</el-form-item>
								</el-col>
								<el-col :span="6">
									<el-form-item label="操作">
										<el-button size="small" type="primary" icon="el-icon-plus" @click="addDomain"></el-button>
										<el-button size="small" type="primary" icon="el-icon-minus"></el-button>
									</el-form-item>
								</el-col>
							</el-row>
						</el-form>
					</div>
				</div>
			</div>
			<div style="margin-top: 12px;height:40px">
				<el-button size="small" v-if="active2 ===1" @click="before2" style="float:left">上一步</el-button>
				<el-button size="small" v-if="active2 ===0" @click="next2" style="float:right" type="primary">下一步</el-button>
				<el-button size="small" v-if="active2 === 1" @click="addCompelet2" style="float:right" type="success">完成</el-button>
			</div>
		</el-dialog>
	</div>
</template>
<script>
import  selfApiList  from './components/selfApiList'
import  brainsTree  from '@/components/brainsTree'
export default {
		name: 'selfApi',
		components: {
			selfApiList,
			brainsTree
  	},
		data() {
			return {
				activeTab: 'first',
				addResourceVisible: false,
				fileList: [], //文件上传
				active: 0,
				active1: 0,
				active2: 0,
				checkAll: false,
				checkedCities: [],
				sourceRegVisible: false,
				apiRegVisible: false,
				radio: '1',
        cities: ['tbl1', 'tbl2', 'tbl3', 'tbl4','tbl5', 'tbl6', 'tbl7'],
				isIndeterminate: false,
				value2: undefined,
				dataType: [{
          value: '1',
          label: 'Oracle'
        },{
          value: '2',
          label: 'MySQL'
        },{
          value: '3',
          label: 'PostgreSQL'
        },],
        value: '',
				first: [{
          dataName: '地税数据库',
					status: '同步成功',
					edit: false
				},{
          dataName: '工商数据库',
					status: '同步失败',
					edit: false
				},{
          dataName: '地税数据库',
					status: '同步成功',
					edit: false
				}],
				appData: [{
					index:'1',
					name: 'test',
					code: 'test'
				},{
					index:'1',
					name: 'test',
					code: 'test'
				},{
					index:'1',
					name: 'test',
					code: 'test'
				}],
				second: [{
          dataName: '地税数据库2',
					status: '同步成功',
					edit: false
				},{
          dataName: '工商数据库2',
					status: '同步失败',
					edit: false
				},{
          dataName: '地税数据库2',
					status: '同步成功',
					edit: false
				}]
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
			handleApiApply() {
				this.addResourceVisible = true
			},
			handleSourceReg() {
				this.sourceRegVisible = true
			},
			handleapiReg() {
				this.apiRegVisible = true
			},
			handleCheckAllChange(val) {
        this.checkedCities = val ? this.cities : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
			submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
			before() {
				if (this.active-- == 0) this.active = 0;
			},
			next() {
        if (this.active++ > 1) this.active = 0;
			},
			addCompelet() {
				this.active = 0
				this.addResourceVisible = false
			},
			before1() {
				if (this.active1-- == 0) this.active1 = 0;
			},
			next1() {
				this.active1++
			},
			addCompelet1() {
				this.active1 = 0
				this.sourceRegVisible = false
			},
			before2() {
				if (this.active2-- == 0) this.active2 = 0;
			},
			next2() {
				this.active2++
			},
			addCompelet2() {
				this.active2 = 0
				this.apiRegVisible = false
			},
			addDomain() {

			}
		}
}
</script>
<style rel="stylesheet/scss" lang="scss">
	#addResourceDialog .el-dialog,#sourceRegDialog .el-dialog {
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
		
		.el-form-item {
			margin-bottom: 14px;
		}
		.el-card {
			box-shadow: 0 0 0 0;
			.el-card__body {
				padding:15px
			}
		}
	}
	.highConfig {
			width:100%;
			min-height:240px;
			background-color:#fff;
			margin:0 auto;
			padding:30px 30px;
	}
	.addForm {
		width:100%;
		background-color:#fff;
		margin:0 auto;
		border-radius: 5px;
		.addFormHeader {
			border-top-left-radius: 5px;
			border-top-right-radius: 5px;
			height: 40px;
			line-height: 40px;
			background-color: #aac6d1;
			color:#fff;
			text-indent: 15px
		}
		.el-form--label-top .el-form-item__label {
			padding:0px;
		}
		.el-form-item__label {
			line-height: 0;
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
	
</style>