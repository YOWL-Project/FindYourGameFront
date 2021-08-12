<template>
<div class="container-fluid">
        <form style="position: relative">
        <input
          type="text"
          class="form-control"
          name="search"
          id="search"
          v-model="search"
          @keyup.enter="searchGame()"
          placeholder="Wich game are you looking for ?"
        />
        <img
          style="
            position: absolute;
            top: 50%;
            right: 1rem;
            transform: translateY(-50%);
            cursor: pointer;
          "
          src="../assets/search_black_24dp.svg"
          alt=""
          width="30px"
        />
      </form>
    </div>
</template>

<script>
export default {
    name: "Search",

    data() {
        return {
            search: "",
        }

    },

    // SEARCH DES GAMES
    methods: {
    searchGame() {
      alert('OK');
    }
    },

}
</script>

<style>

</style>