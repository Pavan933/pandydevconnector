<template>
  <div class="small">
    <DoughnutChart v-if="loaded" :chartData="chartData" :options="options"></DoughnutChart>
  </div>
</template>

<script>
import DoughnutChart from '@/components/templates/graphs/DoughnutChart.vue'

export default {
  components: {
    DoughnutChart
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
      // Fetch and load datavalues here optionally
      // this.chartData = dataValues
      this.fillData()
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  },
  methods: {
    fillData() {
      this.chartData = {
        labels: ['Upcoming Holidays','Holidays Elapsed'],
        datasets: [
          {
              borderWidth: 0,
            backgroundColor: [
              '#EFB5B9',
              '#12239E',
            ],
            data: [10,5]
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
