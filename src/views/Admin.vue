<template>
  <div class="container-fluid">
      <div class="row">
    <h1> <span class="plus">+</span> Welcome, Admin !</h1>
</div>

    <div class="row">
      <!-- Intégration des components GameInfo (et GameVote)-->
      <div class="col-md">
        <CRUDUsers />
      </div>
      <!-- Intégration du component de topics et commentaires-->
      <div class="col-md">
        <Dashboard  />
      </div>
    </div>


  </div>
</template>

<script>
import CRUDUsers from "@/components/CRUDUsers.vue";
import Dashboard from "@/components/Dashboard.vue";

export default {
name: "Admin",
components: {
    CRUDUsers,
    Dashboard,
}

}
</script>

<style scoped>

h1 {
  font-size: 1.8em;
  text-align: left;
  padding-bottom: 2%;
  padding-left: 3%;
}

</style>