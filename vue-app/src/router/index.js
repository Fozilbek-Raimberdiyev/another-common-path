import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/HomePage.vue"
import About from "../components/AboutPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   {
    path : "/",
    component : Home,
    name : "home",
    meta : {
      title : "Home"
    }
   },
   {
    path : "/about",
    component : About,
    name : "about",
    meta : {
      title : "About"
    }
   }
  ],
})

router.beforeEach((to,from,next) => {
  document.title = `${to.meta.title ? to.meta.title : 'Home page'}`
  return next()   
})

export default router

