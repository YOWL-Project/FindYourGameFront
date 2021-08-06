<template>
  <router-link :to="'/game/' + game.id">
    <div
      class="card game mb-5"
      :style="'background: url(' + game.thumbnail + ') no-repeat top/cover'"
    >
      <div class="card-body text-justify p-3">
        <div class="row">
          <div class="col-6">
            <h1>{{ game.title }}</h1>
            <p class="card-text">
              {{ game.genre }}
              <span class="plus">+</span>
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
            <!-- <div class="row">
            <div class="col-12">
              <img src="../assets/positif.svg" alt="" height="20px" />
            </div>
            <div class="col-12">
            <span>125 votes</span>
            </div>
            <div class="col-12">
            <img src="../assets/negatif.svg" alt="" height="20px" />
            </div>
          </div> -->
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import moment from "moment";

export default {
  name: "GameSimple",
  props: {
    game: Object,
  },
  computed: {},
  methods: {
    formatDate: (value) => {
      if (value) {
        return moment(String(value)).format("MMMM Do YYYY");
      }
    },
  },
};
</script>

<style scoped lang="scss">
.game {
  min-height: 30rem;
  position: relative;
  cursor: pointer;
  transition: 0.25s;
  border: 1px solid transparent;
  color:white;
}

.game:hover {
  border: 1px solid white;
}

.card-body {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.7);
}
</style>
