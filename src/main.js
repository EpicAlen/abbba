import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import BaiduMap from 'vue-baidu-map'

// Vue.use(BaiduMap, {
//     ak: '8rkpDtaXOkHdVIgBjGHhaIqZqpcFpolH'
//   })
const app = createApp(App)

app.use(ElementPlus)
app.use(VueAxios, axios)
app.use(store).use(router).mount('#app')
