<template>
  <div class="small">
    <BarChart v-if="loaded" :chartData="chartData" :options="options" height="250px"></BarChart>
  </div>
</template>

<script>
import BarChart from '@/components/templates/graphs/BarChart.vue'

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
                labelString: 'Performance'
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
            usePointStyle: true,
            paddingbottom: 50
          }
        },
        plugins: {
          datalabels: {
            color: 'white',
            font: {
              size: '10'
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
        labels: ['May', 'April'],
        datasets: [
          {
            label: 'Art and Design',
            backgroundColor: '#118DFF',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [8, 4]
          },
          {
            label: 'Business Studies',
            backgroundColor: '#12239E',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [4, 8]
          },
          {
            label: 'English',
            backgroundColor: '#E66C37',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [9, 10]
          },
          {
            label: 'Geography',
            backgroundColor: '#6B007B',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [6, 5]
          },
          {
            label: 'History',
            backgroundColor: '#E044A7',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [10, 12]
          },
          {
            label: 'Computing and ICT',
            backgroundColor: '#D9B300',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [5, 8]
          },
          {
            label: 'Music',
            backgroundColor: '#118DFF',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [2, 4]
          },
          {
            label: 'Mathematics',
            backgroundColor: '#D64550',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [6, 7]
          },
          {
            label: 'Science',
            backgroundColor: '#197278',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [9, 6]
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
