<template>
    <v-container>
    <v-card
    flat
    class="mx-auto theme--light"
    style="max-width: 500px;"
    >
    <h2 class="login">sign up</h2>
    <v-form
      ref="form"
      class="pa-4 pt-6"
    >
      <v-text-field
        style="border-radius: 10px;
        border-style:none!important;"
        type="text"
        id="username"
        v-model="username"
        filled
        outlined
        label="username"
      ></v-text-field>
      <v-text-field
        v-model="password"
        filled
        outlined
        id="password"
        label="Password"
        style="border-radius: 10px;"
        type="password"
      ></v-text-field>
      <v-text-field
        v-model="Phone"
        outlined
        filled
        id="Phone"
        label="phone"
        style="border-radius: 10px;"
        type="number"
      ></v-text-field>
      <v-text-field
      v-model="email"
      outlined
        filled
        id="email"
        label="email"
        style="border-radius: 10px;"
        type="text"
      ></v-text-field>
      <v-text-field
      v-model="first_name"
      outlined
        filled
        id="first_name"
        label="first_name"
        style="border-radius: 10px;"
        type="text"
      ></v-text-field>
      <v-text-field
      v-model="last_name"
      outlined
        filled
        id="last_name"
        label="last_name"
        style="border-radius: 10px;"
        type="text"
      ></v-text-field>
    </v-form>
    <v-card-actions
         style="
        display:flex;
        justfy-content: center;
        align-items: center;
        flex-direction: column;">
      <v-btn
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
        @click="signup()"
      >
        sign up
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
    margin-top: 30px;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 10px;
}
a {
    color: "deep-orange";
    text-decoration: none;
    font-size: 14px;
  }

</style>


<script>
  import $ from 'jquery'
  export default {
    name: 'Signup',

    data: () => ({
      username: undefined,
      email: undefined,
      password: undefined,
      first_name: undefined,
      last_name: undefined,
      Phone: undefined,
    }),


    methods: {
      async signup() {
        $.ajax({
          url: `${this.$store.getters.getServerUrl}auth/users/`,
          type: "POST",
          data: {
            username: this.username,
            email: this.email,
            password: this.password,
            first_name: this.first_name,
            last_name: this.last_name,
            Phone: this.Phone,
          },
          success: (response) => {
            window.location.replace("/login");
          },
          error: (response) => {
              alert("error");
          }
        })
      }
    }
  }
</script>