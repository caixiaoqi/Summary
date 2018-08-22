<template>
    <div class="app-container calender-list-container">
        <el-card class="box-card" style="min-height:600px">
            <div slot="header" class="clearfix">
                <span>上级平台服务配置</span>
            </div>
            <el-row>
                <el-col :span="24">
                    <div class="grid-content bg-purple">
                        <el-form ref="form" :model="form" :offset="6" label-width="120px" :rules="rules">
														<el-col :span="10" :offset="4">
                                <el-form-item label="IP地址：" prop="">
                                    <el-input v-model="input1" placeholder="请输入内容"></el-input>
                                </el-form-item>
                            </el-col>
														<el-col :span="10" :offset="4">
                                <el-form-item label="端口：" prop="">
                                    <el-input v-model="input2" placeholder="请输入内容"></el-input>
                                </el-form-item>
                            </el-col>
														<el-col :span="10" :offset="4">
                                <el-form-item label="队列名称：" prop="">
                                    <el-input v-model="input3" placeholder="请输入内容"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="14" :offset="4">
                                <el-form-item label="传输方式：" prop="">
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
														<el-col :span="14" :offset="4">
                                <el-form-item label="持久化：" prop="">
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
														<el-col :span="14" :offset="4">
                                <el-form-item label="事务化：" prop="">
                                <el-select style="width:417px" v-model="value2" placeholder="请选择">
                                    <el-option
                                        v-for="item in options3"
                                        :key="item.value1"
                                        :label="item.label1"
                                        :value="item.value1">
                                    </el-option>
                            		</el-select>
                                </el-form-item>
                            </el-col>
              
                            <el-col :span="10" :offset="4">
                                <el-form-item label="用户名称：" prop="">
                                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="10" :offset="4">
                                <el-form-item label="密码：" prop="">
                                    <el-input type="password" placeholder="请输入密码"></el-input>
                                </el-form-item>
                            </el-col>
                            <el-col :span="24" :offset="5" style="margin-top:20px">
                                <el-button size="medium" style="margin-left:65px">提交</el-button>
                                <el-button size="medium" type="primary" @click="message">连接测试</el-button>   
                            </el-col>     
                        </el-form>
                    </div>
                </el-col>
						</el-row>
        </el-card>
    </div>
</template>
<script>
import {
    Message
  } from 'element-ui'
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
          label: '异步'
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
	},
	methods: {
		message() {
			 Message({
        message: '测试连接成功',
        type: 'success',
        duration: 5 * 1000
      })
		}
	}
}
</script>
