<script>
import { Pie } from "vue-chartjs";
import { mapState, mapActions } from "vuex";
import freetoplay from "@/common/api-freetoplay";

export default {
  extends: Pie,
  data() {
    return {
      chartData: {
      labels: ["Brawlhalla", "Steel Legions", "Survivor Legacy", "Allods Online", "Phantasy Star Online 2 New Genesis"],
      datasets: [
        {
          borderWidth: 1,
          borderColor: ["rgba(255,99,132,1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "#EC7394"],
          backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "#F9ACC1"],
          data: ["2", "2", "2", "2", "1"],
        },
      ],
    },
      options: {
        legend: {
          display: true,
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  computed: {
    ...mapState("authentification", {
      token: (state) => state.user.token,
    }),
    ...mapState("dashboard", {
      gamesPopularity: (state) => state.gamesPopularity,
    }),
    ...mapState("games", {
      game: (state) => state.game,
    }),
  },
  methods: {
    ...mapActions({
      fetchGamesPopularity: "dashboard/FETCH_GAMES_POPULARITY",
      fetchGame: "games/GET_GAME",
    }),
    async FETCH_GAME(id) {
      const { data } = await freetoplay
        .get("/game/", {
          params: {
            id: id,
          },
        })
        .catch((error) => console.log(JSON.stringify(error.message)));
      return data.title;
    },
  },
  async mounted() {
    let labels = [];
    let data = [];
    this.fetchGamesPopularity(this.token);
    this.gamesPopularity.sum.forEach(async (game) => {
      let title = await this.FETCH_GAME(game.game_id);
      labels.push(title);
      data.push(parseInt(game.sum, 10));
    });
    let chartData = {
      labels: labels,
      datasets: [
        {
          borderWidth: 1,
          borderColor: ["rgba(255,99,132,1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "#EC7394"],
          backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "#F9ACC1"],
          data: data,
        },
      ],
    };
    console.log(chartData.datasets[0].data);
    console.log(chartData.labels);
    this.renderChart(this.chartData, this.options);
  },
};
</script>
