<template>
  <v-container>
    <h1>Oops!</h1>
    <h3>The {{ resource }} you are looking for is not here.</h3>
    <router-link :to="{ name: 'home' }">Back to the home page</router-link>
  </v-container>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
</style>