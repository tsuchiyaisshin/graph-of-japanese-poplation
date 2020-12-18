<template>
  <div id="chart">
    <apexchart
      ref="chart"
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
export default {
  name: 'PopulationLineChart',
  props: {
    series: {
      type: Array,
      default: [],
    },
  },
  data: () => ({
    chartOptions: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: [5, 7, 5],
        curve: 'straight',
        dashArray: [0, 8, 5],
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6,
        },
      },
      xaxis: {
        categories: [
          1960,
          1965,
          1970,
          1975,
          1980,
          1985,
          1990,
          1995,
          2000,
          2005,
          2010,
          2015,
          2020,
          2025,
          2030,
          2035,
          2040,
          2045,
        ],
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function(val) {
                return val + ' (mins)'
              },
            },
          },
          {
            title: {
              formatter: function(val) {
                return val + ' per session'
              },
            },
          },
          {
            title: {
              formatter: function(val) {
                return val
              },
            },
          },
        ],
      },
      grid: {
        borderColor: '#f1f1f1',
      },
    },
  }),
}
</script>

<style scoped></style>
