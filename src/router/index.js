import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '../views/WelcomePage.vue'
import ProjectsPage from '../views/ProjectsPage.vue'
import PersonsPage from '../views/PersonsPage.vue'

const routes = [
  {
    path: '/', name:'home', component: WelcomePage
  },
  {
    path: '/projects', name:'projects', component: ProjectsPage
  },
  {
    path: '/persons', name:'persons', component: PersonsPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
