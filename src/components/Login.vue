<template>
  <!--背景图-->
  <div class="note" :style="note">
    <!--login框，表单+tab标签页的组合-->
    <div class="loginFrame">
      <!--表单组件放在外面，标签栏在里面-->
      <el-form ref="loginForm" :model="account" status-icon :rules="rules" class="demo-ruleForm login-container">
        <!--tab标签-->
        <!--<div class = "tabsUser">-->
        <!--<el-tabs v-model = "activeName" @tab-click = "handleClick" class = "users" style = "height: 30px;font-size: 25px">-->
        <!--<el-tab-pane label = "学生" name = "students" class = "tab1"></el-tab-pane>-->
        <!--<el-tab-pane label = "教师" name = "teacher" class = "tab2"></el-tab-pane>-->
        <!--<el-tab-pane label = "教务老师" name = "eduTeacher" class = "tab3"></el-tab-pane>-->
        <!--</el-tabs>-->
        <!--</div>-->
        <div class="formGroup">
          <el-form-item label="账号" prop="username">
            <el-input type="text" auto-complete="off" placeholder="请输入您的账号" class="form-control"
                      v-model="account.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password" class="form-inline">
            <el-input type="password" auto-complete="off" placeholder="请输入密码" class="form-control"
                      v-model="account.password"></el-input>
          </el-form-item>
        </div>
        <div class="remFor">
          <router-link to="/register" replace class="text-muted fl">免费注册</router-link>
          <router-link to="/forget-password" replace class="forget">忘记密码?</router-link>
        </div>
        <div class="formButton">
          <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click="login('loginForm')">登录</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'

export default {
  name: 'Login',
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
      account: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: '请输入账号', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          // { validator: validaePass }
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
          // { validator: validaePass2 }
        ]
      },
      checked: false
    }
  },
  methods: {
    login (loginForm) {
      this.$refs[loginForm].validate((valid) => {
        if (valid) {
          this.$axios.post('api/login', {
            'username': this.account.username,
            'password': this.account.password
          }).then(this.repSucc)
        } else {
          console.log('bu')
          return false
        }
      })
    },
    repSucc: function (response) {
      console.log('登陆')
      let data = response.data.data
      let msg = response.data.msg
      let status = response.data.status
      this.$message({
        type: 'success',
        message: msg,
        center: true,
        iconClass: ''
      })
      if (status === 1) {
        console.log(data.userdata.username)
        localStorage.setItem('username', data.userdata.username)
        localStorage.setItem('token', data.token)
        this.$router.push('/')
      }
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

  .el-form-item__error {
    left:80px;
  }

</style>
