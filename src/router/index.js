import { createRouter, createWebHistory } from 'vue-router'
import Resume from '../views/resume.vue'
import homePage from '../views/homePage.vue'
import publication from '../views/publication.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },

    {
      path: '/resume',
      name: 'resume',
      component: Resume
    },
    {
      path:'/publication',
      name:'publications',
      component:publication
    }

  ]
})

export default router
