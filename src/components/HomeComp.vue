<template>
  <div>
    <img
      src="https://media.istockphoto.com/vectors/home-flat-icon-pixel-perfect-for-mobile-and-web-vector-id1145840259?k=20&m=1145840259&s=612x612&w=0&h=4ejY4fSiFcyk3MsQx8bOpeJ_rf5_yeDGuIoH5rpPAbY="
      alt="home image"
    />

    <button type="button" class="btn btn-success" @click="goToLogin">
      Login
    </button>
  </div>
</template>

<script>
// import NavComp from "./NavComp.vue";

export default {
  components: {
    // NavComp,
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
