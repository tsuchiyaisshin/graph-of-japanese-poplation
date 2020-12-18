<template>
  <section class="card">
    <header class="header-1">
      <div class="header-inner">
        <h3>日本人口推移</h3>
      </div>
    </header>
    <div class="card-content">
      <h4 class="text-left">都道府県</h4>
      <div class="container">
        <select-box
          v-for="prefecture in prefectures"
          :name="prefecture.prefName"
          :code="prefecture.prefCode"
          @add="changeSeries"
        ></select-box>
      </div>
      <PopulationLineChart
        v-if="showChart"
        :series="series"
      ></PopulationLineChart>
    </div>
  </section>
</template>

<script>
import { api } from '../../api/api'
import PopulationLineChart from '../atoms/PopulationLineChart'
import SelectBox from '../atoms/SelectBox'

export default {
  name: 'GraphPage',
  components: { SelectBox, PopulationLineChart },
  data: () => ({
    prefectures: undefined,
    series: [],
    showChart: true,
  }),
  async mounted() {
    const result = await api.getPrefectures()
    this.prefectures = result
  },
  methods: {
    async changeSeries(...args) {
      if (args[1]) {
        await this.series.push(args[0])
      } else {
        this.series = this.series.filter(series => series.name !== args[0])
      }
      //TODO: 強制レンダリンを修正する。
      /*
      強制的レンダリングがない場合、graphの描画の反映がされない。
      試したこと
      ・watchで監視 ->  seriesを監視直接変更したが、変化なし
      ・storeで管理 ->　storeを更新したが、変化なし
      ・apex-chartのupdateSeries -> errorが発生、vue3.0に対応していない？
      妥協策として、ifを使った強制レンダリングをしている。
       */
      this.showChart = false
      this.$nextTick(() => (this.showChart = true))
    },
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
