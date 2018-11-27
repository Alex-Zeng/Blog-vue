<template>
  <!--背景图-->
  <div class="note" :style="note">
    <!--login框，表单+tab标签页的组合-->
    <div class="regFrame">
      <!--表单组件放在外面，标签栏在里面-->
      <el-form ref="regForm" :model="regForm"  class="demo-ruleForm login-container">
        <!--tab标签-->
        <!--<div class = "tabsUser">-->
        <!--<el-tabs v-model = "activeName" @tab-click = "handleClick" class = "users" style = "height: 30px;font-size: 25px">-->
        <!--<el-tab-pane label = "学生" name = "students" class = "tab1"></el-tab-pane>-->
        <!--<el-tab-pane label = "教师" name = "teacher" class = "tab2"></el-tab-pane>-->
        <!--<el-tab-pane label = "教务老师" name = "eduTeacher" class = "tab3"></el-tab-pane>-->
        <!--</el-tabs>-->
        <!--</div>-->
        <div class="formGroup">
          <el-form-item label="手机号码"  >
            <el-input type="telephone" auto-complete="off" placeholder="请输入您的手机号码" class="form-control" v-model.number="regForm.telephone"></el-input>
          </el-form-item>
          <el-form-item label="用户名"   class="form-inline">
            <el-input type="text" auto-complete="off" placeholder="请输入用户名" class="form-control" v-model="regForm.username"></el-input>
          </el-form-item>
          <el-form-item label="密码"  class="form-inline">
            <el-input type="password" auto-complete="off" placeholder="请输入密码" class="form-control" v-model="regForm.password1"></el-input>
          </el-form-item>
          <el-form-item label="确认密码"  class="form-inline">
            <el-input type="password" auto-complete="off" placeholder="请再次输入密码" class="form-control" v-model="regForm.password2"></el-input>
          </el-form-item>
        </div>
        <div class="remFor">
          <router-link to="/login" replace class="text-muted fl">已有账号,去登陆</router-link>
        </div>
        <div class="formButton">
          <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click="register">注册</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
export default {
  name: 'Register',
  data () {
    return {
      logining: false,
      note: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        backgroundImage: 'url(' + require('../assets/gang.jpg') + ')',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'

      },
      regForm: {
        telephone: '',
        username: '',
        password1: '',
        password2: ''
      }
    }
  },
  methods: {
    register () {
      console.log(this.regForm.telephone)
      this.$axios.post('api/register', {
        'telephone': this.regForm.telephone,
        'username': this.regForm.username,
        'password1': this.regForm.password1,
        'password2': this.regForm.password2
      }).then((response) => {
        this.$message({
          type: 'success',
          message: response.data.msg,
          center: true
        })
      })
    }
  }
}</script>
<style>

  .login-container {

    -webkit-border-radius: 5px;
    border-radius: 15px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;

  }

  label {
    width: 70px;
    text-align: left;

  }

  .form-control {
    width: 270px;
    flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;

  }

  .remember {
    width: 250px;
    text-align: left;

  }

  .forget {
    width: 500px;
    text-align: right;
    font-size: 14px;
    font-family: PingFang SC;

  }

  .remFor {
    margin-bottom: 10px;
    padding-bottom: 10px;
  }

  .tabsUser {
    display: inline-block;
    margin-left: 0px;
    margin-right: 0px;
    text-align: center;
    font-size: 25px;
  }

</style>
