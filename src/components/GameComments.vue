<template>
  <div class="container-fluid">
    <div class="col">
      <!-- Row #1 : Form de création de topics -->
      <div class="row">
        <h2>WHAT'S ON YOUR MIND ?</h2>
        <input
          class="subject"
          type="text"
          placeholder="Subject of the discussion"
        />
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

      <!-- Row #2 : Bouton de post -->
      <div class="row">
        <button class="postit">POST IT !</button>
      </div>

      <!-- Row #3 : Hot Topics (du jeu) -->
      <div class="row my-5">
        <h2>HOT TOPICS</h2>
        <!-- L'extrait des hot topics concernant le jeu en question -->
        <div class="container">
          <div class="row" id="hottopics">
            <div class="col-10" align="left">
              <p class="topic-title">Title of the Topic and TAG</p>
              <p class="topic-details">Username, date and last update</p>
            </div>
            <div class="col-2 align-self-center">
              <p class="nb-comments">NB</p>
            </div>
          </div>
        </div>
        <!-- Fin de l'extrait -->

        <!-- Deuxième extrait juste pour tester le design -->
        <div class="container">
          <div class="row" id="hottopics">
            <div class="col-10" align="left">
              <p class="topic-title">Title of the Topic and TAG</p>
              <p class="topic-details">Username, date and last update</p>
            </div>
            <div class="col-2 align-self-center">
              <p class="nb-comments">NB</p>
            </div>
          </div>
        </div>
        <!-- Fin de l'extrait -->

        <p>See all topics on this game</p>
        <span class="arrow-right"
          ><a href=""
            ><img src="../assets/arrow-right.svg" width="25" height="25" /></a
        ></span>
      </div>

      <!-- Row #4 : Last Comments (sur les topics du jeu) -->
      <div class="row">
        <h2>LAST COMMENTS</h2>

        <!-- Extrait des derniers commentaires sur les topics -->
        <div class="container">
          <div class="row" id="hottopics">
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

        <!-- Fin des extraits -->

        <!-- Deuxième extrait pour design (a supprimer une fois le bind fait) -->
        <div class="container">
          <div class="row" id="hottopics">
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

        <!-- Fin des extraits -->

        <!-- Troisieme extrait pour design (a supprimer une fois le bind fait) -->
        <div class="container">
          <div class="row" id="hottopics">
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
        <!-- Fin des extraits -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameComments",
  //props -> id du jeu + id user
};
</script>

<style scoped>
body {
  margin: 2%;
}

h2 {
  font-size: 1.5em;
  text-align: left;
}

p {
  text-align: left;
}

.subject {
  border-radius: 8px;
  width: 90%;
  border: none;
  padding: 5px;
  padding-left: 20px;
  margin: 2%;
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

#hottopics {
  background-color: #222222;
  margin: 2%;
  border-radius: 8px;
  padding: 2%;
}

.nb-comments {
  font-size: 1.3em;
  color: #00ffff;
  font-weight: 700;
}

.arrow-right {
  margin-left: 2%;
}

.topic-details {
  font-style: italic;
  color: #cccccc;
}

.topic-title {
  font-size: 1.2em;
  color: #cccccc;
}
</style>