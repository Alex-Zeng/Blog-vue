<template>
    <el-row class="header">
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-header>
            <el-col :span="6">
             <el-dropdown >
            <el-button type="primary">
              项目管理<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown" >
              <el-dropdown-item :key="key" v-for="(value, key) in project_list" @click.native="go_project(key,value)" >{{key}}-{{value}}</el-dropdown-item>
              <el-dropdown-item @click.native="add_pro">添加项目</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
              <el-dropdown>
            <el-button type="primary">
              配置中心<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
            </el-col>
            <el-col :span="4" :offset="14">
              <span>Hello {{username}} ,</span>
                <el-button  class="text-muted fl" v-if="username" @click="logout()">退出</el-button>
              <el-button v-else @click="to_login()">登录</el-button>
            </el-col>
          </el-header>
        </div>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: 'header-all',
  inject: ['reload'],
  data () {
    return {
      username: localStorage.username,
      project_list: {}
    }
  },
  mounted () {
    // 请求项目列表
    this.get_project_list()
    // this.get_project_list()
  },
  methods: {
    logout: function () {
      this.$axios.get('api/logout').then(this.repSucc).catch(function (error) {
        console.log(error)
      })
    },
    repSucc: function (response) {
      let msg = response.data.msg
      let status = response.data.status
      this.$message({
        type: 'success',
        message: msg,
        center: true
      })
      if (status === 1) {
        localStorage.clear()
        this.reload()
      }
    },
    to_login: function () {
      this.$router.push({path: '/login'})
    },
    to_create_project: function () {
      this.$router.push({path: '/create_project'})
    },
    get_project_list: function () {
      // 请求项目列表
      this.$axios.get('api/get_project_list').then(response => {
        let data = response.data.data
        this.project_list = data.list
        localStorage.setItem('pros', JSON.stringify(this.project_list))
        // console.log('current_pro_id=' + localStorage.get('current_pro_id'))
      }).catch(function (error) {
        console.log(error)
      })
    },
    add_pro: function () {
      this.to_create_project()
    },
    go_project: function (key, value) {
      localStorage.setItem('current_project', JSON.stringify(key))
      this.$router.push({path: '/Project', query: {project_id: key, project_name: value}})
    }
  }
}
</script>

<style scoped>

</style>
