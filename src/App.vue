<template>
  <v-app id="app">
    <v-main>
      <Navbar />
      <v-container class="d-flex justify-center">
        <router-view
          :key="$route.fullPath"
          class="main-view pa-2 d-flex flex-column mb-6 justify-center align-center"
        ></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({})
};
</script>

<style scoped>
.main-view {
  width: 60%;
}
</style>
