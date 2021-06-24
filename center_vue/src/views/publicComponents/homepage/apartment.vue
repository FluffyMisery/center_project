<template>
    <v-container class="pa-0">
    <div class="main_info" style="margin-top:60px;">
        <div class="main_img"><v-img 
        
          class="img"
          :src="apartment.Photo"
          aspect-ratio="1.4"
        ></v-img></div>

        <div class="card">
            <v-card
            class="ml-15 v-cards"
            elevation="0"
            >
            <v-card-title class="pa-0" style="font-size:32px; margin-bottom:30px; font-weight:600;">apartment<span>{{apartment.ApartmentID}}</span></v-card-title>
            <v-card-text class="pa-0">
                <ul class="apartment_desc pa-0" >
                    <li style="font-size:24px; margin-bottom:25px; font-weight:500;">number: <span style="font-size:22px; font-weight:400;">{{apartment.Number}}</span></li>
                    <li style="font-size:24px; margin-bottom:25px; font-weight:500;">seats <span style="font-size:22px; font-weight:400;">{{apartment.Square}}</span></li>
                    <li style="font-size:24px; margin-bottom:25px; font-weight:500;">price: <span style="font-size:22px; font-weight:400;">{{apartment.Cost}}</span></li>
                    <li style="font-size:24px; margin-bottom:25px; font-weight:500;">description: <span style="font-size:22px; font-weight:400;">{{apartment.Description}}</span></li>
                </ul>
            </v-card-text>
            <v-card-actions class="pa-0">
                    <v-btn
                    @click="buyAp()"
                    class="ma-0 buyAp"
                    color="balck"
                    dark
                    >
                    buy apartment
                </v-btn> 
            </v-card-actions>
            <v-dialog
                    v-model="dialog"
                    max-width="600px"
                >
                <v-card ref="form">
                    <v-form @submit.prevent="addContract"> 
                    <v-card-title>
                    <span class="headline">Leave a request for the purchase of an apartment</span>
                    </v-card-title>

                    <v-card-text>
                        <v-container>
                        <v-row>
                            
                            <v-col
                            cols="12"
                            sm="12"
                            md="12"
                            >
                                <v-text-field
                                    type="date"
                                    :rules="[rules.required]"
                                    v-model="contract.startDate"
                                    label="Start date"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col
                            cols="12"
                            sm="12"
                            md="12"
                            >
                            <v-text-field
                                type="date"
                                :rules="[rules.required]"
                                v-model="contract.endDate"
                                label="End date"
                                required
                            ></v-text-field>
                            </v-col>
                            <v-col
                            cols="12"
                            sm="12"
                            md="12"
                            >
                            <v-text-field
                                type="number"
                                :rules="[rules.required]"
                                v-model="contract.AgentID"
                                label="Agent"
                                required
                            ></v-text-field>
                            </v-col>
                            <v-col
                            cols="12"
                            sm="12"
                            md="12"
                            >
                            <v-alert
                                dense
                                type="info"
                                >
                                After leaving the application, the manager will call you back within <strong>5 minutes</strong>
                            </v-alert>
                            </v-col>
                        </v-row>
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="close"
                    >
                        Cancel
                    </v-btn>
                    <v-btn
                        color="blue darken-1"
                        text
                        type="submit"
                    >
                        Submit
                    </v-btn>
                    </v-card-actions>
                    </v-form>
                </v-card>
                </v-dialog>
            </v-card>
        </div>
    </div>

      
    </v-container>
</template>

<style scoped>

    .buyAp{
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
    .img{
        height: 400px;
        width: 400px;
    }
    

</style>

<script>
  import $ from 'jquery'
  export default {
    name: 'apartment',
    data () {
      return {
        dialog:false,
        id: this.$route.params['id'],
        apartment: {},
        contractsList: [],
        contract: {
            ContractID: 0,
            AgentID: 0,
            ClientID: 0,
            ApartmentID: 0,
            startDate: '',
            endDate: ''
        },
        defaultItem: {
            ContractID: 0,
            AgentID: 0,
            ClientID: 0,
            ApartmentID: 0,
            startDate: '',
            endDate: ''
        },
        rules: {
          required: value => !!value || 'Required.',
        },
      }
    },

  created(){
      this.Loadapartment()
        let token = localStorage.getItem("auth_token");
        $.ajax({
            url: `${this.$store.getters.getServerUrl}auth/users/me`,
            type: "GET",
            headers: {
                Authorization: "Token "+token
            },
            success: (response) => {
                this.contract.ClientID = response.UserID;
            },
            error: (response) => {
                
            }
        });
  },
  watch: {
      dialog (val) {
        val || this.close()
      },
    },
  methods: {
    async Loadapartment(){
        this.apartment = await fetch(
            `${this.$store.getters.getServerUrl}apartment/${this.id}`
        ).then(response => response.json())
        this.contract.ApartmentID = this.apartment.ApartmentID;
        this.defaultItem.ApartmentID = this.apartment.ApartmentID;
        this.contractsList = await fetch(
            `${this.$store.getters.getServerUrl}contracts/`
        ).then(response => response.json())
        this.contract.ContractID = this.contractsList['length'] + 1;
        this.defaultItem.ContractID = this.contractsList['length'] + 1;
    }, 
    buyAp(){
        let token = localStorage.getItem("auth_token");
        if (token) {
            this.dialog = true
        } else {
            window.location.replace("/login");
        }
    },
    close () {
        this.dialog = false
        this.$nextTick(() => {
            this.contract = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
        })
    },
    async addContract () {
        console.log(this.contract);
        await fetch(
            `${this.$store.getters.getServerUrl}contract/create/`,
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.contract),
            },
            alert('Успешно!')
        );
        this.dialog = false;
    },
  }
  }
</script>