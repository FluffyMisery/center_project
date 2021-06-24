<template>
    <v-container>
    <v-card
    flat
    class="mx-auto theme--light"
    style="max-width: 500px;"
    >
    <h2 class="login">login</h2>
    <v-form
      ref="form"
      v-model="form"
      class="pa-4 pt-6"
    >
      <v-text-field
        style="border-radius: 10px;
        border-style:none!important;"
        type="text"
        id="LogIn"
        v-model="username"
        filled
        label="username"
      ></v-text-field>
      <v-text-field
        v-model="password"
        filled
        id="password"
        label="Password"
        style="border-radius: 10px;"
        type="password"
      ></v-text-field>
    </v-form>
    <v-card-actions
         style="
        display:flex;
        justfy-content: center;
        align-items: center;
        flex-direction: column;">
      <v-btn
        :disabled="!form"
        :loading="isLoading"
        class="white--text"
        color="black"
        depressed
        style="width: 470px;
        height: 45px;
        margin-bottom: 15px;
        display:flex;
        justfy-content: center;
        align-items: center;
        border-radius: 10px;
        "
        @click="Login()"
      >
        login
      </v-btn>
    </v-card-actions>
    </v-card> 
    </v-container>
</template>

<style>
  .v-text-field > .v-input__control > .v-input__slot:before, .v-text-field > .v-input__control > .v-input__slot:after{
    content: none!important;
  }
</style>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca&display=swap');
 *{
    font-family: 'Lexend Deca', sans-serif!important;
  }

.login{
    margin-top: 50px;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 25px;
}


</style>


<script>
  import $ from 'jquery'
  
  export default {
    name: 'Login',
    data: () => ({
      username: undefined,
      form: false,
      isLoading: false,
      password: undefined,
    }),
    methods: {
      async Login() {
        $.ajax({
          url: `${this.$store.getters.getServerUrl}auth/token/login/`,
          type: "POST",
          data: {
            username: this.username,
            password: this.password
          },
          success: (response) => {
            localStorage.setItem("auth_token", response.auth_token);
            if (this.username == "Admin")
              window.location.replace("/admin");
            else {
              window.location.replace("/");
            }
          },
          error: (response) => {
            if (response.status === 400) {
              alert("Login or password is incorrect");
            }
          }
        })
      }
    }
  }
</script>