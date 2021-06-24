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
    :items="buildingsList"
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
              New building
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
                      ref="BuildingID"
                      label="ID building"
                      v-model="building.BuildingID"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      ref="City"
                      label="City"
                      v-model="building.City"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      ref="Street"
                      label="Street"
                      v-model="building.Street"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      type="number"
                      ref="Number"
                      label="Number"
                      v-model="building.Number"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      ref="Type"
                      label="Type"
                      v-model="building.Type"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    
                    <v-textarea
                      class="desc-area"
                      solo
                      rows="1"
                      name="description"
                      label="Description"
                      v-model="building.Description"
                    ></v-textarea>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="12"
                    md="12">
                      <v-autocomplete
                        label="Apartments"
                        clearable
                        deletable-chips
                        multiple
                        small-chips

                        :items="apartmentsList"
                        item-value="ApartmentID"
                        item-text="ApartmentID"
                        v-model="building.Apartments"
                      ></v-autocomplete>
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
          {text: 'ID', value: 'BuildingID'},
          {text: 'City', value: 'City'},
          {text: 'Street', value: 'Street'},
          {text: 'Number', value: 'Number'},
          {text: 'Type', value: 'Type'},
          {text: 'Description', value: 'Description'},
          {text: 'Actions', value: 'actions', sortable: false },
        ],
        buildingsList: [],
        apartmentsList: [],

        editedIndex: -1,

        building: {
            BuildingID: 0,
            City: '',
            Street: '',
            Number: 0,
            Type: '',
            Description: '',
            Apartments: [],
        },

        defaultItem: {
            BuildingID: 0,
            City: '',
            Street: '',
            Number: 0,
            Type: '',
            Description: '',
            Apartments: [],
        },
      }},

   
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New building' : 'Edit building'
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
      this.LoadListBuildings();
    },

    methods: {
      async LoadListBuildings(){
        this.buildingsList = await fetch(
          `${this.$store.getters.getServerUrl}buildings/`
        ).then(response => response.json())
        this.apartmentsList = await fetch(
          `${this.$store.getters.getServerUrl}apartments/`
        ).then(response => response.json())
      },



      editItem (item) {
            this.editedIndex = this.buildingsList.indexOf(item)
            this.building = Object.assign({}, item)
            this.dialog = true
        },

      deleteItem (item) {
            this.editedIndex = this.buildingsList.indexOf(item)
            this.building = Object.assign({}, item)
            this.dialogDelete = true
        },

      async deleteItemConfirm () {
            await this.LoadListBuildings();
            await fetch(
                `${this.$store.getters.getServerUrl}building/delete/${this.building.BuildingID}/`,
                {
                  method: 'delete',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(this.building)
                }
            );
            await this.LoadListBuildings();
            this.closeDelete()
        },

      close () {
            this.dialog = false
            this.$nextTick(() => {
            this.building = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            })
        },

        closeDelete () {
            this.dialogDelete = false
            this.$nextTick(() => {
            this.building = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            })
        },

      async submitForm() {     
          await this.LoadListBuildings();
          if (this.editedIndex > -1) {
                    
            this.editBuilding();              
          } else {
            console.log(this.building)
            this.addBuilding();
          }
          this.close()
        },

      async addBuilding () {
          await fetch(
              `${this.$store.getters.getServerUrl}building/create/`,
              {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.building)
              }
          );
          await this.LoadListBuildings();
        },
        
  
        async editBuilding () {
          await fetch(
              `${this.$store.getters.getServerUrl}building/update/${this.building.BuildingID}/`,
              {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.building)
              }
          );
          await this.LoadListBuildings();
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