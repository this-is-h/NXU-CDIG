import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainView from '../views/Home/MainView.vue'
import SearchView from '../views/Home/SearchView.vue'
import CommunityView from '../views/CommunityView.vue'
import AboutView from '../views/AboutView.vue'
import AboutUsView from '../views/About/AboutUsView.vue'
import QAView from '../views/About/QAView.vue'
import ThanksView from '../views/About/ThanksView.vue'


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
                    name: 'main',
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
        {
            path: '/aboutUs',
            name: 'aboutUs',
            component: AboutUsView,
            meta: {
                isRootPage: false,
                parentRoute: '/about',
            },
        },
        {
            path: '/qa',
            name: 'qa',
            component: QAView,
            meta: {
                isRootPage: false,
                parentRoute: '/about',
            },
        },
        {
            path: '/thanks',
            name: 'thanks',
            component: ThanksView,
            meta: {
                isRootPage: false,
                parentRoute: '/about',
            },
        },
    ],
})

export default router
