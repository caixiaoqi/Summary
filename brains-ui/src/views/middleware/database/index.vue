<template>
    <div class="app-container calender-list-container">
        <el-card class="box-card" style="min-height:600px">
            <div slot="header" class="clearfix">
                <span>数据库映射管理</span>
            </div>
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column align="center"
                prop="date"
                label="域类型"
                width="90">
                </el-table-column>
                <el-table-column align="center"
                prop="name"
                label="域名称"
                width="300">
                </el-table-column>
                <el-table-column align="center"
                prop="address"
                label="映射表(视图)名称">
                </el-table-column>
								<el-table-column align="center"
                prop="lx"
                label="映射字段类型">
                </el-table-column>
								<el-table-column align="center"
                prop="mc"
                label="映射字段名称">
                </el-table-column>
								<el-table-column align="center"
                prop="csjd"
                label="传输进度">
                </el-table-column>
								<el-table-column align="center" label="操作" width="200">
									<template slot-scope="scope">
										<el-button size="mini" type="primary" @click="handle()">编辑
										</el-button>
									</template>
								</el-table-column>
            </el-table>
        </el-card>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '17',
          name: '节点备案视图[v_base_node_info]',
					address: 'v_chz_base_node_info',
					lx: '自增ID字段',
					mc: 'seq_id',
					csjd: '10101517'
        },{
          date: '18',
          name: '商户备案视图[v_business_base_info]',
					address: 'v_chz_business_bse_info',
					lx: '自增ID字段',
					mc: 'seq_id',
					csjd: '1697474'
        },{
          date: '19',
          name: '屠宰进场视图[v_animal_in_info]',
					address: 'v_chz_animal_in',
					lx: '自增ID字段',
					mc: 'seq_id',
					csjd: '71860134'
        },{
          date: '20',
          name: '屠宰检疫检验视图[v_quarantine_info]',
					address: 'v_chz_animal_check',
					lx: '自增ID字段',
					mc: 'seq_id',
					csjd: '71860176'
        },{
          date: '21',
          name: '屠宰出场视图[v_meat_out_info]',
					address: 'v_chz_meat_tran',
					lx: '自增ID字段',
					mc: 'seq_id',
					csjd: '71860218'
        },{
          date: '22',
          name: '批发进场视图[v_market_in_info]',
					address: 'v_chz_ws_in',
					lx: '自增ID字段',
					mc: 'seq_id',
					csjd: '71860291'
        },{
          date: '23',
          name: '批发检验检疫视图[v_market_detection_info]',
					address: 'v_chz_ws_test',
					lx: '自增ID字段',
					mc: 'seq_id',
					csjd: '71860333'
        }]
      }
		},
		methods: {
			handle() {
				this.$router.push({ name: 'databaseEdit'})
			}
		}
  }
</script>