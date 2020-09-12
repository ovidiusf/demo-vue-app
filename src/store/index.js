import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: 'abc123',
      name: 'Adam Jahr'
    },
    categories: ['sustainability', 'education', 'food', 'community']
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    categoriesLength: state => {
      return state.categories.length;
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    activeTodosCount: (state, getter) => {
      return state.todos.length - getters.doneTodos.length;
    }
  }
});
