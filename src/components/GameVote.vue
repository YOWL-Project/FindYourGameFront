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
        <img src="../assets/positif.svg" width="45" height="45" class="votes" />
        <p class="nb-votes">xxxx votes</p>
      </div>
    </div>
    <div class="row" id="lastvotes">
      <h2>LAST VOTES</h2>
      <div class="col-4"></div>
      <div class="col-4"></div>
      <div class="col-4"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameVote",
  //props -> ID du jeu pour lier au vote
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
    margin-top:3%;
}
</style>