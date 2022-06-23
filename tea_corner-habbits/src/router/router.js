import Main from '@/pages/Main';
import Users from '@/pages/Users';
import About from '@/pages/About';
import LoginPage from '@/pages/Login';
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
    },

    {
        path: '/login',
        component: LoginPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;