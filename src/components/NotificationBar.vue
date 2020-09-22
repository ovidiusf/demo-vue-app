<template>
  <v-container class="d-flex pa-4" :class="notificationTypeClass">
    <p>{{notification.message}}</p>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  computed: {
    notificationTypeClass() {
      return `-text-${this.notification.type}`;
    }
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
  methods: mapActions('notification', ['remove']),
  data() {
    return {
      timeout: null
    };
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.notification), 5000);
  }
};
</script>

<style scoped>
.-text-success {
  color: green;
}
.-text-error {
  color: red;
}
</style>