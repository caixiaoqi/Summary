<template>
  <div class="app-container calender-list-container">
		<el-card class="box-card" style="min-height:500px;">
			<div slot="header" class="clearfix">
        <span style="color:#1092dd;">接口详情</span>
					<el-button size="small" style="float:right" class="filter-item" type="primary" @click="handleBack()">返回</el-button>
      </div>
			<div class="apiTitle">
				<svg-icon class="apiImg" icon-class="apiDetail" style="font-size:52px;"/>
				<p class="apiName">法人登记基本信息</p>
				<p class="apiRemark">根据统一深灰信用代码或组织机构代码或登记注册号查询法人登记基本信息，查询参数至少传一个。</p>
			</div>
			<div style="height:150px;">
				<ul class="apiDetailList">
					<li>接口编码:<span>8mdbhsjaklrgl88</span></li>
					<li>调用方式:<span>POST、GET</span></li>
					<li>接口描述:<span>法人登记基本信息</span></li>
					<li>编码方式:<span>utf-8（所有参数均使用此格式、包括标签、验签）</span></li>
					<li>接口地址:<span>https://10.1.123.161/datashare/8mdbhsjaklrgl88.json</span></li>
					<li>响应方式:<span>JSON</span></li>
					<li>接口状态:
						<el-tag type="success">已启用</el-tag>
					</li>	
				</ul>
			</div>
			<div>
				<el-row :gutter="20">
					<el-col :span="12">
						<span>平台状态码:</span>
						<el-table
						ref="apiList"
						:data="tableData3"
						tooltip-effect="light"
						style="width: 100%;margin-top:10px;"
						border>
							<el-table-column
								label="状态码"
								>
								<template slot-scope="scope">{{ scope.row.date }}</template>
							</el-table-column>
							<el-table-column
								label="说明"
								show-overflow-tooltip
								
								>
								<template slot-scope="scope">{{ scope.row.name }}</template>
							</el-table-column>
						</el-table>
					</el-col>
					<el-col :span="12">
						<span>输入参数:</span>
						<el-table
						ref="apiList"
						:data="tableData3"
						tooltip-effect="light"
						style="width: 100%;margin-top:10px;"
						border>
							<el-table-column
								label="字段名称"
								>
								<template slot-scope="scope">{{ scope.row.date }}</template>
							</el-table-column>
							<el-table-column
								label="字段code"
								show-overflow-tooltip
								>
								<template slot-scope="scope">{{ scope.row.name }}</template>
							</el-table-column>
							<el-table-column
								label="描述"
								show-overflow-tooltip
								>
								<template slot-scope="scope">{{ scope.row.name }}</template>
							</el-table-column>
						</el-table> 
					</el-col>
				</el-row>
				<el-row :gutter="20" style="margin-top:20px;">
					<el-col :span="12">
						<span>输出参数:</span>
						<el-table
						ref="apiList"
						:data="tableData3"
						tooltip-effect="light"
						style="width: 100%;margin-top:10px;"
						border>
							<el-table-column
								label="字段名称"
								>
								<template slot-scope="scope">{{ scope.row.date }}</template>
							</el-table-column>
							<el-table-column
								label="字段code"
								show-overflow-tooltip
								>
								<template slot-scope="scope">{{ scope.row.name }}</template>
							</el-table-column>
							<el-table-column
								label="描述"
								show-overflow-tooltip
								>
								<template slot-scope="scope">{{ scope.row.name }}</template>
							</el-table-column>
						</el-table>
					</el-col>
					<el-col :span="12">
						<span>成功返回示例:</span>
						<el-input type="textarea" style="margin:10px 0px 10px 0px;" disabled=""></el-input>
						<span>失败返回示例:</span>
						<el-input type="textarea" style="margin-top:10px;" disabled=""></el-input>
					</el-col>
				</el-row>
			</div>
		</el-card>
  </div>
</template>
<script>
export default {
	name: 'apiDetail',
	data() {
		return {
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
		handleBack() {
			this.$router.back(-1)
		}
	}
}
</script>
<style rel="stylesheet/scss" lang="scss">
	.el-card {
    box-shadow: 0 0 0 0;
    .el-card__body {
      padding:15px 40px 15px 40px
    }
	}
	.apiTitle {
		padding-left: 56px;
		height: 52px;
		position: relative;
		.apiImg {
			position: absolute;
			left: -4px;
			top: -2px;
		}
		.apiName {
			margin: 13px 0px 12px 0px;
			font-weight: 500;
		}
		.apiRemark {
			margin: 11px 0px 12px 0px;
			font-size: 14px;
		}
	}
	.apiDetailList {
		list-style: none;
		padding-left: 0px;
		width: 100%;
		height: 150px;
		li {
			width: 50%;
			float: left;
			margin:5px 0px 5px 0px;
			span {
				margin-left: 8px;
			}
		}
	}
</style>