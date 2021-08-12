<template>
  <div class="container-fluid">
    <div class="row">
      <h1><span class="plus">+</span> Welcome, Admin !</h1>
    </div>

    <div class="row">
      <!-- Intégration des components GameInfo (et GameVote)-->
      <div class="col-md">
        <h2>USERS</h2>
        <router-link to="/admin/users">
          <img src="@/assets/yowl-crud-users.jpeg" alt="crud users" width="80%">
        </router-link>
      </div>
      <!-- Intégration du component de topics et commentaires-->
      <div class="col-md">
        <Dashboard />
      </div>
    </div>
  </div>
</template>

<script>
import Dashboard from "@/components/Dashboard.vue";

export default {
  name: "Admin",
  components: {
    Dashboard,
  },
};
</script>

<style scoped>
h1 {
  font-size: 1.8em;
  text-align: left;
  padding-bottom: 2%;
  padding-left: 3%;
}
</style>
