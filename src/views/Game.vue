<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Intégration des components GameInfo (et GameVote)-->
      <div class="col-md">
        <GameInfo />
      </div>
      <!-- Intégration du component de topics et commentaires-->
      <div class="col-md">
        <GameComments />
      </div>
    </div>
  </div>
</template>

<script>
import GameInfo from "@/components/GameInfo.vue";
import GameComments from "@/components/GameComments.vue";

export default {
  name: "Game",

  components: {
    GameInfo,
    GameComments,
  },
};
</script>

<style scoped>
.container-fluid {
  margin-top: 4%;
}
</style>
