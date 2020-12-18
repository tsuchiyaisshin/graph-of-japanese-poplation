<template>
  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ name }}</label>
</template>

<script>
export default {
  name: 'SelectBox',
  props: {
    name: {
      type: String,
      default: undefined,
    },
  },
  data: () => ({
    checked: false,
  }),
}
</script>

<style scoped></style>
