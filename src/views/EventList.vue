<template>
  <v-container class="pa-2">
    <h1>Events Listing</h1>
    <EventCard class="pa-3" v-for="event in events" :key="event.id" :event="event" />
    <v-container class="d-flex justify-center">
      <template v-if="page !=1">
        <router-link
          :to="{name: 'event-list', query: {page: page-1}}"
          rel="prev"
          class="pa-2"
        >Prev Page</router-link>
      </template>
      <template v-if="showNextPage">
        <router-link
          :to="{name: 'event-list', query: {page: page+1}}"
          rel="next"
          class="pa-2"
        >Next Page</router-link>
      </template>
    </v-container>
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
    this.$store.dispatch('fetchEvents', {
      perPage: 3,
      page: this.page
    });
  },
  computed: {
    ...mapState(['events', 'eventsTotal']),
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    showNextPage() {
      return this.eventsTotal > this.page * 3;
    }
  }
};
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
}
</style>