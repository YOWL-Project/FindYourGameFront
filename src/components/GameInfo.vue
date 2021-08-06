<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Game Description -->
      <h1> Game name : {{ game.title }} </h1>
    </div>
    <div class="row">
      <h2>DESCRIPTION</h2>
      <p class="description ">
        {{ game.description}}
      </p>
      <!-- Game Details -->
      <div class="col" id="details">
      <p><span class="plus">+</span> Genre : Shooter</p>
      <p><span class="plus">+</span> Platform : Windows</p>
      <p><span class="plus">+</span> Released : March 10, 2020</p>
      </div>
      <div class="col" id="details">
      <p><span class="plus">+</span> (system details) </p>
      <p><span class="plus">+</span> (system details) </p>
      <p><span class="plus">+</span> (system details) </p>
      </div>
    </div>
    <!-- Importation du component GameVote pour la partie vote du jeu -->
    <GameVote />
  </div>
</template>

<script>
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
    console.log(this.game),
    this.game
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
