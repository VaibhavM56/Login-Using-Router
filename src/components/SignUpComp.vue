<template>
  <form class="signup mt-5" @submit.prevent="handleSubmit">
    <div class="mb-3">
      <label for="exampleInputUsername" class="form-label">Username</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputUsername"
        v-model="formData.username"
      />
    </div>
    <p class="msgerr">{{ setUsernameError }}</p>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
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
    <div class="mb-3">
      <label for="exampleInputConfirmPassword1" class="form-label"
        >Confirm Password</label
      >
      <input
        type="password"
        class="form-control"
        id="exampleInputConfirmPassword1"
        v-model="formData.confirmpassword"
      />
    </div>
    <p class="msgerr">{{ setConfirmPasswordError }}</p>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      },
      setUsernameError: "",
      setEmailError: "",
      setPasswordError: "",
      setConfirmPasswordError: "",
    };
  },
  methods: {
    goToLogin() {
      this.$router.push("/login");
    },

    validateUsername() {
      if (this.formData.username) {
        let usernameRegex = /^[a-z ,.'-]+$/i;
        if (usernameRegex.test(this.formData.username)) {
          this.setUsernameError = "";
          return true;
        } else {
          this.setUsernameError = "enter valid username";
        }
      } else {
        this.setUsernameError = "username is required";
      }
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
    validateConfirmPassword() {
      if (this.formData.confirmpassword) {
        if (this.formData.password === this.formData.confirmpassword) {
          this.setConfirmPasswordError = "";
          return true;
        } else {
          this.setConfirmPasswordError = "enter value same as password";
        }
      } else {
        this.setConfirmPasswordError = "password is required";
      }
    },
    handleSubmit() {
      this.validateUsername();
      this.validateEmail();
      this.validatePassword();
      this.validateConfirmPassword();

      if (
        this.validateEmail() &&
        this.validatePassword() &&
        this.validateConfirmPassword()
      ) {
        this.goToLogin();
      }
    },
  },
};
</script>

<style>
.signup {
  margin-left: 10%;
  width: 70%;
  align-items: center;
}

.msgerr {
  color: red;
}
</style>
