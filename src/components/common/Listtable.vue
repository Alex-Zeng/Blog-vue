<template>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%" >
    <el-table-column
      label="id"
      prop="id" min-width="10%">
    </el-table-column>
    <el-table-column
      label="名称"
      prop="name" fit="true" min-width="20%">
    </el-table-column>
        <el-table-column
      label="方法"
      prop="method" fit="true" min-width="20%">
    </el-table-column>
        <el-table-column
      label="url"
      prop="url" fit="true">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Listable',
  data () {
    return {
      tableData: [{
        id: '1',
        name: '登陆',
        method: 'POST',
        url: '/login'
      }, {
        id: '2',
        name: '注册',
        method: 'POST',
        url: '/register'
      }, {
        id: '3',
        name: '获取列表',
        method: 'GET',
        url: '/getlist'
      }
      ],
      search: ''
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    }
  }
}
</script>
