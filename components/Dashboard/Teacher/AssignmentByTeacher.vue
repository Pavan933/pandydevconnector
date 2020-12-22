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
                labelString: 'No of Assignments'
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
         labels: ['January','February','March','April','May','June','July','August','September','October','November','December'],
        datasets: [{
            label: 'Assessment Created',
            data: [17,14,14,13,13,12,11,10,9,3,0,0],
            borderDash: [10,5],
            fill: false,
            pointBackgroundColor:'#118DFF',
            borderColor:'#118DFF',
            pointRadius:5
        },
        {
            label: 'Assessment Offered',
            data: [15,12,6,11,15,10,8,8,3,0,0],
            borderDash: [10,5],
            fill: false,
            pointBackgroundColor:'#12239E',
            borderColor:'#12239E',
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
