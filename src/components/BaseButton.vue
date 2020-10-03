<template>
  <v-btn v-on="$listeners" large elevation="4" :color="color" v-bind="$attrs">
    <slot />
  </v-btn>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: ''
    }
  }
};
</script>

<style>
</style>