import Vue from 'vue';
import App from './App.vue';

console.log('hello patched VAnnotator!');

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

Vue.config.productionTip = false;
