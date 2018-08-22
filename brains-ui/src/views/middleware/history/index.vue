<template>
    <div class="app-container calender-list-container">
      
            <el-tabs type="border-card">
                <el-tab-pane label="传输历史查询" style="min-height:600px">
									<div class="filter-container userFilter">
									<el-date-picker size="small" value-format="yyyy-MM-dd"   class="filter-item" type="date" placeholder="开始时间" >
									</el-date-picker> 至
									<el-date-picker size="small" value-format="yyyy-MM-dd"   class="filter-item" type="date" placeholder="结束时间" >
									</el-date-picker>
										<el-button size="small" class="filter-item" type="primary" icon="el-icon-search">查询</el-button>
									</div>
							<el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column align="center"
                prop="date"
                label="传输时间"
                width="90">
                </el-table-column>
                <el-table-column align="center"
                prop="name"
                label="域名称"
                width="300">
                </el-table-column>
                <el-table-column align="center"
                prop="address"
                label="映射字段类型">
                </el-table-column>
								<el-table-column align="center"
                prop="lx"
                label="起始标志">
                </el-table-column>
								<el-table-column align="center"
                prop="mc"
                label="结束标志">
                </el-table-column>
								<el-table-column align="center"
                prop="csjd"
                label="成功行数">
                </el-table-column>
								<el-table-column align="center"
                prop="csjd"
                label="失败行数">
                </el-table-column>
								<el-table-column align="center"
                prop="csjd"
                label="无效行数">
                </el-table-column>
								<el-table-column align="center"
                prop="csjd"
                label="备注">
                </el-table-column>
            </el-table>
								</el-tab-pane>
                <el-tab-pane label="传输历史清理" style="min-height:600px">
									
									<el-col :span="24">
                    <div class="grid-content bg-purple">
                        <el-form ref="form" :model="form" :offset="6" label-width="150px" :rules="rules">
                            <el-col :span="8" :offset="4">
                                <el-form-item label="截至时间：" prop="">
																	<el-date-picker size="medium" value-format="yyyy-MM-dd"   class="filter-item" type="date" placeholder="时间" >
																	</el-date-picker>
                                </el-form-item>
                            </el-col>
														<el-col :span="4">
                                <el-button type="primary" size="medium">清理</el-button>
                            </el-col>     
                        </el-form>
                    </div>
									</el-col>
								</el-tab-pane>
            </el-tabs>
    </div>
</template>
