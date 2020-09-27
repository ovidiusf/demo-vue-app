<template>
  <v-container class="pa-2">
    <h1>Events for {{ user.user.name }}</h1>

    <EventCard
      class="pa-3"
      v-for="event in event.events"
      :key="event.id"
      :event="event"
    />

    <v-container class="d-flex justify-center">
      <template v-if="page != 1">
        <router-link
          :to="{ name: 'event-list', query: { page: page - 1 } }"
          rel="prev"
          class="pa-2"
          >Prev Page</router-link
        >
      </template>
      <template v-if="showNextPage">
        <router-link
          :to="{ name: 'event-list', query: { page: page + 1 } }"
          rel="next"
          class="pa-2"
          >Next Page</router-link
        >
      </template>
    </v-container>
  </v-container>
</template>
    
<script>
import EventCard from '@/components/EventCard.vue';
import { mapState } from 'vuex';
import store from '../store/index';

function getPageEvents(routeTo, next) {
  const currentPage = parseInt(routeTo.query.page) || 1;
  store
    .dispatch('event/fetchEvents', {
      page: currentPage
    })
    .then(() => {
      routeTo.params.page = currentPage;
      next();
    });
}

export default {
  components: {
    EventCard
  },
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next);
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    getPageEvents(routeTo, next);
  },
  computed: {
    ...mapState(['event', 'user']),
    showNextPage() {
      return this.event.eventsTotal > this.page * this.event.perPage;
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