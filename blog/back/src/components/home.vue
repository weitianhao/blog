<template>
  <div class="home">
    <div class="header">
      <p class="title"><b>个人博客</b></p>
      <p class="name">当前登录账户：<span>{{user}}</span></p>
    </div>
    <div class="main">
      <div class="list">
        <el-tree :data='data'  @node-click='list'></el-tree>
      </div>
      <div class="mainer">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import data from '../assets/data/data.json'
export default {
  name: 'app',
  data () {
    return {
      data: data,
      listxt: null
    }
  },
  computed: {
    user () {
      return localStorage.getItem('username')
    }
  },
  methods: {
    list (e) {
      this.listxt = e.label
      switch (this.listxt) {
        case '文章操作':
          this.$router.push('/home/Articalupdate')
          break
        case '添加文章':
          this.$router.push('/home/Articaladd')
          break
      }
    }
  }
}
</script>

<style>
.home {
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
.name{
  font-size:14px;
  float: right;
}
.main{
  width:100%;
}
.list{
  width:20%;
  float:left;
  border-right:1px solid #f8f8f8;
  font-size:14px!important;
  color:#666;
  text-align:center;
}
.el-tree-node__label{
    line-height:50px;
}
.el-tree-node__content{
  width:100%;
  line-height:50px;
  border:none;
}
.el-tree-node__children{
  font-size:12px;
}
.mainer{
  width:80%;
  float:right;
}
</style>
