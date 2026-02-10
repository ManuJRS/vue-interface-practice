import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/products",
      name: "prodcts",
      component: () => import("@/views/ProductsView.vue")
    },
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("@/views/NotFoundView.vue"),
    },
    {
      path: "/about",
      name: "about-us",
      component: () => import("@/views/AboutView.vue"),
    },
        {
      path: "/PlaygroundView",
      name: "PlaygroundView",
      component: () => import("@/views/PlaygroundView.vue"),
    },
  ],
})

export default router
