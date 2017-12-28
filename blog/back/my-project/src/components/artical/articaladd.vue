<template>
  <div class="addart">
    <h3>增加文章</h3>
    <el-form ref="form" :model="artaddform" label-width="80px">
      <el-form-item label="文章标题">
        <el-input v-model="artaddform.title" size='mini'></el-input>
      </el-form-item>
      <el-form-item label='是否显示'>
        <el-radio v-model="radio" label="1">是</el-radio>
        <el-radio v-model="radio" label="2">否</el-radio>
      </el-form-item>
      <el-form-item label='是否推荐'>
        <el-radio v-model="radiot" label="1">是</el-radio>
        <el-radio v-model="radiot" label="2">否</el-radio>
      </el-form-item>
      <el-form-item label="作者">
        <el-input v-model="artaddform.waiter" size='mini'></el-input>
      </el-form-item>
      <el-form-item label="导读">
        <el-input type="textarea" v-model="artaddform.textarea"></el-input>
      </el-form-item>
      <el-form-item label="时间">
        <el-date-picker
          v-model="artaddform.value1"
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
          <div id="editor" v-text="artaddform.content">
            <script id="container" name="content" type="text/plain">
              这里写你的初始化内容
          </script>
          </div>  
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
      radio: 1,
      radiot: 1,
      artaddform: {
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
  destroyed () {
    this.editor.destroy()
  }
}
</script>

<style scoped>
.addart {
  width: 100%;
  padding: 20px;
  font-size:10px;
  color:#666;
}
</style>
