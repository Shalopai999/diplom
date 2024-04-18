import { createRouter, createWebHistory } from "vue-router";
import Homepage from "@/pages/Homepage.vue";
import Shop from "@/pages/Shop.vue";
import FAQ from "@/pages/FAQ.vue";
import About from "@/pages/About.vue";
// import BlogDetails from "@/pages/BlogDetails.vue";
// import ProjectDetails from "@/pages/ProjectDetails.vue";
// import NotFound from "@/pages/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Homepage,
  },
  {
    path: "/shop",
    name: "shop",
    component: Shop,
  },
  {
    path: "/faq",
    name: "FAQ",
    component: FAQ,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  // {
  //   path: "/projectDetails",
  //   name: "projectDetails",
  //   component: ProjectDetails,
  // },
  // {
  //   path: "/404",
  //   name: "notFound",
  //   component: NotFound,
  // },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
    };
  },
});

export default router;
