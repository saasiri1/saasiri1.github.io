import { createRouter, createWebHistory,createWebHashHistory} from 'vue-router'
import Resume from '../views/resume.vue'
import homePage from '../views/homePage.vue'
import publication from '../views/publication.vue'
import projects from '../views/projects.vue'
const router = createRouter({
  history: createWebHashHistory(),
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
    },
    {
      path:'/projects',
      name:'projects',
      component:projects
    }

  ]
})

export default router
