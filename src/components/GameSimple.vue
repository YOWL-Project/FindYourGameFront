<template>
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
                release {{ formatDate(game.release_date) }}
            </span>
          </p>

        </div>
        <div class="col-6 text-right">
          <p class="card-text">
            {{ game.platform }}
          </p>
          <p class="card-text">
            <!-- <img src="../assets/positif.svg" alt=""> -->
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "GameSimple",
  props: {
    game: Object,
  },
  computed: {
  },
  methods: {
      formatDate: (value) => {
            if (value) {
                return moment(String(value)).format('MMMM Do YYYY')
            };
      },
  },
};
</script>

<style scoped lang="scss">
.game {
  min-height: 30rem;
  position: relative;
}

.card-body {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgb(0, 0, 0, 0.7);
}
</style>
