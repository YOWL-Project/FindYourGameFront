<template>
  <div class="home">
    <Posts v-for="post in posts" :key="post.id" :post="post" />
    <!-- <Posts /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from "vuex";
import Posts from "@/components/Posts.vue";

export default {
  name: "Home",
  components: {
    Posts,
  },
  computed: {
    ...mapState("posts", {
      posts: (state) => state.posts,
    }),
  },
  methods: {
    ...mapActions({
      fetchPosts: "posts/FETCH_POSTS",
    }),
    // getgames() {
    //   const https = require("https");

    //   https
    //     .get("https://www.freetogame.com/api/games", (resp) => {
    //       let data = "";

    //       // A chunk of data has been received.
    //       resp.on("data", (chunk) => {
    //         data += chunk;
    //       });

    //       // The whole response has been received. Print out the result.
    //       resp.on("end", () => {
    //         console.log(data);
    //       });
    //     })
    //     .on("error", (err) => {
    //       console.log("Error: " + err.message);
    //     });
    // },
  },
  mounted() {
    this.fetchPosts();
    // this.getgames();
    // console.log(this.posts);
  },
};
</script>
