<template>
  <div class="container" id="container">
    <h2>MANAGE USERS</h2>
    <table width="100%" id="table">
      <thead id="firstrow">
        <tr class="test">
          <th scope="col">#id</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Birthdate</th>
          <th scope="col">IsAdmin</th>
          <th scope="col">Created at</th>
          <th scope="col">Updated at</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody id="users" v-for="user in users" :key="user.id" :user="user">
        <tr class="test">
          <th scope="row">{{user.id}}</th>
          <td>{{user.username}}</td>
          <td>{{user.email}}</td>
          <td>{{user.birthdate}}</td>
          <td>{{user.isadmin}}</td>
          <td>{{user.created_at}}</td>
          <td>{{user.updated_at}}</td>
          <td>
            <button type="button" class="btn btn-primary btn-sm px-2">
              <img src="../assets/edit.svg" width="20" height="20" />
            </button>
          </td>
          <td>
            <button type="button" class="btn btn-danger btn-sm px-2">
              <img src="../assets/delete.svg" width="20" height="20" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "CRUDUsers",
  computed: {
    ...mapState("authentification", {
      users: (state) => state.users,
      token: (state) => state.user.token,
    }),
  },
  methods: {
    ...mapActions({
      fetchUsers: "authentification/FETCH_USERS",
    }),
  },
  mounted() {
    this.fetchUsers(this.token);
  },
};
</script>

<style scoped>
#container {
  background-color: #222222;
  border-radius: 8px;
  padding: 2%;
}

h2 {
  font-size: 1.6em;
  text-align: left;
  padding-bottom: 2%;
}

#table {
  /* border: solid; */
  background-color: #111111;
}

#firstrow {
  /* background-color: #111111; */
  border: solid #696868e0;
  /* margin: 2%; */
  border-radius: 8px;
  /* padding: 2%; */
}

#users {
  /* background-color: #ffffff; */
  border: solid #696868e0;
  /* color: #111111; */
  /* margin: 2%; */
  border-radius: 8px;
  /* padding: 2%; */
}

.test {
  justify-content: center;
}

.user-details {
  font-style: italic;
  color: #cccccc;
}
</style>
