<template>
  <div class="container">
    <div class="row">
      <!-- Intégration du component GameSimple-->
      <div class="col-12">
        <GameSimple
          v-for="game in games.slice(offset, nbGamePerPage)"
          :key="game.id"
          :game="game"
          v-bind:nbGames="(nbGames += 1)"
        />
      </div>
      <!-- Fin component GameSimple -->
      <sliding-pagination
        :current="currentPage"
        :total="getNbPages(nbGamePerPage, countGames())"
        @page-change="pageChangeHandler"
      ></sliding-pagination>
      <!-- <div
        class="pagination mx-2 mb-5"
        v-for="(page, index) in getNbPages(nbGamePerPage, nbGames)"
        :key="index"
        :page="page"
      >
        <div class="mx-2 p-2 page" :to="'/games/' + page">
          {{ page }}
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
// import state et action de l'api-freetoplay
import { mapState, mapActions } from "vuex";
// import du component GameSimple
import GameSimple from "@/components/GameSimple.vue";
// import pagination
import SlidingPagination from "vue-sliding-pagination";

export default {
  name: "Games",
  components: {
    GameSimple,
    SlidingPagination,
  },
  data() {
    return {
      nbGamePerPage: 5,
      offset: 0,
      currentPage: 1,
    };
  },
  //   watch: {
  //     pages: function (nbGamePerPage, nbGames) {
  //       this.pages = nbGames / nbGamePerPage;
  //     }
  //   },
  computed: {
    ...mapState("games", {
      games: (state) => state.games,
    }),
  },
  methods: {
    ...mapActions({
      fetchGames: "games/FETCH_GAMES",
    }),
    getNbPages: (nbGamePerPage, nbGames) => {
      return nbGames / nbGamePerPage;
    },
    pageChangeHandler(selectedPage) {
      this.currentPage = selectedPage;
    },
    // countGames() {
    //     let nbGames = 0;
    //     this.games.forEach(game => {
    //         nbGames++
    //     });
    //     return nbGames;
    // }
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

.pagination {
  display: inline-block;
}

.page {
  background-color: white;
  color: black;
  cursor: pointer;
}
</style>
