<template>
  <div>
    <input type="checkbox" v-model="checked" @click="getPopulation" />
    <label>{{ name }}</label>
  </div>
</template>

<script>
import { api } from '../../api/api'

export default {
  name: 'SelectBox',
  props: {
    name: {
      type: String,
      default: undefined,
    },
    code: {
      type: Number,
      default: undefined,
    },
  },
  data: () => ({
    checked: false,
    populationSeries: {
      name: '',
      data: [],
    },
  }),
  methods: {
    async getPopulation() {
      if (!this.checked) {
        const result = await api.getPopulation(this.code)
        this.populationSeries.name = this.name
        result.forEach(item => {
          this.populationSeries.data.push(item.value)
        })
        this.$emit('add', this.populationSeries)
      }
    },
  },
}
</script>

<style scoped></style>
