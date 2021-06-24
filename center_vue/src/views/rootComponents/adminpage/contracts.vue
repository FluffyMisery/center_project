<template>
<v-container>
  <v-card-title class="pl-0 pr-0">
    <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
    ></v-text-field>
    </v-card-title>
  <v-data-table
    :headers="headers"
    :items="contractsList"
    sort-by="discipline_id"
    class="elevation-0"
    :search="search"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="700px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="gray"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New contract
            </v-btn>
          </template>
         <v-card ref="form">
            <v-form @submit.prevent="submitForm"> 
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      type="number"
                      ref="ContractID"
                      label="ID contract"
                      v-model="contract.ContractID"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      type="number"
                      ref="AgentID"
                      label="ID agent"
                      v-model="contract.AgentID"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      type="number"
                      ref="ClientID"
                      label="ID client"
                      v-model="contract.ClientID"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      type="number"
                      ref="ApartmentID"
                      label="ID appartment"
                      v-model="contract.ApartmentID"
                    ></v-text-field>
                  </v-col>
                   
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                     <v-autocomplete
                        label="Status"
                        v-model="contract.Status"
                        :items="statuses"
                      ></v-autocomplete>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      type="date"
                      label="Start date"
                      v-model="contract.startDate"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      type="date"
                      label="End date"
                      v-model="contract.endDate"
                    ></v-text-field>
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
                Save
              </v-btn>
            </v-card-actions>
            </v-form>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>

</v-container>
</template>

<style scoped>

</style>


<script>
  export default {
    name: 'Contracts-table',

    data ()  {
     return {
        dialog: false,
        dialogDelete: false,
        search: '',
        headers: [
          {text: 'ID', value: 'ContractID'},
          {text: 'Agent', value: 'AgentID'},
          {text: 'Client', value: 'ClientID'},
          {text: 'Apartment', value: 'ApartmentID'},
          {text: 'Start date', value: 'startDate'},
          {text: 'End date', value: 'endDate'},
          {text: 'Status', value: 'Status'},
          {text: 'Actions', value: 'actions', sortable: false },
        ],
        contractsList: [],
        editedIndex: -1,
        statuses: ['На подтверждении', 'Активен', 'Завершен'],

        contract: {
            ContractID: 0,
            Status: '',
            AgentID: 0,
            ClientID: 0,
            ApartmentID: 0,
            startDate: '',
            endDate: ''
        },

        defaultItem: {
            ContractID: 0,
            Status: '',
            AgentID: 0,
            ClientID: 0,
            ApartmentID: 0,
            startDate: '',
            endDate: ''
        },
      }},

   
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New contract' : 'Edit contract'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.LoadListContracts();
    },

    methods: {
      async LoadListContracts(){
        this.contractsList = await fetch(
          `${this.$store.getters.getServerUrl}contracts/`
        ).then(response => response.json())
      },



      editItem (item) {
            this.editedIndex = this.contractsList.indexOf(item)
            this.contract = Object.assign({}, item)
            this.dialog = true
        },

      deleteItem (item) {
            this.editedIndex = this.contractsList.indexOf(item)
            this.contract = Object.assign({}, item)
            this.dialogDelete = true
        },

      async deleteItemConfirm () {
            await this.LoadListContracts();
            await fetch(
                `${this.$store.getters.getServerUrl}contract/delete/${this.contract.ContractID}/`,
                {
                  method: 'delete',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(this.contract)
                }
            );
            await this.LoadListContracts();
            this.closeDelete()
        },

      close () {
            this.dialog = false
            this.$nextTick(() => {
            this.contract = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            })
        },

        closeDelete () {
            this.dialogDelete = false
            this.$nextTick(() => {
            this.contract = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            })
        },

      async submitForm() {        
        switch(this.contract.Status) {
          case 'На подтверждении':
            this.contract.Status = 'v'
            break;
          case 'Активен':
            this.contract.Status = 'l'
            break;
          case 'Завершен':
            this.contract.Status = 'f'
            break;
        }


            await this.LoadListContracts();
            if (this.editedIndex > -1) {
                      
              this.editContract();              
            } else {
              console.log(this.contract)
              this.addContract();
            }
            this.close()
        },

      async addContract () {
        
          await fetch(
              `${this.$store.getters.getServerUrl}contract/create/`,
              {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.contract)
              }
          );
          await this.LoadListContracts();
        },
        
  
        async editContract () {
          await fetch(
              `${this.$store.getters.getServerUrl}contract/update/${this.contract.ContractID}/`,
              {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.contract)
              }
          );
          await this.LoadListContracts();
          this.stusent = {};
        }
    },
  }
</script>

<style>
.v-toolbar__content, .v-toolbar__extension {
  padding:4px 0;
}
</style>