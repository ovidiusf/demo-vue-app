<template>
  <div>
    <h1>Create an Event, {{user.name}}</h1>
    <p>This event was created by {{user.id}}</p>
    <p>There are {{getCategoriesLength}} categories</p>
    <ul>
      <li v-for="category in categories" :key="category">{{category}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['user', 'categories']),
    getCategoriesLength() {
      return this.$store.getters.categoriesLength;
    }
  }
};
</script>

<style>
</style>