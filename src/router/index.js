import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            // component: Home,
            component: () =>
                import(/* webpackChunkName: "Home" */ "../views/home/Home.vue"),
        },
    ]
})

export default router
