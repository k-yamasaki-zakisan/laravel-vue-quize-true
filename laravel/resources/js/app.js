import BootstrapVue from 'bootstrap-vue'
 
window.Vue = require("vue");
 
import Vue from "vue";
import router from "./router";
import MainPage from './components/page/MainPage'
// import App from './App.vue' 
import 'bootstrap/dist/css/bootstrap.css' ;
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import Notifications from 'vue-notification'
import axios from 'axios';
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
require('bootstrap');

Vue.prototype.$http = axios;

axios.defaults.headers.common['Authorization'] = "Bearer " + document
  .querySelector('meta[name="api-token"]')
  .getAttribute("content");

Vue.use(Loading);

Vue.use(Notifications);

Vue.use(BootstrapVue);
 
// const app = new Vue({
//     el: "#app",
//     router,
//     components: { App },
//     template: '<App />'
// });

new Vue({
    router: router,
    components: {
        app: MainPage
      }
}).$mount('#app')