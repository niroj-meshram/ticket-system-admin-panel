import AdminLayout from "@/layouts/AdminLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
import Dashboard from "@/views/dashboard/Dashboard.vue";
import User from "@/views/user/User.vue";
import { createRouter,createWebHistory } from "vue-router";


const routes = [
    {
        path : '/',
        component : AdminLayout,
        children : [
            {
                path : '',
                name : 'dashboard',
                component : Dashboard,
            },
            {
                path : 'user',
                name : 'user',
                component : User,
            }
        ]
    },
    {
        path : '/',
        component : AuthLayout,
        children  : [
            {
                path : 'login',
                name : 'login',
                component : Login,
            },
            {
                path : 'register',
                name : 'register',
                component : Register,
            }
        ]
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;