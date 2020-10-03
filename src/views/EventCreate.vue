<template>
  <v-card class="pa-5">
    <h1>Create an Event</h1>
    <v-form class="event-create-width" @submit.prevent="createEvent">
      <v-select
        v-model="event.category"
        :items="categories"
        :rules="[v => !!v || 'Item is required']"
        label="Select a category"
        required
      ></v-select>

      <h3>Name & describe your event</h3>

      <v-container class="field">
        <BaseInput
          label="Add an event title"
          v-model="event.title"
          placeholder="Running with ghosts"
        />
        <BaseInput label="Add a description" v-model="event.description" />
      </v-container>

      <h3>Where is your event?</h3>
      <v-container class="field">
        <BaseInput label="Add a location" v-model="event.location" />
      </v-container>

      <h3>When is your event?</h3>
      <v-container class="field">
        <datepicker
          v-model="event.date"
          placeholder="Select a date"
          name="uniquename"
          :format="format"
        ></datepicker>
      </v-container>

      <v-container class="field">
        <v-select
          v-model="event.time"
          :items="times"
          :rules="[v => !!v || 'Item is required']"
          label="Select a time"
          required
        ></v-select>
      </v-container>
      <v-btn>
        <input type="submit" value="Submit" />
      </v-btn>
    </v-form>
  </v-card>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import NProgress from 'nprogress';
import { mapGetters, mapState } from 'vuex';

export default {
  components: {
    Datepicker
  },
  computed: {},
  data() {
    const times = [];

    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00');
    }
    return {
      format: 'd MMM yyyy',
      times,
      event: this.createFreshEventObject(),
      categories: this.$store.state.categories
    };
  },
  methods: {
    createEvent() {
      const currentDate = new Date(this.event.date);
      this.event.date = currentDate.toDateString();
      NProgress.start();
      this.$store
        .dispatch('event/createEvent', this.event)
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
          NProgress.done();
        });
    },
    createFreshEventObject() {
      const user = this.$store.state.user.user;
      const id = Math.floor(Math.random() * 1000000);

      return {
        id: id,
        user: user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: new Date(),
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
.event-create-width {
  width: 25vw;
}
</style>