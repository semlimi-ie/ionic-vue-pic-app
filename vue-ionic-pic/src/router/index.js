import { createRouter, createWebHistory } from "@ionic/vue-router";
import MemoriesPage from "../pages/memories-page.vue";

const routes = [
  {
    path: "/",
    redirect: "/memories",
  },
  {
    path: "/memories",
    component: MemoriesPage,
  },
  {
    path: "/memory-details/:id",
    component: () => import("../pages/memory-details-page.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
