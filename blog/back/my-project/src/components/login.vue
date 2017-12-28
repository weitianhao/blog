<template>
  <div class="login">
      <h4>个人博客</h4>
      <p class="user line">账号：<input type="text" v-model='name'></p>
      <p class="psd line">密码：<input type="password" v-model='password'></p>
      <p class="btn line"><button @click='login'>登录</button></p>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      name: null,
      password: null
    }
  },
  methods: {
    login () {
      // if (this.name !== '' && this.password !== '') {
      //   this.axios.post('/api/register/login', {name: this.name, password: this.password}).then(function (res) {
      //     this.$router.push({path: '/home', query: {username: this.name}})
      //     localStorage.setItem('username', this.name)
      //   }).catch(function (err) {
      //     console.log(err)
      //   })
      // }
      this.$router.push({path: '/home', query: {username: this.name}})
      localStorage.setItem('username', this.name)
    }
  }
}
</script>

<style scoped>
.login{
    width:300px;
    height: 300px;
    border:1px solid #ef5a00;
    margin: 0 auto;
    margin-top:100px;
    padding:20px;
}
.line{
    width:200px;
    height: 32px;
    margin: 0 auto;
    margin-top:20px;
    padding-left:5px;
    line-height:30px;
    font-size:12px;
}
.line input{
    height:20px;
    border:none;
    background:#f8f8f8;
}
.user, .psd{
    border: 1px solid #ccc;
}
.btn button{
    width:200px;
    height: 30px;
    color:#fff;
    border:none;
    background:#ef5a00;
    text-align:center;
}
</style>
