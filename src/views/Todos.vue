<template>
  <div>
    <h1>Todos</h1>
    <ul>
      <li v-for="todo in allTodos" :key="todo.id">
        <Todo :todo="todo" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Todo from "@/components/Todo.vue";
export default {
  name: "Todos",
  components: {
    Todo,
  },
  methods: {
    ...mapActions(["fetchTodos"]),
  },
  computed: {
    ...mapGetters(["allTodos"]),
  },
  created() {
    this.fetchTodos();
  },
};
</script>

<style></style>
