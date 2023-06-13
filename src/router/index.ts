import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from '../components/Home.vue';
import Portfolio from '../components/Portfolio.vue';

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Home },
    { path: '/', component: Portfolio} ,
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;