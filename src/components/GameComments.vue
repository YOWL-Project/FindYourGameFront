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
        <div
          class="container"
          style="display: block"
          v-for="topic in topics"
          :key="topic.id"
          :topic="topic"
        >
          <div class="row" id="hottopics" v-if="topic.game_id == game.id">
            <div
              class="col-10"
              align="left"
              v-bind:hastopic="(hastopic = true)"
            >
              <p class="topic-title">{{ topic.title }}</p>
              <p class="topic-details">
                {{ getUser(topic.user_id) }} -
                {{ formatDate(topic.created_at) }} Last update
                {{ getLastUpdate(topic.updated_at) }}
              </p>
            </div>
            <div
              class="col-2 align-self-center"
              v-if="getNbComments(topic.id) == 0"
            >
              <p class="nb-comments" style="font-size: 0.8rem" >No comments</p>
            </div>
            <div class="col-2 align-self-center" v-else v-bind:hascomments="(hascomments = true)">
              <p class="nb-comments">{{ getNbComments(topic.id) }}</p>
            </div>
          </div>
        </div>
        <!-- Fin de l'extrait -->

        <!-- Affichage s'il n'y a pas de topic -->
        <div class="row" id="notopics" v-if="hastopic == false">
          <div class="col">
            <p class="topic-title">No topics</p>
          </div>
        </div>
        <!-- Fin de l'affichage -->

        <!-- Affichage pour aller chercher tous les topics sur le jeu -->
        <div style="display: inline-flex; width: 100%" v-if="hastopic == true">
          <p>See all topics on this game</p>
          <span class="arrow-right"
            ><a href=""
              ><img src="../assets/arrow-right.svg" width="25" height="25" /></a
          ></span>
        </div>
      </div>
      <!-- Fin de l'affichage -->
      

      <!-- Row #4 : Last Comments (sur les topics du jeu) -->
      <div class="row" v-if="hascomments == true">
        <h2>LAST COMMENTS</h2>

        <!-- Extrait des derniers commentaires sur les topics -->
        <div
          class="container"
          v-for="topic in topics"
          :key="topic.id"
          :topic="topic"
        >
          <div v-if="topic.game_id == game.id">
            <div
              v-for="comment in comments"
              :key="comment.id"
              :comment="comment"
            >
              <div class="row" id="hottopics" v-if="comment.topic_id == topic.id">
                <div class="col-7" align="left">
                  {{ getUser(comment.user_id) }} on "{{ topic.title }}"
                </div>
                <div class="col-5" align="right">{{getLastUpdate(comment.updated_at)}}</div>
                <div class="col-12"><p>{{ comment.content.slice(0,50) }}...</p></div>
                <div class="col-4">
                  <img src="../assets/positif.svg" width="25" height="25" /> {{getNbVotesComments(comment.id).votes_plus}}
                  "usefull" votes
                </div>
                <div class="col-4">
                  <img src="../assets/negatif.svg" width="25" height="25" /> {{getNbVotesComments(comment.id).votes_minus}}
                  "useless" votes
                </div>
                <div class="col-4">
                  <img src="../assets/lol.svg" width="25" height="25" /> XX "Lol
                  !" votes
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Fin des extraits -->
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapState, mapActions } from "vuex";

export default {
  name: "GameComments",
  props: {
    game: Object,
  },
  data() {
    return {
      hastopic: false,
      hascomments: false,
    };
  },
  computed: {
    ...mapState("topics", {
      topics: (state) => state.topics,
    }),
    ...mapState("users", {
      users: (state) => state.users,
    }),
    ...mapState("comments", {
      comments: (state) => state.comments,
    }),
    ...mapState("votesComments", {
      votesComments: (state) => state.votesComments,
    }),
  },
  methods: {
    ...mapActions({
      fetchTopics: "topics/FETCH_TOPICS",
      fetchUsers: "users/FETCH_USERS",
      fetchComments: "comments/FETCH_COMMENTS",
      fetchVotesComments: "votesComments/FETCH_VOTESCOMMENTS",
    }),
    formatDate: (value) => {
      if (value) {
        return moment(String(value)).format("DD/MM/YYYY");
      }
    },
    getLastUpdate(update) {
      return moment(String(update)).calendar();
    },
    getUser(user_id) {
      let username = "";
      this.users.forEach((user) => {
        if (user.id == user_id) {
          username += user.username;
        }
      });
      return username;
    },
    getNbComments(topic_id) {
      let nbcomments = 0;
      this.comments.forEach((comment) => {
        if (comment.topic_id == topic_id) {
          nbcomments += 1;
        }
      });
      return nbcomments;
    },
    getNbVotesComments(comment_id) {
      let nb_votes_comments_plus = 0;
      let nb_votes_comments_minus = 0;
      this.votesComments.forEach((votesComment) => {
        if (votesComment.comment_id == comment_id) {
          if (votesComment.vote == 1) {
            nb_votes_comments_plus += 1;
          } else if (votesComment.vote == -1) {
            nb_votes_comments_minus += 1;
          }
        }
      });
      let nb_votes = {votes_plus: nb_votes_comments_plus, votes_minus: nb_votes_comments_minus}
      return nb_votes;
    },
  },
  mounted() {
    this.fetchTopics();
    this.fetchUsers();
    this.fetchComments();
    this.fetchVotesComments();
  },
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

#notopics {
  background-color: #222222;
  border-radius: 8px;
  margin: 2%;
  padding: 2%;
  min-width: 80%;
}
</style>