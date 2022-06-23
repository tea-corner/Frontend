import Main from '@/pages/Main';
import Users from '@/pages/Users';
import About from '@/pages/About';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: Main
    },

    {
        path: '/users',
        component: Users
    },

    {
        path: '/about',
        component: About
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;