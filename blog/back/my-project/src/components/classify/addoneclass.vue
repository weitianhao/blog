<template>
  <div class="oneclass">
      <h3>一级分类列表</h3>
      <el-form ref="form" :model="artaddform" label-width="80px">
      <el-form-item label="一级中文标识">
        <el-input v-model="oneclass.chiname" size='mini'></el-input>
      </el-form-item>
      <el-form-item label="一级英文标识">
        <el-input v-model="oneclass.elename" size='mini'></el-input>
      </el-form-item>
      <h3>二级分类列表</h3>
      <el-form-item label="二级中文标识">
        <el-input v-model="twoclass.chiname" size='mini'></el-input>
      </el-form-item>
      <el-form-item label="二级英文标识">
        <el-input v-model="twoclass.elename" size='mini'></el-input>
      </el-form-item>
      <el-button type="primary">提交</el-button>
      <el-button>重置</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      oneclass: {
        chiname: null,
        elename: null
      },
      twoclass: {
        chiname: null,
        elename: null
      }
    }
  }
}
</script>

<style>
.oneclass{
    padding:20px;
}
</style>

