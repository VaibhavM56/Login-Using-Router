<template>
  <form class="login mt-5" @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        v-model="formData.email"
      />

      <p class="msgerr">{{ setEmailError }}</p>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        v-model="formData.password"
      />
    </div>

    <p class="msgerr">{{ setPasswordError }}</p>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  <h4 class="mt-2 loginText" @click="goToSignUp">
    Don't have an account ? Create Account ...
  </h4>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      setEmailError: "",
      setPasswordError: "",
    };
  },
  methods: {
    goToSignUp() {
      this.$router.push("/signup");
    },
    goToProducts() {
      this.$router.push("/products");
    },

    validateEmail() {
      if (this.formData.email) {
        let emailRegex = /^\S+@\S+$/;
        if (emailRegex.test(this.formData.email)) {
          this.setEmailError = "";
          return true;
        } else {
          this.setEmailError = "enter valid email";
        }
      } else {
        this.setEmailError = "email is required";
      }
    },
    validatePassword() {
      if (this.formData.password) {
        let passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (passRegex.test(this.formData.password)) {
          this.setPasswordError = "";
          return true;
        } else {
          this.setPasswordError = "enter valid password minimum 8 characters";
        }
      } else {
        this.setPasswordError = "password is required";
      }
    },
    handleSubmit() {
      // validate the data , then send  the data to the backend or parent component
      this.validateEmail();
      this.validatePassword();

      if (this.validateEmail() && this.validatePassword()) {
        // this.$emit("getFormDataFromLogin", this.formData);
        // (this.formData = {
        //   email: "",
        //   password: "",
        // }),

        // this.goToProducts();
        this.$store.commit("login");
        alert("Submitted successfully");
        this.$router.push("/");
      }
    },
  },
};
</script>

<style>
.login {
  margin-left: 10%;
  width: 70%;
  align-items: center;
}
.loginText {
  cursor: pointer;
  margin-left: 10%;
}
.msgerr {
  color: red;
}
</style>
