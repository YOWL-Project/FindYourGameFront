<template>
  <div class="container-fluid">
    <div class="row game">
      <div class="col mb-3" :style="'background: url(' + game.thumbnail + ') no-repeat center/cover'">
        <div class="card-body game-description-under-img px-3 pt-3">
          <h1>{{ game.title }}</h1>
        </div>
      </div>
    </div>
    <div class="row">
      <h2>DESCRIPTION</h2>
      <p class="description">
        {{ game.description }}
      </p>
      <!-- Game Details -->
      <div class="col" id="details">
        <p><span class="plus">+</span> Genre : {{ game.genre }}</p>
        <p><span class="plus">+</span> Platform : {{ game.platform }}</p>
        <p><span class="plus">+</span> Released : {{ formatDate(game.release_date) }} </p>
      </div>
      <div class="col" id="details">
        <p><span class="plus">+</span> Publisher : {{ game.publisher }}</p>
        <p><span class="plus">+</span> Developer : {{ game.developer }}</p>
        <p><span class="plus">+</span> Status : {{ game.status }}</p>
      </div>
    </div>
    <!-- Importation du component GameVote pour la partie vote du jeu -->
    <GameVote />
  </div>
</template>

<script>
import moment from "moment";
import GameVote from "@/components/GameVote.vue";

export default {
  name: "GameInfo",
  components: {
    GameVote,
  },
  props: {
    game: Object,
  },
  mounted() {
    console.log(this.game);
  },
  methods: {
    formatDate: (value) => {
      if (value) {
        return moment(String(value)).format("MMMM Do YYYY");
      }
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 1.8em;
  text-align: left;
  padding-bottom: 2%;
}

h2 {
  font-size: 1.5em;
  text-align: left;
  padding-bottom: 2%;
}

.plus {
  font-size: 1.3em;
  font-weight: 700;
  background: linear-gradient(0.25turn, #00ffff, #ff005c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.game {
  min-height: 15rem;
  position: relative;
  cursor: pointer;
  transition: 0.25s;
  border: 1px solid transparent;
  color:white;
}


.game-description-under-img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.7);
}

.description {
  font-size: 0.9em;
  padding-left: 2.5%;
  padding-right: 10%;
}

#details {
  padding: 20px;
}

.row {
  margin: 2%;
  text-align: left;
}
</style>
