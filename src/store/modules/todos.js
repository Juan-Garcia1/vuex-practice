import axios from "axios";

const state = {
  todos: [],
  todo: null,
};

const getters = {
  allTodos: (state) => state.todos,
  singleTodo: (state) => state.todo,
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    commit("fetchTodos", response.data);
  },
  async fetchSingleTodo({ commit }, todoId) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`
    );
    commit("fetchSingleTodo", response.data);
  },
};

const mutations = {
  fetchTodos: (state, todos) => (state.todos = todos),
  fetchSingleTodo: (state, todo) => (state.todo = todo),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
