<template>
  <v-container class="pa-2">
    <h1>Events Listing</h1>
    <EventCard />
  </v-container>
</template>
    
<script>
import EventCard from '@/components/EventCard.vue';
export default {
  components: {
    EventCard
  }
};
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
}
</style>