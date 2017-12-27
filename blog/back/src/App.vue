<template>
  <div id="app">
    <div class="header">
      <p class="title"><b>个人博客</b></p>
      <p class="login">当前登录账户：<span>{{user}}</span></p>
    </div>
    <div class="main">
      <div class="list">
        <el-tree :data='data'></el-tree>
      </div>
    </div>
  </div>
</template>

<script>
import data from './assets/data/data.json'
export default {
  name: 'app',
  data () {
    return {
      user: 'host',
      data: data
    }
  }
}
</script>

<style>
#app {
  width:100%;
  height:100%;
  display: flex;
  flex-direction:column;
  overflow:hidden;
}
.header{
  width:100%;
  height:50px;
  background:#5e9fa1;
  color:#fff;
  line-height:50px;
  padding-left:10px;
  padding-right:10px;
}
.title{
  width:100px;
  float:left;
}
.login{
  font-size:14px;
  float: right;
}
.main{
  width:100%;
}
.list{
  width:150px;
  float:left;
  border-right:1px solid #f8f8f8;
  text-align:center;
  font-size:14px;
  color:#666;
}
.el-tree-node__content{
  line-height:50px;
  border:none;
}
.el-tree-node__children{
  font-size:12px;
}
</style>
