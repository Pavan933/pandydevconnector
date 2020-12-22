<template>
  <div class="small">
    <LineChart v-if="loaded" :chartData="chartData" :options="options"></LineChart>
  </div>
</template>

<script>
import LineChart from '@/components/templates/graphs/LineChart.vue'

export default {
  components: {
    LineChart
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
              scaleLabel: {
                display: true,
                labelString: 'Percentage(%) vs Count'
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
            color: 'black',
            align:'start',
            anchor:'center',
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
            label: '% Attendance in classes',
            data: [86, 90, 78, 25, 98, 40, 55, 66, 89, 50, 60, 20],
            fill: false,
            pointBackgroundColor: '#12239E',
            borderColor: '#12239E',
            pointRadius: 5
          },
          {
            label: 'Classes Delivered',
            data: [120, 119, 105, 110, 96, 59, 99, 100, 115, 101, 112, 107],
            fill: false,
            pointBackgroundColor: '#EB895F',
            borderColor: '#EB895F',
            pointRadius: 4
          }
        ]
      }
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
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
