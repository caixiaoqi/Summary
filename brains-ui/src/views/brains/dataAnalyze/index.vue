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
				:key="tag.date"
				closable
				disable-transitions
				@close="handleTagClose(tag)"
				type="info">
				{{tag.date}}
				</el-tag>
				<div style="float:right;height:50px">
					<el-button :disabled="buttonStatus1" size="small" class="filter-item" type="primary" @click="handlegroupTable()">合表分析</el-button>
				</div>
			</div>
			<el-table
			ref="dataSourceTable"
			:data="tableData3"
			tooltip-effect="dark"
			style="width: 100%"
			border
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
					<template slot-scope="scope">{{ scope.row.date }}</template>
				</el-table-column>
				<el-table-column
					label="记录数"
					>
					<template slot-scope="scope">{{ scope.row.name }}</template>
				</el-table-column>
				<el-table-column
					label="预览"
					>
					<template slot-scope="scope">
						<el-button type="text" size="mini" @click="handlePreview(scope.row.name)">预览
						</el-button>
					</template>
				</el-table-column>
					<el-table-column
					label="操作"
					>
					<template slot-scope="scope">
							<el-button size="mini" type="primary" @click="handleAnalyze(scope.row)">分析
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
		<el-dialog id="previewDialog" title="数据预览" :visible.sync="dialogTableVisible">
			<el-tabs type="border-card" v-model="activeTab">
				<el-tab-pane label="数据预览" name="first">
					<el-table
					v-if="activeTab === 'first'"
					ref="dataPreviewTable"
					:data="previewTable"
					tooltip-effect="dark"
					style="width: 100%"
					border
					>
					<el-table-column
						label="计划名称"
						show-overflow-tooltip
						>
						<template slot-scope="scope">{{ scope.row.date }}</template>
					</el-table-column>
					<el-table-column
						label="计划时间"
						>
						<template slot-scope="scope">{{ scope.row.name }}</template>
					</el-table-column>
					<el-table-column
						label="创建人"
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
		<el-dialog id="groupTableDialog1" title="合表分析" :visible.sync="groupTableVisible">
			<div>
				<el-radio-group v-model="groupType">
					<el-radio-button label="内部"></el-radio-button>
					<el-radio-button label="左侧"></el-radio-button>
					<el-radio-button label="右侧"></el-radio-button>
					<el-radio-button label="完全外部"></el-radio-button>
				</el-radio-group>
			</div>
			<div style="width:100%;text-align:center;padding:20px 0px;">
				<el-button size="small" type="warning">确定</el-button>
        <el-button size="small" type="primary">取消</el-button>
			</div>
		</el-dialog>
	</div>
</template>
<script>
import  brainsTree  from '@/components/brainsTree'
import  {fetchBrainsTree} from '@/api/dataResource/brainsTree'
export default {
	name: 'dataSource',
	components: {
		brainsTree
  	},
    data() {
      return {
				tags: [],
				treeData:null,
        tableData3: [{
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
						name: "原始库",
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
				active: 0,
				groupType: '内部',
				typeData : [{
					value: '1',
          label: '文本'
				}],
				dataType: '',
      }
    },
		created() {
			fetchBrainsTree().then(response=>{
				let Data_Tree = response.data;
				this.treeData = Data_Tree;
			})
		},
    methods: {
			handleSelect(selection,row) {
				 console.log(selection.length)
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
					// console.log(this.selectionRowId)
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
        // console.log(data);
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
				// console.log(val)
				this.tags = val
			},
			handleTagClose(tag) {
				// console.log(this.tags)
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
					// console.log(this.selectionRowId)
					break
					case 2:
					this.buttonStatus = true;
					this.buttonStatus1 = false;
					break
				}
			},
			handlePreview(val) {
				this.dialogTableVisible = true
			},
			handleAnalyze(row) {
				// console.log(row.name)
				this.$router.push({ name: 'analyzeDetails', params: { id:row.name}})
			},
			handlegroupTable() {
				this.groupTableVisible = true
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
      	this.creatBread(node, []);
			},
			next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss">
	@import 'src/styles/dataSource.scss';
	#groupTableDialog1 {
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
	
</style>