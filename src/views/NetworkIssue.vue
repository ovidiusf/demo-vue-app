<template>
  <v-container>
    <h1>Uh-oh!</h1>
    <h3>It looks like you are experiencing some network issues</h3>
    <h3>Please click the back button and try again</h3>
    <router-link :to="{ name: 'home' }">
      Or go back to the home page
    </router-link>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>