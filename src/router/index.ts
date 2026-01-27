import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/products",
      name: "prodcts",
      component: () => import("@/views/ProductsView.vue")
    },
    // {
    //   path: "/",
    //   name: "home",
    //   component: () => import("@/views/ProductsView.vue")
    // }
  ],
})

export default router
