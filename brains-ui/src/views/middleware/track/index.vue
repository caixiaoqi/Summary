<template>
    <div class="app-container calender-list-container">
        <el-card class="box-card" style="min-height:600px">
            <div slot="header" class="clearfix">
                <span>传输参数设置</span>
            </div>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                        <el-form ref="form" :model="form" :offset="6" label-width="120px" :rules="rules">
														<el-col :span="10" :offset="4">
                                <el-form-item label="城市代码：" prop="">
                                    <el-input placeholder="请输入城市代码"></el-input>
                                </el-form-item>
                            </el-col>
													
                            <el-col :span="14" :offset="4">
                                <el-form-item label="提取方式：" prop="">
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
                                <el-form-item label="Cron表达式：" prop="">
                                    <el-input placeholder="请输入表达式"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="10" :offset="4">
                                <el-form-item label="分页大小：" prop="">
                                    <el-input placeholder="请输入分页大小"></el-input>
                                </el-form-item>
                            </el-col>
														<el-col :span="10" :offset="4">
                                <el-form-item label="ID增量上限：" prop="">
                                    <el-input placeholder="请输入ID增量上限"></el-input>
                                </el-form-item>
                            </el-col>
														<el-col :span="10" :offset="4">
                                <el-form-item label="时间增量上限：" prop="">
                                    <el-input placeholder="请输入时间增量上限："></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24" :offset="6" style="margin-top:20px">
                                <el-button size="medium" style="margin-left:12px" type="primary">提交</el-button>
                                <!-- <el-button size="medium" type="primary" >连接测试</el-button>    -->
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
				input:'ningbo',
				input1: '211.88.71.43',
				input2: '6666',
				input3: 'CITY.NANCHANG.UPLOAD',
				textarea: 'jdbc:oracle:thin:@(DESCRIPTION =(ADDRESS_LIST =(ADDRESS = (PROTOCOL = TCP)(HOST = 172.16.10.11)(PORT = 1521)))(CONNECT_DATA =(SERVICE_NAME = mvs)))',
				options: [{
          value: '选项1',
          label: '增量'
				}],
				options2: [{
          value1: '选项1',
          label1: '持久化'
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
