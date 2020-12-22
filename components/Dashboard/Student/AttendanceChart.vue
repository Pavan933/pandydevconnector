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
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              },
              scaleLabel: {
                display: true,
                labelString: 'Days'
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
        maintainAspectRatio: true,
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
            label: 'Attendance(in days)',
            backgroundColor: '#118DFF',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [20,17,10,15,18,20,11,8,11,12,20,13]
          },
          {
            label: 'Absent(in days)',
            backgroundColor: '#E66C37',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [5,10,2,5,5,6,8,9,10,2,3,5]
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
