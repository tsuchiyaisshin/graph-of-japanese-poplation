<template>
  <section class="card">
    <header class="header-1">
      <div class="header-inner">
        <h3>Title</h3>
      </div>
    </header>
    <div class="card-content">
      <h4 style="text-align: left">都道府県</h4>
      <select-box
        v-for="prefecture in prefectures"
        :name="prefecture.prefName"
      ></select-box>
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
    console.log(this.prefectures)
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

.logo-img {
  width: 70px;
}
</style>
