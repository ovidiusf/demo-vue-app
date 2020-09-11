<template>
  <v-container class="pa-2">
    <h1>Events Listing</h1>
    <EventCard class="pa-3" v-for="event in events" :key="event.id" :event="event" />
  </v-container>
</template>
    
<script>
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService.js';

export default {
  components: {
    EventCard
  },
  data() {
    return {
      events: []
    };
  },
  created() {
    EventService.getEvents()
      .then(response => {
        this.events = response.data;
      })
      .catch(error => {
        console.info(error, 'This is an error');
      });
  }
};
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
}
</style>