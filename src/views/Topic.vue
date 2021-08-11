<template>
  <div class="container">
    <div class="row">
      <h1>{{ topic.title }}</h1>
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
    <h2>Posted by : {{ topic.username }}</h2>
    <h3>posted on {{ formatDate(topic.created_at) }}</h3>
    <div class="row my-4" v-if="authentificated == true && (user.id == topic.user_id || user.isadmin == 1)">
      <span class="tags"><img src="../assets/edit.svg" width="25" height="25" /></span>
      <span class="tags"><img src="../assets/delete.svg" width="25" height="25" @click="deleteThisTopic(topic.id)" /></span>
    </div>

    <div class="row" id="yourpost">
      <textarea
        class="form-control"
        id="comment"
        rows="4"
        placeholder="Your comment here"
        v-model="content"
      />
    </div>

    <div class="row">
      <button class="postit" @submit="onSubmit">POST IT !</button>
    </div>

    <!-- Début de la section commentaires -->
    <div
      class="container"
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    >
      <div class="row" id="comments" v-if="comment.topic_id == topic.id" v-bind:hascomments="(hascomments = true)">
        <div class="col-7" align="left">{{ comment.username }}</div>
        <div class="col-5" align="right">
          {{ formatDate(comment.created_at) }}
        </div>
        <div class="col-12">
          <p>{{ comment.content }}</p>
        </div>
          <div class="col-4" v-if="authentificated == true"> 
            <img src="../assets/positif.svg" width="25" height="25" /> {{getNbVotesComments(comment.id).votes_plus}}
            "usefull" votes
          </div>
          <div class="col-4" v-if="authentificated == true"> 
            <img src="../assets/negatif.svg" width="25" height="25" /> {{getNbVotesComments(comment.id).votes_minus}}
            "useless" votes
          </div>
          <div class="col-4" v-if="authentificated == true && (user.id == topic.user_id || user.isadmin == 1)"> 
            <img src="../assets/delete.svg" width="25" height="25" @click="deleteComment({id:comment.id, token:user.token})"/> Delete this comment
          </div>
      </div>
    </div>

    <!-- S'il n'y a pas de commentaires -->
    <div class="container">
      <div class="row" id="nocomments" v-if="hascomments == false">
        <div class="col">
          <p class="nocomments-title">This topic has not been commented yet... Add your comment to start the discussion !</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import moment from "moment";

export default {
  name: "Topic",

  data: () => ({
    favTopic: false,
    hascomments: false,
    content: ''
  }),

  methods: {
    // SUPPRESSION DU TOPIC
    deleteThisTopic(id) {
      this.deleteTopic({id:id, token:this.user.token}), 
      this.$router.push('/')
    },

    // MISE DU TOPIC EN FAV
    putFav() {
      this.favTopic = true;
    },
    unFav() {
      this.favTopic = false;
    },

    // MISE AU FORMAT DE LA DATE
    formatDate: (value) => {
      if (value) {
        return moment(String(value)).format("MMMM Do YYYY");
      }
    },

    // MAP DES ACTIONS DU STORE
    ...mapActions({
      getTopic: "topics/GET_TOPIC",
      fetchComments: "comments/FETCH_COMMENTS",
      fetchVotesComments: "votesComments/FETCH_VOTESCOMMENTS",
      deleteComment: "comments/DELETE_COMMENT",
      deleteTopic: "topics/DELETE_TOPIC",
      addComment: "comments/POST_COMMENT"
    }),

    // + OU - DE COMMENTS (Formule de Manon)
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

    onSubmit(e) {
      e.preventDefault()
      if (!this.content) {
        alert('Please add a card')
        return
      }

      this.addComment([this.content, [this.id]]);
     // this.card = ''
    },
  },

  computed: {
    ...mapState("topics", {
      topic: (state) => state.topic,
    }),
    ...mapState("comments", {
      comments: (state) => state.comments,
    }),
    ...mapState("votesComments", {
      votesComments: (state) => state.votesComments,
    }),
    ...mapState("authentification", {
      user: (state) => state.user,
      authentificated: (state) => state.authentificated
    })
  },

  mounted() {
    this.getTopic(this.$route.params.id);
    this.fetchComments();
    this.fetchVotesComments();
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

#nocomments {
  background-color: #222222;
  border-radius: 8px;
  margin: 2%;
  padding: 2%;
  min-width: 80%;
}

.nocomment-title {
  font-size: 1.2em;
  color: #cccccc;
}
</style>