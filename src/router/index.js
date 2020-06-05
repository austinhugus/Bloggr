import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Home from "../pages/Home.vue";
// @ts-ignore
import Profile from "../pages/Profile.vue";
import { authGuard } from "@bcwdev/auth0-vue";
// @ts-ignore
import BlogDeetz from "../pages/BlogPage.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/blogs/:id',
    name: 'blogDeetz',
    component: BlogDeetz
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({
  routes,
});

export default router;
