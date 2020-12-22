<template>
  <div class="small">
    <PieChart v-if="loaded" :chartData="chartData" :options="options"></PieChart>
  </div>
</template>

<script>
import PieChart from '@/components/templates/graphs/PieChart.vue'

export default {
  components: {
    PieChart
  },
  data() {
    return {
      loaded: false,
      chartData: null,
      options: {
        legend: {
          display: true,
          position: 'top',
          align: 'start',
          labels: {
            usePointStyle: true
          }
        },
         plugins: {
          datalabels: {
            color: 'white',
            font: {
              size: '20'
            },
            formatter: function(value, context) {
              return Math.round(value)
            }
          }
        },
        responsive: true,
        maintainAspectRatio: true
      }
    }
  },
  mounted() {
    this.loaded = false
    try {
      this.fillData()
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    fillData() {
      this.chartData = {
         labels: ['Total Active Platform Users','Total Configured Platform Users'],
        datasets: [
          {
            borderWidth: 0,
            backgroundColor: [
              '#118DFF',
              '#12239E',
            ],
            data: [103678, 240000]
          }
        ]
      }
    }
  }
}
</script>

<style>
.small {
  max-width: 600px;
  margin: 15px auto;
}
</style>
