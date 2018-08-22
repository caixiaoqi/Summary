<template>
    <div class="app-container calender-list-container">
        <el-card class="box-card" style="min-height:600px">
            <div slot="header" class="clearfix">
                <span>目标数据源配置</span>
            </div>
						<el-row>
								<el-col :span="24">
									<div class="grid-content bg-purple">
										<el-form ref="form" :model="form" :offset="6" label-width="120px" :rules="rules">
											<el-col :span="14" :offset="4">
												<el-form-item label="数据库类型：" prop="">
												<el-select width="100%" v-model="value" placeholder="请选择">
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
												<el-form-item label="配置方式：" prop="">
													<el-radio-group v-model="radio2">
														<el-radio :label="3">普通方式</el-radio>
														<el-radio :label="6">JDBC URL方式</el-radio>
														
													</el-radio-group>
												</el-form-item>
											</el-col>
											<el-col :span="14" :offset="4">
												<el-form-item label="JDBC连接串：" prop="">
													<el-input
														type="textarea"
														:rows="2"
														placeholder="请输入内容"
														v-model="textarea">
													</el-input>
												</el-form-item>
											</el-col>
											<el-col :span="10" :offset="4">
												<el-form-item label="用户名：" prop="">
													<el-input v-model="input" placeholder="请输入内容"></el-input>
												</el-form-item>
											</el-col>
											<el-col :span="10" :offset="4">
												<el-form-item label="密码：" prop="">
													<el-input type="password" placeholder="请输入密码"></el-input>
												</el-form-item>
											</el-col>
											<el-col :span="24" :offset="5" style="margin-top:20px">
												<el-button size="medium" style="margin-left:66px">提交</el-button>
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
				input: 'mvs',
				textarea: 'jdbc:oracle:thin:@(DESCRIPTION =(ADDRESS_LIST =(ADDRESS = (PROTOCOL = TCP)(HOST = 172.16.10.11)(PORT = 1521)))(CONNECT_DATA =(SERVICE_NAME = mvs)))',
				options: [{
          value: '选项1',
          label: 'Oracle'
        }],
        value: ''
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
