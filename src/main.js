import { connect } from "@vue/devtools-electron";
import Vue from 'vue'
import App from './App.vue'

if (process.env.NODE_ENV === 'development') {
  connect('http://localhost', 8098)
}
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')
