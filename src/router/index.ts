// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/pages/Home.vue";
import AboutMe from "@/pages/AboutMe.vue";
import Services from "@/pages/Services.vue";
import Contact from "@/pages/Contact.vue";

const routes = [
  {
    path: '/',
    component: Home,
   },
  {
    path: '/aboutme',
    component: AboutMe,
  },
  {
    path: '/services',
    component: Services,
  },
  {
    path: '/contact',
    component: Contact,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
