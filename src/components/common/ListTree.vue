<template>
  <div>
    <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText">
    </el-input>
    <p></p>
     <el-button-group>
  <el-button type="primary" icon="el-icon-plus" size="mini">添加</el-button>
  <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
  <el-button type="primary" icon="el-icon-share" size="mini">清空</el-button>
  <el-button type="primary" icon="el-icon-delete" size="mini">删除</el-button>
</el-button-group>
    <p></p>
    <el-tree class="filter-tree"
             :data="proTree"
             :props="defaultProps"
             default-expand-all
             show-checkbox
             :filter-node-method="filterNode"
             ref="tree"
             @node-click="tree_edit"
              >
    </el-tree>
  </div>
</template>
<script>
export default {
  name: 'ListTree',
  mounted () {
    // 请求项目列表
    this.get_tree()
    // this.get_project_list()
  },
  watch: {
    filterText (val) {
      this.$refs.tree.filter(val)
    }
  },
  data () {
    return {
      filterText: '',
      proTree: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    filterNode (value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    get_tree () {
      let curProId = JSON.parse(localStorage.getItem('current_project'))
      this.$axios.get('api/get_file_level?project_id=' + curProId).then(response => {
        this.proTree = response.data.data
      })
    },
    tree_edit (data) {
      console.log(data)
    }
  }
}
</script>
