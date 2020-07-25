<template>
  <div>
    <p>ID: {{ singleTodo.id }}</p>
    <h1>{{ singleTodo.title }}</h1>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todo",
  methods: {
    ...mapActions(["fetchSingleTodo"]),
  },
  computed: {
    ...mapGetters(["singleTodo"]),
  },
  created() {
    this.fetchSingleTodo(this.$route.params.todoId);
  },
};
</script>

<style></style>
