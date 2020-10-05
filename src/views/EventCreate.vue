<template>
  <v-card class="pa-5">
    <h1>Create an Event</h1>
    <v-form class="event-create-width" @submit.prevent="createEvent">
      <div class="field">
        <BaseSelect
          label="Select a category"
          :options="categories"
          v-model="event.category"
          field="Category"
          @blur="$v.event.category.$touch()"
        />
      </div>

      <h3>Name & describe your event</h3>

      <div class="field">
        <BaseInput
          label="Add an event title"
          v-model="event.title"
          placeholder="Animals fair"
          @blur="$v.event.title.$touch()"
        />
        <template v-if="$v.event.title.$error">
          <p class="errorMessage" v-if="!$v.event.title.required">
            A title is required.
          </p>
        </template>
        <BaseInput
          label="Add a description"
          v-model="event.description"
          placeholder="A nice event for animals"
          @blur="$v.event.description.$touch()"
        />
        <template v-if="$v.event.description.$error">
          <p class="errorMessage" v-if="!$v.event.description.required">
            A description is required.
          </p>
        </template>
      </div>

      <h3>Where is your event?</h3>
      <div class="field">
        <BaseInput
          label="Add a location"
          v-model="event.location"
          @blur="$v.event.location.$touch()"
        />
        <template v-if="$v.event.location.$error">
          <p class="errorMessage" v-if="!$v.event.location.required">
            A location is required.
          </p>
        </template>
      </div>

      <h3>When is your event?</h3>
      <div class="field">
        <datepicker
          v-model="event.date"
          placeholder="Select a date"
          name="uniquename"
          :format="format"
        ></datepicker>
      </div>

      <h3>Who attends the event?</h3>

      <div class="field">
        <BaseInput label="Add attendees" v-model="attendees" />
      </div>
      <h4>Please write attendees separated by commas</h4>

      <div class="field">
        <BaseSelect
          label="Select a time"
          :options="times"
          v-model="event.time"
          hint="Pick your desired time"
          @blur="$v.event.time.$touch()"
        />
        <template v-if="$v.event.time.$error">
          <p class="errorMessage" v-if="!$v.event.time.required">
            A time is required.
          </p>
        </template>
      </div>

      <div class="d-flex justify-center">
        <BaseButton type="submit" :disabled="$v.$anyError">Submit</BaseButton>
      </div>
      <p v-if="$v.$anyError" class="errorMessage d-flex justify-center">
        Please fill out the required field(s).
      </p>
    </v-form>
  </v-card>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import NProgress from 'nprogress';
import { mapGetters, mapState } from 'vuex';
import { required } from 'vuelidate/lib/validators';

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
      attendees: [],
      event: this.createFreshEventObject(),
      categories: this.$store.state.categories
    };
  },
  validations: {
    event: {
      category: { required },
      title: { required },
      description: { required },
      location: { required },
      time: { required }
    }
  },
  methods: {
    createEvent() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        // const currentDate = new Date(this.event.date);
        // this.event.date = currentDate.toDateString();

        if (this.attendees.length > 0) {
          this.attendees = this.attendees.split(',');
          this.event.attendees = this.attendees.map(attendee =>
            attendee.trim()
          );
        }

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
      }
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
  width: 45vw;
}

@media only screen and (max-width: 1200px) {
  .event-create-width {
    width: 60vw;
  }
}

@media only screen and (max-width: 1000px) {
  .event-create-width {
    width: 80vw;
  }
}
@media only screen and (max-width: 600px) {
  .event-create-width {
    width: 95vw;
  }
}

.errorMessage {
  color: red;
}
</style>