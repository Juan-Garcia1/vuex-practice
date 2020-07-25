<template>
  <div class="todo">
    <p class="todo__id">ID:{{ todo.id }}</p>
    <router-link :to="{ name: 'Todo', params: { todoId: todo.id } }">
      <h2 class="todo__title">{{ todo.title }}</h2>
    </router-link>
    <p class="todo__completed">Completed: {{ todo.completed }}</p>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    todo: Object,
  },
};
</script>

<style scoped>
.todo {
  margin-bottom: 40px;
}
</style>
