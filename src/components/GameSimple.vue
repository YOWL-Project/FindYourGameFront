<template>
  <div
    class="card game mb-5"
    :style="'background: url(' + game.thumbnail + ') no-repeat top/cover'"
  >
    <div class="card-body text">
      <h1>{{ game.title }}</h1>
      <p class="card-text">
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </p>
      <p class="card-text">
        <small class="text-muted">Last updated 3 mins ago</small>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameSimple",
  props: {
    game: Object,
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
