import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/Home/MainView.vue'
import SearchView from '../views/Home/SearchView.vue'
import CommunityView from '../views/CommunityView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home/main',
        },
        {
            path: '/home',
            component: HomeView,
            redirect: '/home/main',
            meta: { isRootPage: true },
            children: [
                {
                    path: 'main',
                    name: 'home',
                    component: MainView,
                    meta: { isRootPage: true },
                },
                {
                    path: 'search',
                    name: 'search',
                    component: SearchView,
                    meta: { isRootPage: false },
                },
            ],
        },
        {
            path: '/community',
            name: 'community',
            component: CommunityView,
            meta: { isRootPage: true },
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView,
            meta: { isRootPage: true },
        },
    ],
})

export default router
