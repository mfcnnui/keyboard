<template>
  <div id="app" >
    <button @click="showKeyboard">1111</button>
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
      setTimeout(() => {
        this.$refs.keyboard.loading = false;
        console.log('验证成功');
        this.$refs.keyboard.visible = false;
        this.$refs.keyboard.password = '';
      }, 2e3);
    },
    findPwd(e){
      console.log(e);
    },
    showKeyboard(){
      this.$refs.keyboard.visible = true;
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
