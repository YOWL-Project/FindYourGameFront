<template>
  <div class="container">
    <div class="row">
      <h2>VOTE FOR THIS GAME !</h2>
    </div>
    <div class="row">
      <div class="col-6" align="center">
        <img
          src="../assets/positif.svg"
          width="65"
          height="65"
          class="positif"
        />
        <img
          src="../assets/negatif.svg"
          width="65"
          height="65"
          class="negatif"
        />
      </div>
      <div class="col-6 d-flex" align="left">
        <img
          src="../assets/negatif.svg"
          width="45"
          height="45"
          class="votes"
          v-if="getNbVotesGames(game.id).tendance == '-'"
        />
        <img
          src="../assets/positif.svg"
          width="45"
          height="45"
          class="votes"
          v-if="getNbVotesGames(game.id).tendance == '+'"
        />
        <p class="nb-votes">{{ getNbVotesGames(game.id).nb_votes }} votes</p>
      </div>
    </div>
    <div
      class="row"
      id="lastvotes"
      v-if="getNbVotesGames(game.id).nb_votes > 0"
    >
      <h2>LAST VOTES</h2>
      <div class="row" v-for="votesGame in votesGames" :key="votesGame.id" :votesGame="votesGame">
        <div class="col-12" v-if="votesGame.game_id == game.id">
        <img
          src="../assets/negatif.svg"
          width="45"
          height="45"
          class="votes"
          v-if="votesGame.vote == -1"
        />
        <img
          src="../assets/positif.svg"
          width="45"
          height="45"
          class="votes"
          v-if="votesGame.vote == 1"
        />

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "GameVote",
  //props -> ID du jeu pour lier au vote
  props: {
    game: Object,
  },

  data: () => ({
    readMore: false,
  }),
  computed: {
    ...mapState("votesGames", {
      votesGames: (state) => state.votesGames,
    }),
  },
  methods: {
    ...mapActions({
      fetchVotesGames: "votesGames/FETCH_VOTESGAMES",
    }),
    getNbVotesGames(game_id) {
      let nb_votes = 0;
      let total = 0;
      let tendance = "";
      // console.log(game_id)
      this.votesGames.forEach((votesGame) => {
        if (votesGame.game_id == game_id) {
          nb_votes += 1;
          total += votesGame.vote;
        }
      });
      if (total < 0) {
        tendance += "-";
      } else {
        tendance += "+";
      }
      let result = { nb_votes: nb_votes, tendance: tendance };
      return result;
    },
  },
  mounted() {
    this.fetchVotesGames();
  },
};
</script>

<style scoped>
body {
  margin: 2%;
}

h2 {
  font-size: 1.5em;
  text-align: left;
  padding-bottom: 4%;
  padding-top: 4%;
}

.positif {
  margin: 3%;
}

.negatif {
  margin: 3%;
}

.votes {
  margin: 2%;
  align-self: center;
}

.nb-votes {
  font-size: 1.4em;
  align-self: center;
}

#lastvotes {
  margin-top: 3%;
}
</style>