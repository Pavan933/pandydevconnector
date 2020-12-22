<template>
  <div class="small">
    <LineChart v-if="loaded" :chartData="chartData" :options="options" :height='200'></LineChart>
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
                labelString: 'Classes'
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
                labelString: 'Teacher'
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
            align:'end',
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
        labels: ['Robert','Mathew','George','Govind','Rahul','Amia','Basheer','Aysha','David','Alan','Zack','John'],
        datasets: [{
            label: 'Delivered today',
            data: [6,6,6,6,6,5,5,4,4,4,3,1],
            fill: false,
            pointBackgroundColor:['#4AA8FF','#00ff11','#f0a787','#a666b0','#ec8fca','#f0e199','#de6a73','#ad5129','#b3b3b3','#118dff','#9071ce','#f0e199'],
            borderColor:'#118dff',
            pointRadius:5
        },
        {
            label: 'Delivered Till-date',
            data: [1000,690,900,1016,1100,1001,1200,500,800,1210,1221,764],
            fill: true,
            pointBackgroundColor:['#4AA8FF','#00ff11','#f0a787','#a666b0','#ec8fca','#f0e199','#de6a73','#ad5129','#b3b3b3','#118dff','#9071ce','#f0e199'],
            borderColor:'#12239e',
            backgroundColor:'rgba(160, 167, 216, 0.7)',
            pointRadius:5
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
