<template>
  
  <v-app-bar
  app
  flat>
  <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />

  <v-container class="mx-auto py-0">
      <v-row align="center">
        <v-app-bar-title>
          <router-link style="text-decoretion:none; color: black;" to="/"><fa icon="warehouse" size="lg" /></router-link>
        </v-app-bar-title>
      <v-spacer />
        <v-btn
          v-for="link in linkes"
          :key="link"
          v-bind="link"
          class="hidden-sm-and-down"
          
          text
          @click="onClick($event, link)"
        >
          {{ link}}
        </v-btn>

        <v-spacer />
        <div class="profile">

            <div v-if="this.block==1">
              <v-toolbar-items>
                <div class="my-2">
                  <router-link to="/LogIn" class="linksignin"><v-btn
                      class="mr-2"
                      color="black ml-4 text white--text"
                      dark
                    >
                      login
                    </v-btn></router-link>
                    

                    <router-link to="/signup" class="linksignin"><v-btn
                     color="black ml-4 text white--text"
                      dark
                    >
                      <span class="button_signup">sign up</span>
                    </v-btn>
                      </router-link>
                  </div>
              </v-toolbar-items>
            </div>
            <div class="profile d-flex" v-else-if="this.block == 2">
              
              
              <div class="profile_info" style="text-align:right;">
                    <p class="name">{{username}}</p>
                    <p class="post">{{role}}</p>
                </div>
                <div v-if="username=='admin'">
                <router-link to="administration" class="linkadmin">
                  <v-btn
                      depressed
                      color="black ml-4 text white--text"
                  >
                      Admin panel
                  </v-btn>
                </router-link>
              </div>
                <v-btn
                    depressed
                    color="black ml-4 text white--text"
                    @click="logout()"
                >
                    Log out
                </v-btn>
              </div>
          </div>
      </v-row>

    </v-container>
  </v-app-bar>

</template>





<script>
    import $ from 'jquery'
  export default {
    data () {
      return {
        block: 1,
        username: '',
        role: '',

        linkes: ['building', 'Cities', 'About us', 'Contacts'],
      }
    },

    created () {
        this.isLogin()
    },
    methods: {
        async isLogin () {
            let token = localStorage.getItem("auth_token");
            if (token) {
                this.block = 2
                $.ajax({
                    url: `${this.$store.getters.getServerUrl}auth/users/me`,
                    type: "GET",
                    headers: {
                        Authorization: "Token "+token
                    },
                    success: (response) => {
                        this.username = response.username;
                        if (response.post)
                            this.role = response.post;
                        else if (this.username == "Admin")
                            this.role = 'Admin account'
                        else 
                            this.role = 'Client'
                    },
                    error: (response) => {
                        
                    }
                });
            } else {
                this.block = 1
            }
        },
        logout () {
            localStorage.removeItem("auth_token");
            window.location.replace("/");
        }
    }
  }
</script>

<style>
.linkadmin{
  text-decoration: none;
  margin-right: 5px;
}
.post{
  font-size: 12px;
}

.profile{
  align-items: center!important;
}
.profile_info p{
  margin-bottom: 0px!important;
}
.linksignin{
   text-decoration: none;
}

.nav-menu{
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
  
  background:none!important;
  background-color:none!important;
}

.nav-menu:hover{
  background-color:none;
  border-bottom-color: black;
}
.nav-menu span{
  margin-right: 5px;
}

.cybernm_link{
  text-decoration: none;
  color:white!important;
}

.button_signup{
  color: white;
}


</style>
