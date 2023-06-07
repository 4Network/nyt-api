import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ArticleView from '../views/ArticleView.vue'
import BooksView from '../views/BooksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    {
      path: '/books',
      name: 'books',
      component: BooksView
    },
  ]
})

export default router
// exports.key = "HRb1SQE0WMuY63JclAJXBlxHUAPxAfDl";
