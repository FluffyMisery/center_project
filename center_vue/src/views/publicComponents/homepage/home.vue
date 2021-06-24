<template>
  <v-container>
    <div class="main" style="margin-bottom: 120px;">
      <h1 style="margin-bottom:30px; margin-top:30px;">Buildings </h1>
    <v-row dense>
      <v-col
        v-for="card in apartments"
        :key="card.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card
        class="ma-1"
        style="max-width:100%;"
        max-width="300"
        d-flex
        >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="card.Photo" alt="Photo"
          >
          </v-img>

          <v-card-subtitle class="pb-0" v-text="card.City"></v-card-subtitle>

          <v-card-text class="text--primary">
            <div v-text="card.Street"></div>

            <div v-text="card.Number"></div>
          </v-card-text>

          <v-card-actions>
            <v-btn
              color="black"
              text
              :to="`/building/${card.BuildingID}`"
            >
              show apartments
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    </div>

    <div class="main-2">
        <h1 style="margin-bottom:30px; margin-top:30px;">Agents</h1>
      <v-row dense>
      <v-col
        v-for="card in agents"
        :key="card.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card
          max-width="375"
          class="mx-auto"
        >
          <v-img
            :src="card.Photo" alt="Photo"
            height="300px"
            dark
          >
            <v-row class="fill-height">
              <v-card-title class="black--text ml-4">
                <div class="text-h4 mr-3" v-text="card.first_name"></div>
                <div class="text-h4" v-text="card.last_name"></div>
              </v-card-title>
            </v-row>
          </v-img>

          <v-list two-line>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-phone
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="card.Phone"></v-list-item-title>
                <v-list-item-subtitle>Mobile</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-icon>
                <v-icon>mdi-message-text</v-icon>
              </v-list-item-icon>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="indigo">
                  mdi-email
                </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="card.email"></v-list-item-title>
                <v-list-item-subtitle>Work</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>


<script>
export default {
  name: 'Home',

    data: () => ({
      reveal: false,

    }),

  data() {
    return{
        agents: [],
        apartments: [],
      }
  },
  created(){
    this.LoadListbuildings()
  },

  methods: {
    async LoadListbuildings(){
      this.agents = await fetch(
        `${this.$store.getters.getServerUrl}agents/`
      ).then(response => response.json()),
      this.apartments = await fetch(
        `${this.$store.getters.getServerUrl}buildings/`
      ).then(response => response.json())
    },

  goTo(card){
      console.log(card.ApartmentID)
      this.$router.push({name: 'apartment', params: {id: card.ApartmentID}})
    },

  }

}
</script>


<style scoped>
  .v-card__title {
    align-items:flex-end;
  }
</style>