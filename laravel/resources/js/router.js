import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import home from "./components/page/home";
import quiz from "./components/page/quiz";

import SocialSharing from 'vue-social-sharing';
Vue.use(SocialSharing);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: home,
            component: home
        },
        {
            path: '/quiz',
            name: quiz,
            component: quiz
          },
    ]
});

export default router