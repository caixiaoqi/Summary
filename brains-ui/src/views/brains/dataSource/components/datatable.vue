<template>
	<div>
		<el-table
		ref="dataSourceTable"
		:data="sourceList"
		tooltip-effect="light"
		v-loading="listLoading"
		element-loading-spinner="el-icon-loading"
		element-loading-text="加载中..."
		style="width: 100%"
		border
		>
			<el-table-column
			label="名称"
			show-overflow-tooltip
			>
				<template slot-scope="scope">
				<template v-if="scope.row.edit">
					<el-input class="edit-input" size="mini" v-model="scope.row.dblink_name"></el-input>
					<el-button class='cancel-btn' size="mini" icon="el-icon-refresh" type="warning" @click="cancelEdit(scope.row)">取消</el-button>
				</template>
				<span v-else>{{ scope.row.dblink_name }}</span>
			</template>
			</el-table-column>
			<el-table-column
			label="状态"
			>	
				<template slot-scope="scope">
					<el-tag :type="scope.row.disabled | tagFilter">{{ scope.row.disabled | statusFilter}}</el-tag>
				</template>
			</el-table-column>
	
			<el-table-column
			label="操作"
			>
				<template slot-scope="scope">
					<el-button size="mini" type="primary">设置
					</el-button>
					<el-button size="mini">同步
					</el-button>
					<el-button v-if="scope.row.edit" size="mini" type="success" @click="handleSave(scope.row)">保存</el-button>
					<el-button v-else size="mini" @click='scope.row.edit=!scope.row.edit'>重命名
					</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="pagination-container">
				<el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
			:current-page.sync="current"	layout="total, sizes, prev, pager, next, jumper" :total="total">
				</el-pagination>
		</div>
  </div>
</template>
<script>
import { fetchSourceList,delDataSource } from '@/api/dataSource/dataSource'
const calendarStatusOptions = [
  { key: 'true', display_name: '禁用' },
  { key: 'false', display_name: '正常' }
]

const calendarStatusKeyValue = calendarStatusOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

export default {
		name: 'resourceList',
		props: {
			type:{
				type: String,
				default: ''
			}
		},
    data() {
			return {
				listLoading: true,
				sourceList: null,
				total: null,
				params: {},
				current: 1,
				listQuery: {
					paging_start:null,
					paging_count:10,
					// dbtype: this.type,
				}	
			}
		},
		filters: {
			statusFilter(type) {
				return calendarStatusKeyValue[type]
			},
			tagFilter(status) {
				const statusMap = {
					true: 'danger',
					false: 'success'
				}
				return statusMap[status]
			}
		},
		created() {
			this.getList()
		},
		methods: {
			getList() {
				this.listLoading = true
				if(this.type !== 'all') {
					this.$set(this.listQuery,'dbtype',this.type)
				}
				fetchSourceList(this.listQuery).then(response => {
					// console.log(response)
					const results = response.data.results
					this.sourceList = results.map(v => {
						this.$set(v, 'edit', false)  //表格内编辑 添加edit
						v.originaldblink_name = v.dblink_name
						return v
        	})
					this.total = response.data.total
					this.listLoading = false
        })
			},
			handleSizeChange(val) {
				this.listQuery.paging_count = val
				this.current = 1
        this.getList()
			},
			handleCurrentChange(val) {
				// console.log(val)
        this.listQuery.paging_start = (val-1)*(this.listQuery.paging_count)
        this.getList()
      },
			handleDelete(row) {
				this.$confirm('此操作将永久删除,是否继续?','提示',{
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
						delDataSource(row.id)
						.then(response => {
							this.getList()
							this.$notify({
                title: '成功',
                message: '删除成功',
                type: 'success',
                duration: 2000
              });
						})
						// const index = this.tableData.indexOf(row);
            // this.tableData.splice(index, 1);
          })
			},
			cancelEdit(row) {
				row.dblink_name = row.originaldblink_name
				row.edit = false
			},
			handleSave(row) {
				row.edit = false
				row.originaldblink_name = row.dblink_name
				this.$notify({
					title: '成功',
					message: '保存成功',
					type: 'success',
					duration: 2000
				});
			}
		}
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 20px;
  top: 8px;
}
</style>
