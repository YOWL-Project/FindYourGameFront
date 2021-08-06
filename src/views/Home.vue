<template>
  <div class="home">
    <Posts v-for="post in posts" :key="post.id" :post="post" />
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
