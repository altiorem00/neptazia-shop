import Vue from "vue";
import VueRouter from "vue-router";

const MainPage = () => import("@/pages/MainPage.vue");
const Cart = () => import("@/pages/Cart.vue");

Vue.use(VueRouter);

const routes = [
  {
    name: "main",
    component: MainPage,
    path: "/",
  },
  {
    name: "cart",
    component: Cart,
    path: "/cart",
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
