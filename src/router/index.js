import Vue from "vue";
import VueRouter from "vue-router";
import Todos from "../views/Todos.vue";
import Todo from "../views/Todo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Todos",
    component: Todos,
  },
  {
    path: "/todo/:todoId",
    name: "Todo",
    component: Todo,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
