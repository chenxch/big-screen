import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VCharts from 'v-charts'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VCharts)

new Vue({
  router,
  render: h => h(App),
  mounted() {
    setRem();
  }
}).$mount('#app')

// rem适配
function setRem() {
  var whdef = 100 / 1920; // 表示1920的设计图,使用100PX的默认值
  var bodyWidth = document.body.clientWidth; // 当前窗口的宽度
  var rem = bodyWidth * whdef; // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
  document.getElementsByTagName('html')[0].style.fontSize = rem + 'px';
}
window.addEventListener('load', setRem);
window.addEventListener('resize', setRem);
