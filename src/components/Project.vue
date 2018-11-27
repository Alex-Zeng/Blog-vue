<template>
  <div>
    <keep-alive>
      <Header></Header>
    </keep-alive>
    <el-row>
      <el-col :span="5">
        <el-card shadow="always">
          <ListTree></ListTree>
        </el-card>
      </el-col>
      <el-col :span="19" class="main_right">
        <div class="grid-content bg-purple-light">
          <el-main>
            <Listable></Listable>
          </el-main>
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
import Listable from './common/Listtable'
import ListTree from './common/ListTree'

export default {
  name: 'Index',
  components: {
    Header,
    Listable,
    ListTree
  },
  data () {
    return {
      project_name: this.$route.query.project_name,
      project_id: this.$route.query.project_id
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
