<script>
import { Line } from 'vue-chartjs'
import { mapState, mapActions } from "vuex";

export default {
  extends: Line,
  data() {
    return {
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
  computed: {
    ...mapState("authentification", {
      token: state => state.user.token,
    }),
    ...mapState("dashboard", {
      visits: state => state.visits,
    })
  },
  methods: {
    ...mapActions({
      fetchvisits: "dashboard/FETCH_VISITS",
    }),
  },
  mounted() {
    this.fetchvisits(this.token);
    let chartData = {
        labels: this.visits.labels,
        datasets: [
          {
            label: 'Line Chart',
            data: this.visits.data,
            fill: false,
            borderColor: '#2554FF',
            backgroundColor: '#2554FF',
            borderWidth: 1,
          },
        ],
      };
    this.renderChart(chartData, this.options);
  },
}
</script>
