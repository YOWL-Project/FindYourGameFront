<template>
  <div class="home">
    <img
      class="m-4"
      alt="Logo FindYourGame"
      src="../assets/Logo.svg"
      width="172"
      height="157"
    />
    <HelloWorld msg="Welcome to FindYourGame App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
