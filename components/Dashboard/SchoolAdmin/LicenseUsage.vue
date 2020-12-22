<template>
  <div class="small">
    <BarChart v-if="loaded" :chartData="chartData" :options="options" :height="200"></BarChart>
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
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              },
              scaleLabel: {
                display: true,
                labelString: 'Month'
              }
            }
          ],
          xAxes: [
            { ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              },
              scaleLabel: {
                display: true,
                labelString: 'Total Licenses used by School'
              }
            }
          ]
        },
        legend: {
          display: false,
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
            backgroundColor: ['#E6E6E6','#999999','#A0D1FF','#A0A7D8','#F5C4AF','#C499CA','#F0E199','#EFB5B9','#9071CE','#118DFF','#666666','#A1343C'],
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [1000,1000,1000,980,980,950,800,750,650,550,150,100]
          },
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
