import { createRouter, createWebHistory } from 'vue-router'
import ShowPosts from '../views/ShowPosts.vue'
import SinglePost from '../views/SinglePost.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ShowPosts
  },
  {
    path: '/category/:catid',
    name: 'category',
    component: ShowPosts,
    props: true
  },
  {
    path: '/post/:postid',
    name: 'post',
    component: SinglePost,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
