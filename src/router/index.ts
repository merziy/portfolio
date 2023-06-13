import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from '../components/Home.vue';
import Portfolio from '../components/Portfolio.vue';
import Contact from '../components/Contact.vue';
import Bio from '../components/Bio.vue'

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: Home },
    { path: '/portfolio', component: Portfolio } ,
    { path: '/contact', component: Contact },
    { path: '/bio', component: Bio }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;