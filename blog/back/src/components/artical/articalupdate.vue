<template>
  <div class="articalupdate">
      <h3>修改文章</h3>
      <p class="artline">文章标题&nbsp;&nbsp;&nbsp;&nbsp;<input class="artlt" type="text" value=''></p>
      <p class="artline">是否显示&nbsp;&nbsp;&nbsp;&nbsp;
          <el-radio v-model="radio" label="1"> 是 </el-radio>
          <el-radio v-model="radio" label="2"> 否 </el-radio>
      </p>
      <p class="artline">是否推荐&nbsp;&nbsp;&nbsp;&nbsp;
          <el-radio v-model="radio" label="1"> 是 </el-radio>
          <el-radio v-model="radio" label="2"> 否 </el-radio>
      </p>
      <p class="artline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;作者&nbsp;&nbsp;&nbsp;&nbsp;<input class="texter" type="text" value='root'></p>
      <div class="textate">
          <div class="subtlt">导读&nbsp;&nbsp;&nbsp;&nbsp;</div>
          <div class="docs"><textarea name="" class="read" id="" cols="30" rows="10"></textarea></div>
      </div>
      <p class="artline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;时间&nbsp;&nbsp;&nbsp;&nbsp;<input class="texter" type="text" value='选择日期时间'></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: 1
    }
  }
}
</script>

<style scoped>
h3{
    margin-left:10px;
}
.articalupdate{
    width:100%;
    padding:20px;
}
.artline{
    line-height:40px;
    font-size:10px;
    color:#666;
    clear:both;
}
.textate{
    width:100%;
    font-size:10px;
    color:#666;
    padding-left:20px;
}
.subtlt{
    float:left;
}
.docs{
    float:left;
}
.docs textarea{
    width:300px;
}
.el-radio__input.is-checked+.el-radio__label {
    color: #409eff;
}
.el-radio__label {
    font-size: 14px;
    padding-left: 10px;
}
.el-radio__original{
    width:20px;
    height:20px;
}
input {
    color:#666;
    padding-left:5px;
    width:300px;
}
</style>
