<template>
  <v-app-bar class="d-flex flex-row mb-6 justify-center align-center" light elevate-on-scroll>
    <v-btn>
      <router-link class="logo link" to="/">Home</router-link>
    </v-btn>
    <v-btn>
      <router-link class="link" :to="{ name: 'event-list'}">Event List</router-link>
    </v-btn>
    <v-btn>
      <router-link class="link" :to="{ name: 'event-create'}">Create Event</router-link>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {};
</script>

<style scoped>
.link {
  text-decoration: none;
}
</style>