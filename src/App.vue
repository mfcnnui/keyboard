<template>
  <div id="app" >
    <button style="padding: 10px 15px; margin-top: 30px;" @click="showKeyboard">密码验证</button>
    <keyboard :isEncrypt='true' @passInputDone='getPwd' @passInputChange='passInputChange' @findPass='findPwd' ref="keyboard"></keyboard>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  methods: {
    getPwd(pwd,length){
      console.log(pwd);
      console.log(length);
      this.$refs.keyboard.showLoading();
      setTimeout(() => {
        this.$refs.keyboard.hideLoading();
        this.$refs.keyboard.hideKeyboard();
        this.$refs.keyboard.clearPassword();
      }, 2e3);
    },
    findPwd(e){
      console.log(e);
    },
    showKeyboard(){
      this.$refs.keyboard.showKeyboard();
    },
    passInputChange(pwd,length){
      console.log(pwd);
      console.log(length);
    }
  }
}
</script>
<style>
html,body{
  height: 100%;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
