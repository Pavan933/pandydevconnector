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
         labels: ['9th A','9th B','9th C','10th A','10th B','11th A','11th B','12th A','12th B'],
        datasets: [
          {
            borderWidth: 0,
            backgroundColor: [
              '#118DFF',
              '#12239E',
              '#EB875C',
              '#6B007B',
              '#E044A7',
              '#744EC2',
              '#D9B300',
              '#D64550',
              '#197278'
            ],
            data: [40, 40, 40, 39, 38, 34, 33, 32, 32]
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
