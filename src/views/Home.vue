<template>
  <div class="home">
    <Posts v-for="post in posts" :key="post.id" :post="post" />
    <img
      class="m-4"
      alt="Logo FindYourGame"
      src="../assets/Logo.svg"
      width="172"
      height="157"
    />
  </div>
</template>

<script>
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
  },
  mounted() {
    this.fetchPosts();
  },
};
</script>
