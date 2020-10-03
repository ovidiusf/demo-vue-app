<template>
  <v-select
    v-model="inputValue"
    :items="options"
    :rules="[v => !!v || 'Item is required']"
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
    hint: {
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