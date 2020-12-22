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
          display: true
        },
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
              size: '15'
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
        labels: ['APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR'],
        datasets: [
          {
            borderWidth: 0,
            backgroundColor: [
              '#744EC2',
              '#E044A7',
              '#4092FF',
              '#1AAB40',
              '#6B007B',
              '#118DFF',
              '#12239E',
              '#D9B300',
              '#D64550',
              '#197278',
              '#E66C37',
              '#15C6F4'
            ],
            data: [107, 110, 89, 99, 112, 120, 119, 105, 101, 100, 115, 96]
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
