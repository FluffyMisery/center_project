<template>
  
  <v-app-bar
  app
  flat>
  <v-app-bar-nav-icon
      class="hidden-md-and-up"
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
          class="hidden-sm-and-down"
          
          text
          @click="onClick($event, link)"
        >
          {{ link}}
        </v-btn>

        <v-spacer />
        <div class="profile">

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
    
      </v-row>

    </v-container>
  </v-app-bar>

</template>





<script>
  export default {
    data () {
      return {
        linkes: ['building', 'Cities', 'About us', 'Contacts'],
      }
    },
  }
</script>

<style>
.linkadmin{
  text-decoration: none;
  margin-right: 5px;
}


.name{
  color:#FFA500;
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

  .b_list{
    text-align: center;
  }

  .v-list-link a{
    text-decoration: none;
    color:#FFA500;
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
    border-bottom-color: #FFA500;
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

  .header_back{
    background: #3A3A3A!important;
  }
  .cybernm_header{
    font-size: 28px!important;
    font-weight: 900;
    color: white;
  }
</style>
