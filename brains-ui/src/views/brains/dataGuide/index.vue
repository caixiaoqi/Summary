<template>
    <div class="app-container calender-list-container">
			<el-row :gutter="20">
				<el-button-group>
					<el-button type="primary" size="medium" @click="addRoot">创建根目录</el-button>
					<el-button type="primary" size="medium" @click="addSonRoot">创建子目录</el-button>
					<el-button type="primary" size="medium">目录权限</el-button>
					<el-button type="primary" size="medium">编辑</el-button>
					<el-button type="primary" size="medium">删除</el-button>
				</el-button-group>
			</el-row>
			<el-row :gutter="20" style="margin-top:20px;">
				<el-card class="box-card" style="padding-left:200px;width:100%;position:relative;min-height:800px">
					<brainsTree @change="getChannelId" :treeData="treeData"></brainsTree>
					<el-row :gutter="20">
						<el-col :span="12">
							<div class="filter-container userFilter">
								<div class="bread-box">
									<label class="">当前库:</label>
									<ul class="type-bread">
										<li class="bread-items" v-for="(item,index) in breadItems" :key="index">
											<a href="javascript:void(0)" @click="clickBread(item.id,index)">{{item.name}}</a>
										</li>
									</ul>
								</div>
							</div>
							<el-table
							ref="dataSourceTable"
							:data="tableData3"
							tooltip-effect="light"
							style="width: 100%"
							border
							>
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
						</el-table> 
						<div class="pagination-container">
							<el-pagination background
								layout="total, sizes, prev, pager, next, jumper" >
							</el-pagination>
						</div>
						</el-col>
						<el-col :span="12">
							<div class="filter-container userFilter">
								<div class="bread-box">
									<label class="">待选资源:</label>
								</div>
							</div>
							<el-table
							ref="dataSourceTable"
							:data="tableData3"
							tooltip-effect="light"
							style="width: 100%"
							border
							>
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
						</el-table> 
						<div class="pagination-container">
							<el-pagination background
								layout="total, sizes, prev, pager, next, jumper" >
							</el-pagination>
						</div>
						</el-col>
					</el-row>
				</el-card>
			</el-row>
			<el-dialog id="addRoot" width="30%" title="创建根目录" :visible.sync="dialogAddRootVisible">
				<el-form>
					<el-form-item label="目录名称">
						<el-input></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogAddRootVisible = false">取消</el-button>
					<el-button type="primary">确定</el-button>
      	</div>
			</el-dialog>
			<el-dialog id="addSonRoot" width="30%" title="创建子目录" :visible.sync="dialogAddSonRootVisible">
				<el-form>
					<el-form-item label="上级目录">
						<el-input>
							<el-button slot="append" icon="el-icon-search"></el-button>
						</el-input>
					</el-form-item>
					<el-form-item label="目录名称">
						<el-input></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="dialogAddSonRootVisible = false">取消</el-button>
					<el-button type="primary">确定</el-button>
      	</div>
			</el-dialog>
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
    </div>
</template>

<script>
import  brainsTree  from '@/components/brainsTree'
import  {fetchBrainsTree} from '@/api/dataResource/brainsTree'
export default {
	name: 'dataGuide',
	components: {
		brainsTree
	},
	data() {
		return {
			breadItems: [
				{
					name: "原始库",
					id: ""
				}
			],
			treeData: null,
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
			activeTab: 'first',
			dialogTableVisible: false,
			dialogAddRootVisible: false,
			dialogAddSonRootVisible: false
		}
	},
	created() {
		fetchBrainsTree().then(response=>{
			let Data_Tree = response.data;
			this.treeData = Data_Tree;
		})
	},
	methods: {
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
		handlePreview(val) {
			this.dialogTableVisible = true
		},
		addRoot() {
			this.dialogAddRootVisible = true
		},
		addSonRoot() {
			this.dialogAddSonRootVisible = true
		}
	}
}
</script>

<style rel="stylesheet/scss" lang="scss">
	@import 'src/styles/dataSource.scss';
	.el-card {
    box-shadow: 0 0 0 0;
    .el-card__body {
      padding:15px
    }
  }
</style>
