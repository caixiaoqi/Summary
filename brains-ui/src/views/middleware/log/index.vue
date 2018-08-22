<template>
    <div class="app-container calender-list-container">
        <el-card class="box-card" style="min-height:600px">
            <div slot="header" class="clearfix">
                <span>查看系统日志</span>
            </div>
            <div class="filter-container userFilter">
                <el-date-picker size="small" value-format="yyyy-MM-dd"   class="filter-item" type="date" placeholder="开始时间" >
                </el-date-picker> 至
                <el-date-picker size="small" value-format="yyyy-MM-dd"   class="filter-item" type="date" placeholder="结束时间" >
                </el-date-picker>
                <el-select size="small" clearable class="filter-item" style="width: 130px" placeholder="日志级别">
                <el-option
                    v-for="item in options2"
                    :key="item.value1"
                    :label="item.label1"
                    :value="item.value1">
                </el-option>
                </el-select>
                <el-button size="small" class="filter-item" type="primary" icon="el-icon-search">查询</el-button>
								<el-input
									type="textarea"
									:rows="2"
									placeholder="请输入内容"
									v-model="textarea">
								</el-input>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    data() {
        return {
					options2: [{
						value1: '选项1',
						label1: '错误'
					}],
					value1: '',
					textarea: "2018-04-10 14:18:13,450 [main] ERROR org.springframework.web.context.ContextLoader - Context initialization failed"
        }
    }
}
</script>

