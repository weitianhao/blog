<template>
  <div class="articalupdate">
      <h3>修改文章</h3>
      <el-form ref="form" :model="artupform" label-width="80px">
      <el-form-item label="文章标题">
        <el-input v-model="artupform.title" size='mini'></el-input>
      </el-form-item>
      <el-form-item label='是否显示'>
        <el-radio v-model="artupform.radio" label="1">是</el-radio>
        <el-radio v-model="artupform.radio" label="2">否</el-radio>
      </el-form-item>
      <el-form-item label='是否推荐'>
        <el-radio v-model="artupform.radiot" label="1">是</el-radio>
        <el-radio v-model="artupform.radiot" label="2">否</el-radio>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="artupform.waiter" size='mini'></el-input>
      </el-form-item>
      <el-form-item label="导读">
        <el-input type="textarea" v-model="artupform.textarea"></el-input>
      </el-form-item>
      <el-form-item label="时间">
        <el-date-picker
          v-model="artupform.value1"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="缩略图">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <div>
          <div id="editor" v-text="artupform.content"></div>  
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      editor: null,
      artupform: {
        radio: 1,
        radioe: 1,
        title: 'test',
        textarea: null,
        val: null,
        waiter: null,
        value1: '',
        value2: '',
        content: null
      }
    }
  },
  mounted () {
    this.editor = window.UE.getEditor('editor')
  },
  methods: {
    submitForm () {
      if (this.content !== '') {
        this.axios.post('/api/articlelist/revisearticle', {enname: this.title, password: this.password}).then(function (res) {
          this.$router.push({path: '/home', query: {username: this.name}})
          localStorage.setItem('username', this.name)
        }).catch(function (err) {
          console.log(err)
        })
      }
    }
  },
  destroyed () {
    this.editor.destroy()
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
.compile{
  width:100%;
}
</style>
