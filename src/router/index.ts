import { createRouter, createWebHistory } from "vue-router";

const NumberView = () => import("../views/NumberView.vue")
const SamllAlphabetsView = () => import("../views/SamllAlphabetsView.vue")
const CapitalAlphabetsView = () => import("../views/CapitalAlphabetsView.vue")
const ShapesView = () => import("../views/ShapesView.vue")

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: NumberView,
    },
    {
      path: "/small-aphabets",
      name: "smallAphabets",
      component: SamllAlphabetsView,
    },
    {
      path: "/capital-aphabets",
      name: "capitalAphabets",
      component: CapitalAlphabetsView,
    },
    {
      path: "/shapes",
      name: "shapes",
      component: ShapesView,
    },
  ],
});

export default router;
