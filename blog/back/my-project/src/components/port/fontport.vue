<template>
  <div class="fonttable">
      <el-table
      :data="tableData"
      style="width: 100%; font-size:12px; font-weight:normal; text-align:center; color:#666;line-height:30px;">
      <el-table-column
        prop="title"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="bfclass"
        label="前后端分类"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="时间">
      </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    <div class="pagemenu">
      <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="100">
    </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fontform: {
        name: '前台一级分类添加',
        url: null,
        region: null,
        label: null,
        textarea: null,
        val: null
      },
      tableData: [
        {
          date: '2016-05-02',
          bfclass: 'font',
          title: '前端读取分类'
        },
        {
          date: '2016-05-02',
          bfclass: 'font',
          title: '前端读取分类'
        },
        {
          date: '2016-05-02',
          bfclass: 'font',
          title: '前端读取分类'
        },
        {
          date: '2016-05-02',
          bfclass: 'font',
          title: '前端读取分类'
        }
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
    }
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style scoped>
.fonttable{
    padding:10px;
    width:100%;
    height:100%;
}
.has-gutter .cell{
    font-size:16px;
    color:#666;
    font-weight:500;
}
.pagemenu{
  width:485px;
  margin:0 auto;
}
</style>
