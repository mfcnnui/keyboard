import Vue from 'vue'
import App from './App.vue'
import board from './index';
Vue.use(board);
new Vue({
  el: '#app',
  render: h => h(App)
})
