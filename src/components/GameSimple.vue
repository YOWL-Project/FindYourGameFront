<template>
  <div class="game">
      <h1>{{ game.title }}</h1>
    
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
</style>
