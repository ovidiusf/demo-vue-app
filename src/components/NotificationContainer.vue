<template>
  <v-container class="d-flex flex-column notification-container">
    <NotificationBar
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </v-container>
</template>

<script>
import NotificationBar from './NotificationBar';
import { mapState } from 'vuex';
export default {
  components: {
    NotificationBar
  },
  computed: mapState('notification', ['notifications'])
};
</script>

<style scoped>
</style>