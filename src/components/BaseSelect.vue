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
export default {
  inheritAttrs: false,
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
    label: {
      type: String,
      default: ''
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

<style>
</style>