import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import home from "./components/page/Home";
import quiz from "./components/page/Quiz";
import register from './components/page/Register'

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
            path: '/register',
            name: register,
            component: register
        },
    ]
});

export default router