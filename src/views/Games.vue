<template>
  <div class="container">
    <div class="row">
      <!-- Intégration du component GameSimple-->
      <div class="col-12">
        <GameSimple v-for="game in games" :key="game.id" :game="game" />
      </div>
      <!-- Fin component GameSimple -->
    </div>
  </div>
</template>

<script>
// import state et action de l'api-freetoplay
import { mapState, mapActions } from "vuex";
// import du component GameSimple
import GameSimple from "@/components/GameSimple.vue";

export default {
  name: "Games",
  components: {
      GameSimple
  },
  computed: {
    ...mapState("games", {
      games: (state) => state.games,
    }),
  },
  methods: {
    ...mapActions({
      fetchGames: "games/FETCH_GAMES",
    }),
  },
  mounted() {
    this.fetchGames();
  },
};
</script>

<style scoped>

.container-fluid {
  margin-top: 4%;
}
</style>
