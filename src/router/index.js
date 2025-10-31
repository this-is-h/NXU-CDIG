import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/Home/MainView.vue'
import CommunityView from '../views/CommunityView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            alias: '/home',
            children: [
                {
                    path: 'main',
                    name: 'main',
                    component: MainView,
                },
                {
                    path: 'search',
                    name: 'search',
                    component: () => import('../views/Home/SearchView.vue'),
                }
            ]
        },
        {
            path: '/community',
            name: 'community',
            component: CommunityView,
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: AboutView,
        },
    ],
})

export default router
