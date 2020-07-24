import Vue from "vue";
import VueRouter from "vue-router";
import Todos from "../views/Todos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Todos",
    component: Todos,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
