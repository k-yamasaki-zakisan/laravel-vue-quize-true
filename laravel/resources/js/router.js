import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import home from "./components/home.vue";

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: home,
            component: home
        },
    ]
});

export default router