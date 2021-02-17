import { createRouter, createWebHistory } from "@ionic/vue-router";

import KontaktePage from "../pages/KontaktePage.vue";

const routes = [
  {
    path: "/",
    redirect: "/kontakte",
  },
  {
    path: "/kontakte",
    component: KontaktePage,
  },
  {
    path: "/kontakte/add",
    component: () => import("../pages/AddKontaktPage.vue"),
  },
  {
    path: "/kontakte/:id",
    component: () => import("../pages/KontaktDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
