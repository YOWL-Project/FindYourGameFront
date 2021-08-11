<template>
  <div class="col-sm-12 col-md-4 col-ls-3">
    <div
      class="card game mb-5"
      :style="'background: url(' + game.thumbnail + ') no-repeat top/cover'"
    >
      <div class="card-body text-justify p-3 game-description-under-img">
        <div class="row">
          <div class="col-6">
            <router-link
              class="col-sm-12 col-md-4 col-ls-3"
              :to="'/game/' + game.id"
            >
              <h1>{{ game.title }}</h1>
            </router-link>
            <p class="card-text">
              <span
                class="selected"
                @click="reloadPage('none', game.genre, 'none')"
                >{{ game.genre }}</span
              >
              <span class="plus"> +</span>
              <span class="releasedate">
                Release {{ formatDate(game.release_date) }}
              </span>
            </p>
          </div>
          <div class="col-6 text-right">
            <p class="card-text">
              {{ game.platform }}
            </p>
            <div class="votes">
              <img src="../assets/positif.svg" alt="" height="20px" />
              <span class="mx-2">125 votes</span>
              <img src="../assets/negatif.svg" alt="" height="20px" />
            </div>
            <div class="favgame" v-if="authentificated">
              <img
                class="fav"
                @click="putFav(game.id)"
                v-if="favGame(game.id) == false"
                src="../assets/nonfavori.svg"
                alt="non favori"
                width="25"
                height="25"
              />
              <img
                class="fav"
                @click="unFav(game.id)"
                v-if="favGame(game.id) == true"
                src="../assets/favori.svg"
                alt="favori"
                width="25"
                height="25"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapState, mapActions } from "vuex";

export default {
  name: "GameSimple",
  props: {
    game: Object,
  },
  data() {
    return {
      GamesSaved: [],
    };
  },
  computed: {
    ...mapState("authentification", {
      user: (state) => state.user,
      authentificated: (state) => state.authentificated,
    }),
    ...mapState("userGamesSaved", {
      userGamesSaved: (state) => state.userGamesSaved,
    }),
  },
  methods: {
    formatDate: (value) => {
      if (value) {
        return moment(String(value)).format("MMMM Do YYYY");
      }
    },
    reloadPage(platform, category, sortBy) {
      console.log(platform);
      window.location = `/games/${platform}/${category}/${sortBy}`;
    },
    ...mapActions({
      fetchUserGamesSaved: "userGamesSaved/FETCH_USERGAMESSAVED",
      CreateUserGameSaved: "userGamesSaved/CREATE_GAMESAVED",
    }),
    favGame(game_id) {
      this.GamesSaved.forEach((userGameSaved) => {
          // console.log(userGameSaved.game_id);
        if (userGameSaved.game_id == game_id) {
          console.log(userGameSaved.game_id);
          return true;
        } else {
          return false;
        }
      });
    },
    putFav(game_id) {
      let infos = {
        body: {
          game_id: game_id,
          user_id: this.user.id,
        },
        headers: {
          Authorization: `Bearer ${this.user.token}`,
        },
      };
      console.log(infos);
      this.CreateUserGameSaved(infos);
    },
    unFav(game_id) {
      game_id;
      return false;
    },
  },
  created() {
    this.fetchUserGamesSaved(this.user.id);
    this.GamesSaved = this.userGamesSaved;
  },
};
</script>

<style scoped lang="scss">
.game {
  min-height: 30rem;
  position: relative;
  transition: 0.25s;
  border: 1px solid transparent;
  color: white;
  border-radius: 24px;
}

.game:hover {
  border: 1px solid white;
}

.game-description-under-img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.7);
  border-radius: 24px;
}

h1 {
  color: white;
  text-decoration: none;
  font-size: 1.5em;
}

h1:hover {
  text-decoration: none;
  text-decoration: underline;
  text-decoration: white;
  font-size: 1.8em;
}

.selected {
  cursor: pointer;
  transition: 0.25s;
}

.selected:hover {
  text-decoration: underline;
}
</style>
