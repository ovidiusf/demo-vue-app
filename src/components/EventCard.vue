<template>
  <router-link
    class="router-link"
    :to="{ name: 'event-show', params: { id: event.id } }"
  >
    <v-card class="pa-10 event-card-width">
      <span>@{{ event.time }} on {{ event.date | date }}</span>
      <h4>{{ event.title }}</h4>
      <v-container class="d-flex">
        <BaseIcon name="users" class="pr-4"
          >{{ event.attendees.length }} attending</BaseIcon
        >
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
.event-card-width {
  width: 50vw;
}

@media only screen and (max-width: 1200px) {
  .event-card-width {
    width: 70vw;
  }
}

@media only screen and (max-width: 1000px) {
  .event-card-width {
    width: 80vw;
  }
}
@media only screen and (max-width: 600px) {
  .event-card-width {
    width: 95vw;
  }
}
</style>