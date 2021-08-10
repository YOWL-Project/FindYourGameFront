<template>
  <div class="container">
    <div class="row">
      <h1>TOPIC TITLE</h1>
      <span class="fav"
        ><img
          @click="putFav"
          v-if="!favTopic"
          src="../assets/nonfavori.svg"
          alt="non favori"
          width="35"
          height="35"
      /></span>
      <span class="fav"
        ><img
          @click="unFav"
          v-if="favTopic"
          src="../assets/favori.svg"
          alt="favori"
          width="35"
          height="35"
      /></span>
    </div>
    <h2>Username</h2>
    <h3>posted on 02/03/2021</h3>
    <div class="row my-4">
      <p>Tags :</p>
      <span class="tags">LIST OF TAGS</span>
    </div>

    <div class="row" id="yourpost">
      <textarea
        class="form-control"
        id="comment"
        rows="4"
        placeholder="Your comment here"
      />
      <div class="form-check">
        <input type="checkbox" name="tag" class="btn-tag" id="tag-a" />
        <label for="tag-a">NEWBIE</label>
        <input type="checkbox" name="tag" class="btn-tag" id="tag-b" />
        <label for="tag-b">HELP</label>
        <input type="checkbox" name="tag" class="btn-tag" id="tag-c" />
        <label for="tag-c">CHEATS AND TIPS</label>
      </div>
    </div>

    <div class="row">
      <button class="postit">POST IT !</button>
    </div>

    <div class="container">
      <div class="row" id="comments">
        <div class="col-7" align="left">USERNAME on topic subject</div>
        <div class="col-5" align="right">Date and hour</div>
        <div class="col-12"><p>Comment</p></div>
        <div class="col-4">
          <img src="../assets/positif.svg" width="25" height="25" /> XX
          "usefull" votes
        </div>
        <div class="col-4">
          <img src="../assets/negatif.svg" width="25" height="25" /> XX
          "useless" votes
        </div>
        <div class="col-4">
          <img src="../assets/lol.svg" width="25" height="25" /> XX "Lol !"
          votes
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Topic",

  data: () => ({
    favTopic: false,
  }),

  methods: {
    putFav() {
      this.favTopic = true;
    },
    unFav() {
      this.favTopic = false;
    },
  },
};
</script>

<style scoped>
.fav {
  padding-left: 20px;
  padding-top: 5px;
}

img {
  cursor: pointer;
}

h2 {
  font-size: 1.4em;
}

h3 {
  font-size: 1.2em;
}

.tags {
  padding-left: 20px;
}

/* CSS de la partie post de commentaires */

#yourpost {
  width: 50%;
}

#comment {
  border-radius: 8px;
  width: 90%;
  border: none;
  padding: 5px;
  padding-left: 20px;
  margin: 2%;
}

input[type="checkbox"].btn-tag {
  display: none;
}
input[type="checkbox"].btn-tag + label {
  padding: 8px 18px;
  border: 1px solid;
  border-image-slice: 1;
  border-radius: 24px;
  border-image-source: linear-gradient(0.25turn, #00ffff, #ff005c);
}
input[type="checkbox"].btn-tag:checked + label {
  border: none;
  border-radius: 24px;
  background: linear-gradient(0.25turn, #00ffff, #ff005c);
}

.postit {
  margin: 3%;
  padding: 8px 18px;
  border: 1px solid linear-gradient(0.25turn, #00ffff, #ff005c);
  /*border-image-slice: 1;*/
  border-radius: 24px;
  background-color: transparent;
}

.postit:hover {
  color: white;
  margin: 3%;
  padding: 8px 18px;
  border: none;
  /*border-image-slice: 1;*/
  border-radius: 24px;
  background-image: linear-gradient(0.25turn, #00ffff, #ff005c);
}

/* CSS de la partie commentaires */

#comments {
  background-color: #222222;
  margin: 2%;
  border-radius: 8px;
  padding: 2%;
}


</style>