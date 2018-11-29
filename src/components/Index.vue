<template>
  <div>
      <Header></Header>
    <el-row>
      <el-col :span="8" :offset="8">
        <div shadow="always" :key="key" v-for="(value, key) in project_list" command="key">
          <el-button type="primary" round @click="to_project(key,value)">{{value}}</el-button>
        </div>
      </el-col>
    </el-row>
    <el-row class="footer">
      <el-col :span="24">
        <el-footer>
          <div class="grid-content bg-purple-dark">Footer</div>
        </el-footer>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Header from './Header'

export default {
  name: 'Index',
  components: {
    Header
  },
  mounted () {
    this.project_list = JSON.parse(localStorage.getItem('pros'))
  },
  data () {
    return {
      project_list: {}
    }
  },
  methods: {
    to_project: function (id, name) {
      localStorage.setItem('current_project', JSON.stringify(id))
      this.$router.push({path: '/Project', query: {project_id: id, project_name: name}})
    }
  }
}

</script>

<style>
  html {
    margin: 0;
    padding: 0;
    /*background-image: url(../assets/logo.jpg);*/
    /*background-size: 100% 100%;*/
    /*background-repeat: no-repeat*/
  }

  img {
    width: 100%;
    height: 100%;
  }

  #app {
    margin: 0;
    padding: 0;
  }

  .el-card {
    margin-top: 5px;
  }

  .el-header, .el-footer {
    background-color: #f9f7e2;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    width: 100%;
  }

  .el-main {
    color: #333;
    text-align: center;
    margin-left: 5px;
    padding: 0;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
