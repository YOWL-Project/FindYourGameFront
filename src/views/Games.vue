<template>
  <div class="container-fluid">
    <!-- <div> -->
    <!-- Intégration du component GameSimple-->
    <div class="row">
      <GameSimple
        v-for="game in games.slice(offset, nbGamePerPage + offset)"
        :key="game.id"
        :game="game"
      />
    </div>
    <!-- Fin component GameSimple -->

  <!-- pagination -->
    <div class="col-12 text-center" style="display: flex; justify-content: center;">
      <p
        class="mx-2 page-item"
        @click="(currentPage = 1), (offset = 0), fetchGames(), scrollToTop()"
      >
        {{ gobackward }}
      </p>
      <p
        class="mx-2 page-item"
        @click="
          (currentPage -= 1),
            (offset = (currentPage - 1) * nbGamePerPage),
            fetchGames(),
            scrollToTop()
        "
        v-if="currentPage > 1"
      >
        Previous
      </p>
      <div
        class="pagination mb-5"
        v-for="(page, index) in getNbPages(nbGamePerPage, countGames())"
        :key="index"
        :page="page"
      >
        <div
          class="mx-2 px-2 page active"
          @click="
            (currentPage = page),
              (offset = page * nbGamePerPage),
              fetchGames(),
              scrollToTop()
          "
          v-if="currentPage == page"
        >
          {{ page }}
        </div>
        <div
          class="mx-2 px-2 page"
          @click="
            (currentPage = page),
              (offset = page * nbGamePerPage),
              fetchGames(),
              scrollToTop()
          "
          v-else-if="windowWidth > 700"
        >
          {{ page }}
        </div>
        <div
          class="mx-2 px-2 page"
          @click="
            (currentPage = page),
              (offset = page * nbGamePerPage),
              fetchGames(),
              scrollToTop()
          "
          v-else-if="page < currentPage + 3 && page > currentPage - 3"
        >
          {{ page }}
        </div>
      </div>
      <p
        class="mx-2 page-item"
        @click="
          (currentPage += 1),
            (offset = (currentPage + 1) * nbGamePerPage),
            fetchGames(),
            scrollToTop()
        "
        v-if="currentPage < getNbPages(nbGamePerPage, countGames())"
      >
        Next
      </p>
      <p
        class="mx-2 page-item"
        @click="
          (currentPage = getNbPages(nbGamePerPage, countGames())),
            (offset = getNbPages(nbGamePerPage, countGames())),
            fetchGames(),
            scrollToTop()
        "
      >
        >>
      </p>
    </div>
    <!-- fin pagination -->
  </div>
</template>

<script>
// import state et action de l'api-freetoplay
import { mapState, mapActions } from "vuex";
// import du component GameSimple
import GameSimple from "@/components/GameSimple.vue";
// import pagination
// import SlidingPagination from "vue-sliding-pagination";

export default {
  name: "Games",
  components: {
    GameSimple,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      nbGamePerPage: 5,
      offset: 0,
      currentPage: 1,
      gobackward: "<<",
    };
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
    getNbPages: (nbGamePerPage, nbGames) => {
      return Math.ceil(nbGames / nbGamePerPage) - 1;
    },
    countGames() {
      let nbGames = 0;
      this.games.forEach((game) => {
        game;
        nbGames++;
      });
      return nbGames;
    },
    changePage(page) {
      this.currentPage = page;
      this.offset = page * this.nbGamePerPage;
      this.fetchGames();
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    getNbGamesPerPage() {
      if (this.windowWidth < 700) {
        this.nbGamePerPage = 5;
      } else {
        this.nbGamePerPage = 15;
      }
    },
  },
  mounted() {
    this.getNbGamesPerPage();
    this.fetchGames();
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
      this.getNbGamesPerPage();
    };
  },
};
</script>

<style scoped>
.container-fluid {
  margin-top: 4%;
}

.pagination {
  display: inline-block;
  list-style-type: none;
  color: black;
}

.page {
  background-color: white;
  color: black;
  cursor: pointer;
}

.active {
  background-color: black;
  color: white;
}

.page-item {
  cursor: pointer;
  transition: 0.25s;
}

.page-item:hover {
  text-decoration: underline;
}
</style>
