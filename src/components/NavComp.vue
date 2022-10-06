<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <!-- <a class="navbar-brand" href="#">Navbar</a> -->

      <router-link to="/" class="navbar-brand">Navbar</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link
            to="/login"
            class="nav-link"
            v-if="!this.$store.state.isAuthenticated"
            >Login</router-link
          >
          <router-link to="/signup" class="nav-link">SignUp</router-link>
          <router-link to="/cart" class="nav-link">Cart</router-link>
          <button
            class="btn btn-primary"
            v-if="this.$store.state.isAuthenticated"
            @click="logout"
          >
            logout
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      alert("logged out");
      this.$store.commit("logout");
      this.$router.push("/"); // when logged out it will redirect to home
    },
  },
};
</script>
