<template>
  <div class="small">
    <BarChart v-if="loaded" :chartData="chartData" :options="options" :height='200'></BarChart>
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
                labelString: 'Total online Classes today'
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
                labelString: 'Class'
              }
            }
          ]
        },
        legend: {
          display: false
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
          labels: ['9th A','9th B','9th C','10th A','10th B','11th A','11th B','12th A','12th B'],
        datasets: [
          {
            label: false,
            backgroundColor: ['#118DFF','#118DFF','#414FB1','414FB1','#F5C4AF','#F5C4AF','#E8D166','#E8D166','#F5C4AF'],
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [6,6,6,6,6,6,5,5,2]
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
