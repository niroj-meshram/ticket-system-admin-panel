import AdminLayout from "@/layouts/AdminLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
import Dashboard from "@/views/dashboard/Dashboard.vue";
import Ticket from "@/views/user/Ticket.vue";
import CreateTicket from "@/views/user/CreateTicket.vue";
import { createRouter,createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";


const routes = [
    {
        path : '/',
        component : AdminLayout,
        meta: { requiresAuth: true },
        children : [
            {
                path : '',
                name : 'dashboard',
                component : Dashboard,
            },
            {
                path : 'ticket',
                name : 'ticket.index',
                component : Ticket,
            },
            {
                path : 'ticket/create',
                name : 'ticket.create',
                component : CreateTicket,
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
                meta : {guestOnly : true}

            },
            {
                path : 'register',
                name : 'register',
                component : Register,
                meta : {guestOnly : true}

            }
        ]
    }
]


const router = createRouter({
    history:createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  const isLoggedIn = auth.isUserAuthenticated

  const requiresAuth = to.matched.some(
    record => record.meta.requiresAuth
  )

  const guestOnly = to.matched.some(
    record => record.meta.guestOnly
  )

  // 🔐 logged out → trying to access protected route
  if (requiresAuth && !isLoggedIn) {
    return next('/login')
  }

  // 🔒 logged in → trying to access login/register
  if (guestOnly && isLoggedIn) {
    return next('/')
  }

  next()
})


export default router;