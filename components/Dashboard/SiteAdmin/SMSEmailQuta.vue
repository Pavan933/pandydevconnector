<template>
  <div class="small">
    <BarChart v-if="loaded" :chartData="chartData" :options="options"></BarChart>
  </div>
</template>

<script>
import BarChart from '@/components/templates/graphs/HorizontalBarChart.vue'

export default {
  components: {
    BarChart
  },
  data() {
    return {
      loaded: false,
      chartData: null,
      options: {
        scales: {
          yAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              },
              scaleLabel: {
                display: true,
                labelString: 'Channels'
              }
            }
          ],
          xAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true,
                callback: function(value, index, values) {
                                return value + 'K';
                            }
              },
              gridLines: {
                display: false
              },
              scaleLabel: {
                display: true,
                labelString: 'Quota'
              }
            }
          ]
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
              size: '10'
            },
            formatter: function(value, context) {
              return Math.round(value) + 'K'
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
        labels: [
          'SMS',
          'Email'
        ],
        datasets: [
          {
            label: 'Configured Quota',
            backgroundColor: '#118DFF',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [90000,50000]
          },
           {
            label: 'Avialable Quota',
            backgroundColor: '#12239E',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [2500,4300]
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
