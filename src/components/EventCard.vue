<template>
  <router-link class="router-link" :to="{ name: 'event-show', params: {id: '1'}}">
    <v-card class="pa-10">
      <span>@{{event.time}} on {{event.date}}</span>
      <h4>{{event.title}}</h4>
      <span>{{event.attendees.length}} attending</span>
    </v-card>
  </router-link>
</template>

<script>
export default {
  data() {
    return {
      event: {
        id: 1,
        title: 'Beach Cleanup',
        date: 'Thu Sep 10, 2020',
        time: '6:30',
        attendees: [
          {
            id: 'x01',
            name: 'Karl Opeinheimer'
          },
          {
            id: 'x02',
            name: 'Adam Longbow'
          },
          {
            id: 'x03',
            name: 'Martina Kurzsmith'
          }
        ]
      }
    };
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