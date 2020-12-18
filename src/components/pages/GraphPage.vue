<template>
  <section class="card">
    <header class="header-1">
      <div class="header-inner">
        <h3>Title</h3>
      </div>
    </header>
    <div class="card-content">
      <h4 class="text-left">都道府県</h4>
      <div class="container">
        <select-box
          v-for="prefecture in prefectures"
          :name="prefecture.prefName"
          :code="prefecture.prefCode"
        ></select-box>
      </div>
      <PopulationLineChart></PopulationLineChart>
    </div>
  </section>
</template>

<script>
import { api } from '../../api/api'
import PopulationLineChart from '../atoms/PopulationLineChart'
import SelectBox from '../molcules/SelectBox'

export default {
  name: 'GraphPage',
  components: { SelectBox, PopulationLineChart },
  data: () => ({
    prefectures: undefined,
  }),
  async mounted() {
    const result = await api.getPrefectures()
    this.prefectures = result
  },
}
</script>

<style scoped>
.header-1 {
  box-sizing: border-box;
  width: 100%;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  padding: 0 2em;
}
</style>
