<template>
	<div class="app-container calender-list-container">
		<el-card class="box-card" style="padding-left:200px;width:100%;position:relative;min-height:800px">
			<brainsTree @change="getChannelId" :treeData="treeData"></brainsTree>
			<div class="filter-container userFilter">
				<div class="bread-box">
					<label class="">当前库:</label>
          <ul class="type-bread">
            <li class="bread-items" v-for="(item,index) in breadItems" :key="index">
              <a href="javascript:void(0)" @click="clickBread(item.id,index)">{{item.name}}</a>
            </li>
          </ul>
				</div>
				<el-tag
				v-for="tag in tags"
				:key="tag.id"
				closable
				disable-transitions
				@close="handleTagClose(tag)"
				type="info">
				{{tag.table_name}}
				</el-tag>
				<div style="float:right;height:50px">
					<el-button :disabled="buttonStatus" size="small" class="filter-item" type="primary" @click="handleEdit()">属性编辑</el-button>
					<el-button :disabled="buttonStatus" size="small" class="filter-item" type="warning" @click="handleAddField()">添加字段</el-button>
					<el-button :disabled="buttonStatus1" size="small" class="filter-item" type="success" @click="handlegroupTable()">创建合表</el-button>
					<el-button size="small" class="filter-item" type="primary" @click="handleAddSource()">新增资源</el-button>
				</div>
			</div>
			<el-table
			ref="dataReSourceTable"
			:data="tableData3"
			tooltip-effect="dark"
			style="width: 100%"
			border
			v-loading="table3Loading"
			element-loading-spinner="el-icon-loading"
			element-loading-text="加载中..."
			@select="handleSelect"
			@select-all= "handleSelectAll"
			@selection-change="handleSelectionChange">
				<el-table-column
					type="selection" 
					width="55">
				</el-table-column>
				<el-table-column
					label="表名"
					show-overflow-tooltip
					>
					<template slot-scope="scope">{{ scope.row.table_name }}</template>
				</el-table-column>
				<el-table-column
					label="记录数"
					>
					<template slot-scope="scope">{{ scope.row.num_rows }}</template>
				</el-table-column>
				<el-table-column
					label="预览"
					>
					<template slot-scope="scope">
						<el-button type="text" size="mini" @click="handlePreview(scope.row)">预览
						</el-button>
					</template>
				</el-table-column>
			</el-table> 
			<div class="pagination-container">
				<el-pagination background @size-change="handleSizeChangeTable3"	@current-change="handleCurrentChangeTable3"
					:current-page.sync="current"  layout="total, sizes, prev, pager, next, jumper" :total="total">
				</el-pagination>
			</div>
		</el-card>
		<el-dialog id="previewDialog" title="数据预览" :visible.sync="dialogTableVisible">
			<el-tabs type="border-card" v-model="activeTab">
				<el-tab-pane label="数据预览" name="first">
					<el-table
					v-if="activeTab === 'first'"
					ref="dataPreviewTable"
					:data="previewData"
					tooltip-effect="dark"
					style="width: 100%"
					border
					>
					<el-table-column
						show-overflow-tooltip
						align="center"
						:key="index" :label="item" v-for="(item, index) in previewColName"
						>
						<template slot-scope="scope">
           		<span>{{ scope.row[index] }}</span>
          	</template>
					</el-table-column>
					</el-table>
				</el-tab-pane>
				<el-tab-pane label="数据结构" name="second">
					<el-table
					v-if="activeTab === 'second'"
					ref="PreviewTable"
					:data="previewTable"
					tooltip-effect="dark"
					style="width: 100%"
					border
					>
					<el-table-column
						label="字段名"
						show-overflow-tooltip
						>
						<template slot-scope="scope">{{ scope.row.date }}</template>
					</el-table-column>
					<el-table-column
						label="字段类型"
						>
						<template slot-scope="scope">{{ scope.row.name }}</template>
					</el-table-column>
					<el-table-column
						label="长度"
						>
						<template slot-scope="scope">{{ scope.row.name }}</template>
					</el-table-column>
					</el-table> 
					<div class="pagination-container">
						<el-pagination background
													layout="total, sizes, prev, pager, next, jumper" >
						</el-pagination>
					</div>
				</el-tab-pane>
			</el-tabs>
		</el-dialog>
		<el-dialog id="addFieldDialog" title="添加字段" :visible.sync="addFieldVisible">
			<el-form ref="addField" label-width="100px">
				<el-form-item label="字段名称" prop="">
    			<el-input size="small" auto-complete="off" style="width:60%"></el-input>
  			</el-form-item>
				<el-form-item label="数据类型" prop="">
					<el-select size="small" style="width:60%" v-model="dataType" placeholder="请选择">
						<el-option
							v-for="item in typeData"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="表达式" prop="">
    			<el-input type="textarea" auto-complete="off" style="width:60%"></el-input>
  			</el-form-item>
				<el-row :gutter="20">
					<el-col :span="12">
						<el-table style="width: 100%" :data="functionData" highlight-current-row
							 @current-change="handleCurrentChange">
							<el-table-column
							label="函数"
							
							show-overflow-tooltip
							>
								<template slot-scope="scope">{{ scope.row.name }}</template>
							</el-table-column>
						</el-table>
					</el-col>
					<el-col :span="12">
						<el-table style="width: 100%" :data="fieldData" highlight-current-row
							 @current-change="handleCurrentChange">
							<el-table-column
							label="字段"
							show-overflow-tooltip
							>
								<template slot-scope="scope">{{ scope.row.name }}</template>
							</el-table-column>
						</el-table>
					</el-col>
				</el-row>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button size="small" type="warning">确定</el-button>
				<el-button size="small" @click="addFieldVisible = false" type="primary">取消</el-button>
      </div>
		</el-dialog>
		<el-dialog id="groupTableDialog" title="创建合表" :visible.sync="groupTableVisible">
			<div>
				<el-radio-group v-model="groupType1">
					<el-radio-button label="内部"></el-radio-button>
					<el-radio-button label="左侧"></el-radio-button>
					<el-radio-button label="右侧"></el-radio-button>
					<el-radio-button label="完全外部"></el-radio-button>
				</el-radio-group>
			</div>
			<div slot="footer" class="dialog-footer">
				<el-button size="small" type="warning">确定</el-button>
				<el-button size="small" @click="groupTableVisible = false" type="primary">取消</el-button>
      </div>
		</el-dialog>
		<el-dialog id="addSourceDialog" title="新增资源" :before-close="handleClose" :visible.sync="addSourceVisible">
			<el-steps :active="active" finish-status="success" align-center>
				<el-step title="上传文件"></el-step>
				<el-step title="数据预览"></el-step>
				<el-step title="工作表设置"></el-step>
			</el-steps>
			<div v-if="active === 0">
				<el-tabs type="border-card" v-model="activeTab1" @tab-click="handleTab">
					<el-tab-pane label="文件上传" name="wjsc">
						<el-upload
							style="text-align:center"
							class="upload-demo"
							drag
							action=""
							:auto-upload="false"
							multiple>
							<i class="el-icon-upload"></i>
							<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
							<div class="el-upload__tip" slot="tip"></div>
						</el-upload>
					</el-tab-pane>
					<el-tab-pane label="数据源" name="sjy">
						<el-tabs v-if="listTableShow" v-model="activeName" type="border-card" tab-position="left" @tab-click="handleListTab" style="border: 1px solid #e4e7ed">
							<el-tab-pane v-for="item in tabMapOptions" :label="item.label" :key='item.key' :name="item.key">
									<el-table
										v-if='activeName==item.key'
										ref="dataSourceTable"
										:data="listData"
										@row-click="rowClick"
										tooltip-effect="dark"
										style="width: 100%"
										border
									>
										<el-table-column
											label="数据源"
											show-overflow-tooltip
											align="center"
											>
											<template slot-scope="scope">{{ scope.row.dblink_name }}</template>
										</el-table-column>
									</el-table> 
									<div class="pagination-container">
										<el-pagination background @size-change="handleSizeChangeListTable" @current-change="handleCurrentChangeListTable"
											:current-page.sync="listCurrent"  layout="total, prev, pager, next" :total="listTotal">
										</el-pagination>
									</div>
							</el-tab-pane>
						</el-tabs>
						<div v-else>
							<div style="margin-bottom:10px;height:35px;">
								当前选择源: <span style="color: #1276c3;">{{ listTitle }}</span>
								<el-button class="fr" @click="listTableShow = true" size="small">返回</el-button>
							</div>
							<div style="max-height:300px;overflow:auto;clear:both">
								<el-table
								:data="listTableData"
								border
								style="width: 100%"
								highlight-current-row
								@current-change="handleSelectRow"
								>
								<el-table-column align="center" label="表名">
									<template slot-scope="scope">
										<span>{{ scope.row }}</span>
									</template>
								</el-table-column>
								</el-table>
							</div>
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
			<div v-else-if="active === 1" id="dataTableConfig">
				<el-table
				ref="multipleTable"
				:data="idTypeListData"
				tooltip-effect="dark"
				style="width: 100%"
				border
				fit
				>
					<el-table-column
						show-overflow-tooltip
						align="center"
						width="200"
						:key="index" :label="item" v-for="(item, index) in idTypeColName"
						>
						<template slot-scope="scope">
           		<span>{{ scope.row[index] }}</span>
          	</template>
					</el-table-column>
				</el-table>
			</div>
			<div v-else-if="active === 2" id="highConfig"> 
				<el-form ref="form2">
					<el-row :gutter="20">
						<el-col :span="12">
							<el-form-item label="工作表名称" label-width="100px">
								<el-input size="small"></el-input>
							</el-form-item>
						</el-col>
						<el-col :span="12">
							<el-form-item label="库目录" label-width="100px">
								<el-cascader
									size="small"
									expand-trigger="click"
									:options="directoryOptions"
									:props="directoryProps" 
									v-model="libraryDirectory"
									change-on-select
									>
								</el-cascader>
							</el-form-item>
						</el-col>
					</el-row>

				</el-form>
			</div>
			<div style="margin-top: 12px;height:40px">
				<el-button size="small" v-if="active > 0" @click="before" style="float:left">上一步</el-button>
				<el-button size="small" v-if="active === 0" @click="next" style="float:right" type="primary" :disabled="nextStatus">下一步</el-button>
				<el-button size="small" v-if="active === 1" @click="next1" style="float:right" type="primary">下一步</el-button>
				<el-button size="small" v-if="active === 2" @click="addCompelet" style="float:right" type="success">完成</el-button>
			</div>			
		</el-dialog>
	</div>
</template>
<script>
import  brainsTree  from '@/components/brainsTree'
import  { fetchBrainsTree } from '@/api/dataResource/brainsTree'
import  { fetchTabelData3,previewResource,getResourceListById,getResourceListByIdType } from '@/api/dataResource/dataResource'
import { fetchSourceList } from '@/api/dataSource/dataSource'
export default {
		name: 'dataResource',
		components: {
			brainsTree
  	},
    data() {
      return {
				tags: [],
				currentRow: null,
				table3Loading: true,
				treeData: null,
				tabMapOptions: [
					{ label: 'MySQL', key: 'mysql' },
					{ label: 'SqlServer', key: 'sqlserver' },
					{ label: 'Oracle', key: 'oracle' },
					{ label: 'DB2', key: 'db2' },
					{ label: 'postgresql', key: 'postgresql' }
				],
				activeName: 'mysql',
				listData: null,
				idTypeListData: null,
				idTypeColName: [],
				functionData: [{
					name: 'COUNT'
				},{
					name: 'MAX'
				},{
					name: 'MIN'
				},{
					name: 'AVG'
				},{
					name: 'SUM'
				}],
				fieldData: [{
					name: '字段1'
				},{
					name: '字段2'
				},{
					name: '字段3'
				},{
					name: '字段4'
				},{
					name: '字段5'
				}],
        tableData3: null,
				previewTable: [{
          date: '财政-计划调整类型表',
          name: '1'
				},
				{
          date: '工商-股东信息',
          name: '2'
				},
				{
          date: '爬虫-企业股东信息',
          name: '3'
				},
				{
          date: '招标-建设工程标段表',
          name: '4'
				}],
				breadItems: [
					{
						name: "",
						id: ""
					}
      	],
				buttonStatus: true,
				buttonStatus1: true,
				multipleSelection: [],
				selectionRowId: undefined,
				dialogTableVisible: false,
				addFieldVisible: false,
				groupTableVisible: false,
				addSourceVisible: false,
				activeTab: 'first',
				activeTab1: 'wjsc',
				active: 0,
				fileList: [],
				groupType1: '内部',
				typeData : [{
					value: '1',
          label: '文本'
				}],
				dataType: '',
				listQuery:{
					paging_start: null,
					paging_cout: 10,
				},
				listDataQuery:{
					paging_start: null,
					paging_cout: 10,
					dbtype: 'mysql'
				},
				listIdTypeQuery: {
					paging_start: null,
					paging_count: 10,
					source_id: null,
					table_name: null
				},
				id: null,
				total: null,
				current: 1,
				listCurrent: 1,
				listTotal: null,
				nextStatus: true,
				//库目录数据
				directoryOptions: null,
				libraryDirectory:[],
				directoryProps:{
					label: 'name',
					value: 'id'
				},
				//预览数据
				previewColName: [],
				previewData: null,
				//数据源列表
				listTableData: [],
				listTableShow: true,
				listTitle: null
      }
    },
		created(){
			fetchBrainsTree().then(response=>{
				let Data_Tree = response.data;
				this.treeData = Data_Tree;
				this.directoryOptions = Data_Tree;
				this.handleDeleteChildren(this.directoryOptions)
				if(Data_Tree){
					this.breadItems[0].name = Data_Tree[0].name;
					this.breadItems[0].id = Data_Tree[0].id;
					this.id = Data_Tree[0].id;
					this.getTableData3();
				}
			})
		},
    methods: {
			getTableData3(){
				this.table3Loading=true;
				fetchTabelData3(this.id,this.listQuery).then(response=>{
					this.tableData3=response.data.results;
					this.total=response.data.total;
					this.table3Loading=false;
				})
			},
			handleSelect(selection,row) {
				switch (selection.length){
					case 0:
					this.buttonStatus = true;
					this.buttonStatus1 = true;
					this.selectionRowId = undefined;
					break
					case 1: 
					this.buttonStatus = false;
					this.buttonStatus1 = true;
					this.selectionRowId = selection[0].name;
					break
					case 2:
					this.buttonStatus = true;
					this.buttonStatus1 = false;
					break
				}
				if(selection.length>2) {
					selection.splice(0, 1)
					this.buttonStatus = true;
					this.buttonStatus1 = false;
				}
			},
			handleNodeClick(data) {
			},
			handleSelectAll(selection) {
				if(selection.length>0){
					this.buttonStatus = true;
					this.buttonStatus1 = true;
				}else{
					this.buttonStatus = true;
					this.buttonStatus1 = true;
				}		
				selection.splice(0, selection.length)
			},
      handleSelectionChange(val) {
				this.tags = val
			},
			handleTagClose(tag) {
				this.tags.splice(this.tags.indexOf(tag), 1);
				switch (this.tags.length){
					case 0:
					this.buttonStatus = true;
					this.buttonStatus1 = true;
					this.selectionRowId = undefined;
					break
					case 1: 
					this.buttonStatus = false;
					this.buttonStatus1 = true;
					this.selectionRowId = this.tags[0].name;
					break
					case 2:
					this.buttonStatus = true;
					this.buttonStatus1 = false;
					break
				}
			},
			//点击预览
			handlePreview(row) {
				this.dialogTableVisible = true
				previewResource(row.id).then(response => {
					this.previewColName = response.data.headers
					this.previewData = response.data.rows
				})
			},
			handleEdit() {
				this.$router.push({ name: 'dataResourceEdit', params: { id:this.selectionRowId}})
			},
			handleAddField() {
				this.addFieldVisible = true
			},
			handlegroupTable() {
				this.groupTableVisible = true
			},
			handleAddSource() {
				this.addSourceVisible = true
			},
			handleCurrentChange(val) {
        this.currentRow = val;
			},
			handleSizeChangeTable3(val){
				this.listQuery.paging_cout=val;
				this.current=1;
				this.getTableData3();
			},
			handleCurrentChangeTable3(val){
				this.listQuery.paging_start=(val-1)*(this.listQuery.paging_cout);
				this.getTableData3();
			},
			handleSizeChangeListTable(val){
				this.listDataQuery.paging_cout=val;
				this.listCurrent=1;
				this.fetchListData();
			},
			handleCurrentChangeListTable(val){
				this.listDataQuery.paging_start=(val-1)*(this.listDataQuery.paging_cout);
				this.fetchListData();
			},
			creatBread(node, arr) {
				if (node.parent != null) {
					let params = {
						name: node.data.name,
						id: node.data.id
					};
					arr.push(params);
					this.creatBread(node.parent, arr);
				} else {
					this.breadItems = arr.reverse();
					return false;
				}
    	},
			getChannelId(data, node) {
      	//获取栏目树点击
				this.creatBread(node, []);//breadItems
				this.id=data.id;//获取ID
				this.getTableData3();//重新拉取数据
			},
			//弹窗获取数据源列表
			fetchListData() {
				fetchSourceList(this.listDataQuery).then(response => {
					this.listData = response.data.results
					this.listTotal = response.data.total;
				})
			},
			rowClick(row) {
				console.log(row.id)
				getResourceListById(row.id).then(response => {
					this.listTableData = response.data
					this.listTableShow = false
					this.listTitle = this.activeName + '/' + row.dblink_name
					this.listIdTypeQuery.source_id = row.id
				})
			},
			handleTab(tab,event) {
				if(tab.name === 'sjy'){
          this.fetchListData()
        }
			},
			handleListTab(tab,event) {
				this.listDataQuery.dbtype = tab.name
				this.fetchListData()
			},
			handleDeleteChildren(areas){
        areas.forEach(area  =>{
          if(area.children.length === 0){
            delete area['children'];
          }else{
            this.handleDeleteChildren(area.children)
          }
        })
      },
			before() {
				if (this.active-- == 0) this.active = 0;
			},
			handleSelectRow(val) {
				this.listIdTypeQuery.table_name = val
				this.nextStatus = false
			},
			next() {
				getResourceListByIdType(this.listIdTypeQuery).then(response => {
					this.idTypeColName = response.data.headers
					this.idTypeListData = response.data.rows
				})
				this.active = 1
			},
			next1() {
				this.active = 2
			},
			addCompelet() {
				this.addSourceVisible = false
				this.active = 0
			},
			handleClose() {
				this.addSourceVisible = false
				this.active = 0
				this.activeTab1 = 'wjsc'
				this.activeName = 'mysql'
				this.listDataQuery.dbtype = 'mysql'
				this.listTableShow = true
				this.nextStatus = true
			}
    }
}
</script>
<style rel="stylesheet/scss" lang="scss">
	@import 'src/styles/dataSource.scss';
	#groupTableDialog {
		.el-radio-button:first-child .el-radio-button__inner {
			background: #fff url("../../../assets/dataSource/group1.png") no-repeat;
			background-position:center 40%
		}
		.el-radio-button:nth-child(2) .el-radio-button__inner {
			background: #fff url("../../../assets/dataSource/group2.png") no-repeat;
			background-position:center 40%
		}
		.el-radio-button:nth-child(3) .el-radio-button__inner {
			background: #fff url("../../../assets/dataSource/group3.png") no-repeat;
			background-position:center 40%
		}
		.el-radio-button:nth-child(4) .el-radio-button__inner {
			background: #fff url("../../../assets/dataSource/group4.png") no-repeat;
			background-position:center 40%
		}
	}
	#addSourceDialog .el-dialog {
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
		.el-checkbox {
			margin-left:30px;
		}
	}
	#highConfig {
		width:100%;
		min-height:240px;
		background-color:#fff;
		margin:0 auto;
		padding:30px 30px;
	}
</style>