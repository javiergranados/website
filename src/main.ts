import { createApp, isRef } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import i18n from './i18n'
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

// Establecer el atributo lang del HTML según el locale inicial.
// Con legacy: false, i18n.global.locale es un WritableComputedRef<string>.
const locale = i18n.global.locale
const initialLang: string = isRef(locale) ? (locale.value as string) : String(locale)
document.documentElement.setAttribute('lang', initialLang)

createApp(App).use(router).use(i18n).mount('#app')
