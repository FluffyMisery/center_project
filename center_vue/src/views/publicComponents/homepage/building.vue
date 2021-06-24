<template>
    <v-container class="pa-0">
    <div class="main_info">
        <div class="main_img"><v-img 
        
          class="mainimg"
          :src="building.Photo"
          aspect-ratio="1.4"
        ></v-img></div>

        <div class="card">
            <v-card
            class="ml-15 v-cards"
            elevation="0"
            >
            <v-card-title class="pa-0" style="font-size:32px; margin-bottom:30px; font-weight:600;">building<span>{{building.BuildingID}}</span></v-card-title>
            <v-card-text class="pa-0">
                <ul class="apartment_desc pa-0" >
                    <li style="font-size:24px; margin-bottom:25px; font-weight:500;">city: <span style="font-size:22px; font-weight:400;">{{building.City}}</span></li>
                    <li style="font-size:24px; margin-bottom:25px; font-weight:500;">street <span style="font-size:22px; font-weight:400;">{{building.Street}}</span></li>
                    <li style="font-size:24px; margin-bottom:25px; font-weight:500;">number: <span style="font-size:22px; font-weight:400;">{{building.Number}}</span></li>
                    <li style="font-size:24px; margin-bottom:25px; font-weight:500;">type: <span style="font-size:22px; font-weight:400;">{{building.Type}}</span></li>
                    <li style="font-size:24px; margin-bottom:25px; font-weight:500;">description: <span style="font-size:22px; font-weight:400;">{{building.Description}}</span></li>
                </ul>
            </v-card-text>
            </v-card>
        </div>
    </div>

    <v-card flat>
        <v-card-title class="data_input">
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="apartments"
            @click:row="goTo"
        >
        <template v-slot:item.Photo="{ item }">
          
          <v-avatar size="36px" tile>
            <img
              :src= "item.Photo"
              alt="Avatar"
            >
          </v-avatar>

        </template>

        <template v-slot:item.Actions="{ item }">
              <v-btn depressed color="primary"
              :to="`/apartment/${item.ApartmentID}`"
              >show
            </v-btn>

        </template>

        </v-data-table>
        </v-card>
    </v-container>
</template>

<style scoped>

.tournament_description li{
    /* :to="`/aparment/${item.ApartmentID}`" */
    margin-top: 23px!important;
}

.sign_in{
    margin-left: 24px;
    margin-top: 15px;
}

.data_input{
    margin-top: 60px;
}

.v-card__title{
    font-size: 26px;
}
.v-card__title span{
    margin-left: 10px;
    color: #FFA500;
}

.v-card__subtitle{
    font-size: 18px;
    margin-top: 10px;
}

.v-card__subtitle span{
    color: #FFA500;
}
.tournament_description{
    list-style-type: none;
    font-size: 20px;
}
.tournament_description > li{
    margin-top: 10px;
    color: black;
}
.tournament_description > li span{
    color: #FFA500;
}

.v-cards{
    width: 100vh;
    height: 100%;
}
    .main_info{
        display: flex;
        margin-top: 60px;
    }
    .mainimg{
        height: 400px;
        width: 400px;
    }
    
.data_input{
    margin-top: 60px;
}


.v-card__title{
    font-size: 26px;
}
.v-card__title span{
    margin-left: 10px;
    color: black;
}

.v-card__subtitle{
    font-size: 18px;
    margin-top: 10px;
}
.v-card__subtitle span{
    color: black;
}
.apartment_desc{
    list-style-type: none;
    font-size: 20px;
}
.apartment_desc > li{
    margin-top: 10px;
    color: black;
}
.apartment_desc > li span{
    color: black;
}

.v-cards{
    width: 100vh;
    height: 100%;
}
    .main_info{
        display: flex;
    }
    .maining{
        height: 400px;
        width: 400px;
    }
</style>

<script>
  export default {
    name: 'building',
    data () {
      return {
        id: this.$route.params['id'],
        building: {},
        search: '',
        headers: [
          {text: 'Photo', value: 'Photo'},
          {text: 'ApartmentID', value: 'ApartmentID'},
          {text: 'Number', value: 'Number'},
          {text: 'Square', value: 'Square'},
          {text: 'Cost', value: 'Cost'},
          { text: 'Actions', value: 'Actions', sortable: false },
        ],
        apartments: [],
      }
    },

  created(){
      this.LoadBuilding()
  },

  methods: {
    async LoadBuilding(){
        this.building = await fetch(
            `${this.$store.getters.getServerUrl}building/${this.id}`
        ).then(response => response.json())
        this.apartments = this.building.Apartments
    },
    goTo(item){
      this.$router.push({name: 'apartment', params: {id: item.ApartmentID}})
    },
  }
  }
</script>