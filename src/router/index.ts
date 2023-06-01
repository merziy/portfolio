import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import { compile } from "vue";

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Home },
    { path: '/', component: About} ,
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;