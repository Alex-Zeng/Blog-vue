<template>
  <div >
    <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText">
    </el-input>
    <p></p>
    <el-button-group>
      <el-button type="primary" icon="el-icon-edit" size="mini" @click.stop="dialogVisible = true">操作</el-button>
      <el-button type="primary" icon="el-icon-share" size="mini">清空</el-button>
      <el-button type="primary" icon="el-icon-delete" size="mini" @click.stop="handleClose">删除</el-button>
    </el-button-group>
    <p></p>
    <el-dialog
        title="新增或修改"
        :visible.sync="dialogVisible"
        width="30%">
        <!--:before-close="handleClose">-->
        <el-form class="demo-ruleForm">
          <el-form-item
            label="名称"
            >
            <span>{{current_node.label}}</span>
            <el-input type="text" autocomplete="off" v-model="newlabel"></el-input>
          </el-form-item>
          <el-button @click="add_node(edit)" >修改名称</el-button>
          <el-button type="primary" @click="add_node()">新增</el-button>
        </el-form>
      </el-dialog>
    <el-tree class="filter-tree"
             :data="proTree"
             :props="defaultProps"
             default-expand-all
             :filter-node-method="filterNode"
             ref="tree"
             @node-click="get_current_node"
             highlight-current
    >
    </el-tree>

  </div>
</template>
<script>
export default {
  name: 'ListTree',
  inject: ['reload'],
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
      edit: 1,
      proTree: [],
      dialogVisible: false,
      curProId: '',
      current_node: {},
      newlabel: '',
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
      this.curProId = JSON.parse(localStorage.getItem('current_project'))
      this.$axios.get('api/get_file_level?project_id=' + this.curProId).then(response => {
        this.proTree = response.data.data
      })
    },
    get_current_node (data) {
      this.current_node = data
    },
    add_node (option) {
      this.$axios.post('api/add_file_level', {
        'pro_id': this.current_node.id ? this.current_node.id : 0,
        'label': this.newlabel,
        'project_id': this.curProId,
        'current_id': option === 1 ? this.current_node.id : ''
      }).then(response => {
        this.reload()
      })
    },
    handleClose (done) {
      this.$confirm('确认删除？')
        .then(_ => {
          console.log('确认删除')
        })
        .catch(_ => {})
    }
  }
}
</script>
