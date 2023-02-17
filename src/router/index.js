import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import SingleApartmentPage from "@/pages/SingleApartmentPage.vue";
import redirect from "@/pages/redirect.vue";
import NotFound from "@/pages/NotFound.vue";
import WorkingSearch from "@/pages/WorkingSearch.vue";
import CreditsPage from "@/pages/CreditsPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/advancedSearch",
    name: "advancedSearch",
    component: WorkingSearch,
  },
  {
    path: "/apartment/:slug",
    name: "apartment",
    component: SingleApartmentPage,
  },
  {
    path: "/not-found",
    name: "not-found",
    component: NotFound,
  },
  {
    path: "/redirect",
    name: "redirect",
    component: redirect,
  },
  {
    path: "/credits",
    name: "credits",
    component: CreditsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
