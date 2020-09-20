<template>
  <v-container class="pa-2">
    <h1>Events Listing</h1>
    <EventCard class="pa-3" v-for="event in events" :key="event.id" :event="event" />
  </v-container>
</template>
    
<script>
import EventCard from '@/components/EventCard.vue';
import { mapState } from 'vuex';

export default {
  components: {
    EventCard
  },
  created() {
    this.$store.dispatch('fetchEvents');
  },
  computed: {
    ...mapState(['events'])
  }
};
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
}
</style>