import Vue from "vue";
import VueRouter from "vue-router";
import ToDos from "../views/ToDos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ToDos",
    component: ToDos,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
