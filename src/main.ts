import 'animate.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'
import About from './views/AboutView.vue'
import Home from './views/HomeView.vue'
import Projects from './views/ProjectsView.vue'
import Uses from './views/UsesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home - Javier Granados',
    },
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
    meta: {
      title: 'Projects | Javier Granados',
    },
  },
  {
    path: '/uses',
    name: 'uses',
    component: Uses,
    meta: {
      title: 'Uses | Javier Granados',
    },
  },
  {
    path: '/about',
    name: 'about',
    component: About,
    meta: {
      title: 'About | Javier Granados',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.afterEach((to, _from, failure) => {
  if (!failure) {
    document.title = to.meta.title as string
  }
})

createApp(App).use(router).mount('#app')
