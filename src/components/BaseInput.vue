<template>
  <v-text-field
    v-if="label"
    v-model="inputValue"
    :label="label"
    v-bind="$attrs"
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
  },
  methods: {},
  updated() {
    this.$emit('input', this.inputValue);
  }
};
</script>

<style>
</style>