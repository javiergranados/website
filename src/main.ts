import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'
import About from './views/AboutView.vue'
import MainView from './views/MainView.vue'
import Projects from './views/ProjectsView.vue'
import Uses from './views/UsesView.vue'

const routes = [
  { path: '/', name: 'main', component: MainView },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '/uses', name: 'uses', component: Uses },
  { path: '/about', name: 'about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
