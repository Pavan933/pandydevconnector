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
                labelString: 'Classes'
              }
            }
          ],
          xAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: false
              },
              scaleLabel: {
                display: true,
                labelString: 'Percentage(%)'
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
              return Math.round(value) + '%'
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
        labels: ['9th A', '9th B', '9th C', '10th A', '10th B', '11th A', '11th B', '12th A', '12th B'],
        datasets: [
          {
            label: '% completed by Student',
            backgroundColor: '#A38600',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [100, 99, 95, 90, 90, 85, 80, 50, 55, 45, 86, 74]
          },
          {
            label: 'Assessment offered to Students',
            backgroundColor: '#573B92',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [12, 11, 5, 10, 8, 6, 1, 12, 10, 7, 8, 2]
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
