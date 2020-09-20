<template>
  <router-link class="router-link" :to="{ name: 'event-show', params: {id: event.id}}">
    <v-card class="pa-10">
      <span>@{{event.time}} on {{event.date}}</span>
      <h4>{{event.title}}</h4>
      <v-container class="d-flex justify-center">
        <BaseIcon name="users" class="pr-4">{{event.attendees.length}} attending</BaseIcon>
      </v-container>
    </v-card>
  </router-link>
</template>

<script>
export default {
  props: {
    event: Object
  }
};
</script>

<style scoped>
h4 {
  color: green;
}
.router-link {
  text-decoration: none;
}
</style>