import { createRouter, createWebHistory } from 'vue-router'
import Index from "@/views/IndexView.vue";
import IndexView from "@/layout/mainBody/IndexView.vue"
import Login from "@/layout/mainBody/LoginView.vue";
import RegisterView from "@/layout/mainBody/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/',
          name: 'index',
          component: IndexView
        },
        {
          path: '/login',
          name: 'login',
          component: Login
        },
        {
          path: '/register',
          name: 'register',
          component: RegisterView
        }
      ]
    }
  ]
})

export default router
