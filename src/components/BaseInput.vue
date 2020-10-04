<template>
  <v-text-field
    v-if="label"
    v-model="inputValue"
    :label="label"
    v-bind="$attrs"
    v-on="$listeners"
    required
  ></v-text-field>
</template>

<script>
import { formFieldMixin } from '../mixins/formFieldMixin';
export default {
  mixins: [formFieldMixin],
  data() {
    return {
      inputValue: ''
    };
  }
};
</script>