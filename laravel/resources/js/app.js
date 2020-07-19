import BootstrapVue from 'bootstrap-vue'
 
window.Vue = require("vue");
 
import Vue from "vue";
import router from "./router";
import App from './App.vue' 
import 'bootstrap/dist/css/bootstrap.css' 
import 'bootstrap-vue/dist/bootstrap-vue.css'
import SocialSharing from 'vue-social-sharing';

Vue.use(BootstrapVue)
Vue.use(SocialSharing);
 
const app = new Vue({
    el: "#app",
    router,
    components: { App },
    template: '<App />'
});