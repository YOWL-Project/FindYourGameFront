<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data() {
    return {
      chartData: {
        labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        datasets: [
          {
            label: 'Line Chart',
            data: [15, 16, 16, 14, 15, 16,17],
            fill: false,
            borderColor: '#2554FF',
            backgroundColor: '#2554FF',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
}
</script>
