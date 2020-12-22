<template>
  <div class="small">
    <BarChart v-if="loaded" :chartData="chartData" :options="options"></BarChart>
  </div>
</template>

<script>
import BarChart from '@/components/templates/graphs/BarChart.vue'
import ChartJsPluginDataLabels from 'chartjs-plugin-datalabels'

export default {
  components: {
    BarChart,
    ChartJsPluginDataLabels
  },
  data() {
    return {
      loaded: false,
      chartData: null,
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              },
              stacked: true,
              scaleLabel: {
                display: true,
                labelString: 'Days'
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              },
              stacked: true,
              scaleLabel: {
                display: true,
                labelString: 'Month'
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
              size: '8'
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
        labels: [
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
          'January',
          'February',
          'March'
        ],
        datasets: [
          {
            label: 'Present',
            backgroundColor: '#EB895F',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [21, 21, 21, 20, 20, 20, 19, 18, 17, 17, 17, 16]
          },
          {
            label: 'Absent',
            backgroundColor: '#AC95DA',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [1, 1, 1, 2, 2, 1, 3, 4, 5, 5, 5, 6]
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
