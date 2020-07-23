import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import home from "./components/page/Home";
import quiz from "./components/page/Quiz";
import login from './components/page/Login';
import register from "./components/page/Register";
import mypage from './components/page/Mypage'

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
        {
            path: '/login',
            name: 'login',
            component: login
          },
        {
            path: '/register',
            name: register,
            component: register
        },
        {
            path: '/mypage',
            name: 'mypage',
            component: mypage,
        },
    ]
});

export default router