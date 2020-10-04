<template>
  <v-select
    v-model="inputValue"
    v-bind="$attrs"
    v-on="$listeners"
    :items="options"
    :rules="[v => !!v || `${field} is required`]"
    :label="label"
    :hint="hint"
    required
  ></v-select>
</template>

<script>
import { formFieldMixin } from '../mixins/formFieldMixin';
export default {
  mixins: [formFieldMixin],
  data() {
    return {
      inputValue: ''
    };
  },
  props: {
    options: {
      type: Array,
      required: true
    },
    field: {
      type: String,
      default: 'Item'
    },
    hint: {
      type: String,
      default: ''
    }
  }
};
</script>