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
export default {
  inheritAttrs: false,
  data() {
    return {
      inputValue: ''
    };
  },
  props: {
    label: {
      type: String,
      default: ''
    }
  }
};
</script>

<style>
</style>