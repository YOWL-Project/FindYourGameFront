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
      <div class="row my-4">
        <div class="col">
          <h2>HOT TOPICS</h2>
          <div class="card" id="hottopics">
            <div class="card-body">
              <div class="col d-flex">Title of the Topic</div>
              <div class="col" align="right">NB</div>

            </div>
          </div>
        </div>
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
</style>