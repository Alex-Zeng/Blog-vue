<template>
  <el-row>
    <el-col :span="6" :offset="9">
      <el-form :model="nameForm" ref="ValidateForm"  class="demo-ruleForm" >
        <el-form-item
          label="项目名称"
          prop="name" :rule="rule">
          <el-input type="text" v-model="nameForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ValidateForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>

</template>
<script>
export default {
  data: function () {
    let checkName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入项目名'))
      }
    }
    return {
      nameForm: {
        name: ''
      },
      rule: {
        validator: checkName, trigger: 'blur'
      }
    }
  },
  methods: {
    submitForm: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(111)
          this.$axios.post('api/create_project', {
            'project_name': this.nameForm.name
          }).then((response) => {
            let msg = response.data.msg
            this.$message({
              type: 'success',
              message: msg,
              center: true,
              iconClass: ''
            })
          }).catch(err => {
            console.log(err)
          })
        } else {
          this.$message({
            type: 'error',
            message: '请按提示填写',
            center: true,
            iconClass: ''
          })
          return false
        }
      })
    }
  }
}
</script>
