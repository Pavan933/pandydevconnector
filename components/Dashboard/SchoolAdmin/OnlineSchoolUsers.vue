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
          display: false,
          position: 'top',
          align: 'start',
          labels: {
            usePointStyle: true
          }
        },
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              },
              scaleLabel: {
                display: true,
                labelString: 'Users'
              }
            }
          ]
        },
         tooltips: {
          enabled: false
        },
        plugins: {
          datalabels: {
            color: 'black',
            font: {
              size: '20'
            },
            formatter: function(value, context) {
              return Math.round(value)
            }
          }
        },
        animation: {
          duration: 500,
          onProgress: function(animation) {
            var chartContext = this.chart.canvas.getContext('2d', { alpha: false })
            chartContext.fillStyle = '#4a4a4a'
            chartContext.font = '100 36px sans-serif'
            chartContext.textBaseline = 'middle'
            chartContext.fillText(
              Math.round(this.data.datasets[0].data[0]),
              this.chart.width / 2 - 30,
              this.chart.height / 2 + 50,
              200
            )
          },
          onComplete: function(animation) {
            var chartContext = this.chart.canvas.getContext('2d', { alpha: false })
            chartContext.fillStyle = '#4a4a4a'
            chartContext.font = '100 36px sans-serif'
            chartContext.textBaseline = 'middle'
            chartContext.fillText(
              Math.round(this.data.datasets[0].data[0]),
              this.chart.width / 2 - 30,
              this.chart.height / 2 + 50,
              200
            )
          }
        },
        responsive: true,
        maintainAspectRatio: true,
        circumference: 1 * Math.PI,
        rotation: 1 * Math.PI,
        cutoutPercentage: 50
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
      this.chartData = {/* 
        labels: ['Online School Users'], */
        datasets: [
          {/* 
            label: 'Online School Users', */
            backgroundColor: ['#00FF11', '#efefef'],
            borderColor: '#fff',
            data: [80, 20]
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
