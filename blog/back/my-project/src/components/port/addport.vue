<template>
  <div class="fontport">
    <el-form ref="form" :model="fontform" label-width="80px">
        <el-form-item label="标题">
            <el-input v-model="fontform.name" size='mini'></el-input>
        </el-form-item>
        <el-form-item label="接口地址">
            <el-input v-model="fontform.url" size='mini'></el-input>
        </el-form-item> 
        <el-form-item label="类型" size='mini'>
            <el-select v-model="fontform.region" placeholder="请选择类型">
            <el-option label="后台接口" value="back"></el-option>
            <el-option label="前台借口" value="font"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="请求类型" size='mini'>
            <el-select v-model="fontform.label" placeholder="请选择类型">
            <el-option label="post" value="post"></el-option>
            <el-option label="get" value="get"></el-option>
            </el-select>
        </el-form-item> 
        <el-form-item label="请求参数" prop="desc">
            <el-input type="textarea" v-model="fontform.textarea"></el-input>
        </el-form-item>
        <el-form-item label="响应数据" prop="desc">
            <el-input type="textarea" v-model="fontform.val"></el-input>
        </el-form-item>
    </el-form>
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
      }
    }
  }
}
</script>

<style scoped>
.fontport{
    width:100%;
    height:100%;
    padding:20px;
    font-size:12px;
    color:#666;
}
</style>

