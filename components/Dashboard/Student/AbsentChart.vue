<template>
  <div class="small">
    <BarChart v-if="loaded" :chartData="chartData" :options="options" height="250px"></BarChart>
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
                labelString: 'Periods Attended'
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
        labels: ['January','February','March','April','May','June','July','August','September','October','November','December'],
        datasets: [
          {
            label: 'Sum of periods attended',
            backgroundColor: '#118DFF',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [110,107,100,45,89,75,65,99,86,75,100,35]
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
