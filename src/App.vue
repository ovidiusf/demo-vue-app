<template>
  <v-app id="app">
    <v-main>
      <v-app-bar>
        <v-btn>
          <router-link :to="{ name: 'event-list'}">List</router-link>
        </v-btn>
        <v-btn>
          <router-link :to="{ name: 'event-show'}">Show Event #1</router-link>
        </v-btn>
        <v-btn>
          <router-link :to="{ name: 'event-create'}">Create Event</router-link>
        </v-btn>
      </v-app-bar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  })
};
</script>

<style scoped>
#nav {
  padding: 30px;
}
</style>
