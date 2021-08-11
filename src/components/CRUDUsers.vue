<template>
  <div class="container">
    <h2>MANAGE USERS</h2>
    <div class="row" id="users">
      <div class="col-10" align="left">
        <p class="username">Username</p>
        <span><p class="user-details">Mail</p></span>
        <span><p class="user-details">Birthdate</p></span>
        <span><p class="user-details">Added on ...</p></span>
        <span><p class="user-details">Is admin : </p></span>
      </div>
      <div class="col-1 align-self-center">
        <img src="../assets/edit.svg" width="25" height="25">
      </div>
    <div class="col-1 align-self-center">
        <img src="../assets/delete.svg" width="25" height="25">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CRUDUsers",
};
</script>

<style scoped>
h2 {
  font-size: 1.6em;
  text-align: left;
  padding-bottom: 2%;
}

#users {
  background-color: #222222;
  margin: 2%;
  border-radius: 8px;
  padding: 2%;
}

.user-details {
  font-style: italic;
  color: #cccccc;
}

</style>