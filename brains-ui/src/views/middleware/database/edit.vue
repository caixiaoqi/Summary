<template>
    <div class="app-container calender-list-container">
        <el-card class="box-card" style="min-height:600px">
            <div slot="header" class="clearfix">
                <span>编辑数据映射关系</span>
            </div>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                        <el-form ref="form" :model="form" :offset="6" label-width="150px" :rules="rules">
                            <el-col :span="14" :offset="4">
                                <el-form-item label="域类型：" prop="">
                                <el-select style="width:417px" v-model="value" placeholder="请选择">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                            		</el-select>
                                </el-form-item>
                            </el-col>
														<el-col :span="10" :offset="4">
                                <el-form-item label="映射表(视图)名称：" prop="">
                                    <el-input v-model="input3" placeholder="请输入"></el-input>
                                </el-form-item>
                            </el-col>
														<el-col :span="14" :offset="4">
                                <el-form-item label="映射字段类型：" prop="">
                                <el-select style="width:417px" v-model="value1" placeholder="请选择">
                                    <el-option
                                        v-for="item in options2"
                                        :key="item.value1"
                                        :label="item.label1"
                                        :value="item.value1">
                                    </el-option>
                            		</el-select>
                                </el-form-item>
                            </el-col>
													
                            <el-col :span="10" :offset="4">
                                <el-form-item label="映射字段名称：" prop="">
                                    <el-input v-model="input" placeholder="请输入映射字段名称"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="10" :offset="4">
                                <el-form-item label="传输进度：" prop="">
                                    <el-input placeholder="请输入传输进度"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24" :offset="6" style="margin-top:10px;">
                                <el-button type="primary" size="medium" style="margin-left:37px">提交</el-button>
                                <el-button size="medium" >返回</el-button>   
                            </el-col>     
                        </el-form>
                    </div>
                </el-col>
						</el-row>
        </el-card>
    </div>
</template>
<script>
export default {
	data() {
			return {
				radio2: 6,
				input:'seq_id',
				input1: '211.88.71.43',
				input2: '6666',
				input3: 'CITY.NANCHANG.UPLOAD',
				textarea: 'jdbc:oracle:thin:@(DESCRIPTION =(ADDRESS_LIST =(ADDRESS = (PROTOCOL = TCP)(HOST = 172.16.10.11)(PORT = 1521)))(CONNECT_DATA =(SERVICE_NAME = mvs)))',
				options: [{
          value: '选项1',
          label: '批发市场进场信息'
				}],
				options2: [{
          value1: '选项1',
          label1: '自增ID字段'
				}],
				options3: [{
          value1: '选项1',
          label1: '非事务化'
        }],
				value: '',
				value1: '',
				value2: ''
			}
	}
}
</script>
