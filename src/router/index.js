import { createRouter, createWebHistory } from 'vue-router'
import Resume from '../views/resume.vue'
import homePage from '../views/homePage.vue'
import projects from '../views/projects.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: homePage
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
      meta: { scrollTo: '#resume' }
    },
    {
      path: '/publications',
      name: 'publications',
      component: homePage,
      meta: { scrollTo: '#publication' }
    },
    {
      path: '/projects',
      name: 'projects',
      component: projects,
      meta: { scrollTo: '#projects' }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
