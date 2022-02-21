import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Feed from '../views/Feed.vue'
import Explora from '../views/Explora.vue'
import Archivo from '../views/Archivo.vue'
import Blog from '../views/Blog.vue'
import Notificaciones from '../views/Notificaciones.vue'
import Login from '../views/Login.vue'
import Registro from '../views/Registro.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feed',
    name: 'Feed',
    component: Feed
  },
  {
    path: '/explora',
    name: 'Explora',
    component: Explora
  },
  {
    path: '/archivo',
    name: 'Archivo',
    component: Archivo
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/notificaciones',
    name: 'Notificaciones',
    component: Notificaciones
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Registro
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
