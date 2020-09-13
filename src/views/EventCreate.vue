<template>
  <v-card class="pa-5">
    <h1>Create an Event</h1>
    <v-form @submit.prevent="createEvent">
      <v-select
        v-model="event.category"
        :items="categories"
        :rules="[v => !!v || 'Item is required']"
        label="Select a category"
        required
      ></v-select>

      <h3>Name & describe your event</h3>
      <div class="field">
        <v-text-field v-model="event.title" label="Add an event title" required></v-text-field>
        <v-text-field v-model="event.description" label="Add a description" required></v-text-field>
      </div>

      <h3>Where is your event?</h3>
      <div class="field">
        <v-text-field v-model="event.location" label="Add a location" required></v-text-field>
      </div>

      <h3>When is your event?</h3>
      <div class="field">
        <DatePicker v-model="event.date" placeholder="Select a date" format="dd MMM yyyy" />
      </div>

      <div class="field">
        <v-select
          v-model="event.time"
          :items="times"
          :rules="[v => !!v || 'Item is required']"
          label="Select a time"
          required
        ></v-select>
      </div>

      <input type="submit" value="Submit" />
    </v-form>
  </v-card>
</template>

<script>
import DatePicker from 'vuejs-datepicker';
import { mapGetters, mapState } from 'vuex';

export default {
  components: {
    DatePicker
  },
  computed: {
    // ...mapState(['user']),
    // ...mapGetters(['getEventByID'])
  },
  data() {
    const times = [];

    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00');
    }
    return {
      times,
      event: this.createFreshEventObject(),
      categories: this.$store.state.categories
    };
  },
  methods: {
    createEvent() {
      this.$store
        .dispatch('createEvent', this.event)
        .then(() => {
          this.$router.push({
            name: 'event-show',
            params: {
              id: this.event.id
            }
          });
          this.event = this.createFreshEventObject();
        })
        .catch(() => {
          console.info('There was a problem creating your event');
        });
    },
    createFreshEventObject() {
      const user = this.$store.state.user;
      const id = Math.floor(Math.random() * 1000000);

      return {
        id: id,
        user: user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      };
    }
  }
};
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
label {
  padding: 5px;
}
</style>