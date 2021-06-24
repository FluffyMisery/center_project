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
    :items="appartmentsList"
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
              New apartment
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
                      ref="ApartmentID"
                      label="ID apartment"
                      v-model="apartment.ApartmentID"
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
                      v-model="apartment.Number"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      type="number"
                      ref="Square"
                      label="Square"
                      v-model="apartment.Square"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      type="number"
                      ref="Cost"
                      label="Cost"
                      v-model="apartment.Cost"
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
                      v-model="apartment.Description"
                    ></v-textarea>
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
          {text: 'ID', value: 'ApartmentID'},
          {text: 'Number', value: 'Number'},
          {text: 'Square', value: 'Square'},
          {text: 'Description', value: 'Description'},
          {text: 'Cost', value: 'Cost'},
          {text: 'Actions', value: 'actions', sortable: false },
        ],
        appartmentsList: [],
        editedIndex: -1,

        apartment: {
            ApartmentID: 0,
            Number: 0,
            Square: 0,
            Description: '',
            Cost: 0,
        },

        defaultItem: {
            ApartmentID: 0,
            Number: 0,
            Square: 0,
            Description: '',
            Cost: 0,
        },
      }},

   
    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New apartment' : 'Edit apartment'
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
      this.LoadListAppartments();
    },

    methods: {
      async LoadListAppartments(){
        this.appartmentsList = await fetch(
          `${this.$store.getters.getServerUrl}apartments/`
        ).then(response => response.json())
      },



      editItem (item) {
            this.editedIndex = this.appartmentsList.indexOf(item)
            this.apartment = Object.assign({}, item)
            this.dialog = true
        },

      deleteItem (item) {
            this.editedIndex = this.appartmentsList.indexOf(item)
            this.apartment = Object.assign({}, item)
            this.dialogDelete = true
        },

      async deleteItemConfirm () {
            await this.LoadListAppartments();
            await fetch(
                `${this.$store.getters.getServerUrl}apartment/delete/${this.apartment.ApartmentID}/`,
                {
                  method: 'delete',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(this.apartment)
                }
            );
            await this.LoadListAppartments();
            this.closeDelete()
        },

      close () {
            this.dialog = false
            this.$nextTick(() => {
            this.apartment = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            })
        },

        closeDelete () {
            this.dialogDelete = false
            this.$nextTick(() => {
            this.apartment = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
            })
        },

      async submitForm() {     
          await this.LoadListAppartments();
          if (this.editedIndex > -1) {
                    
            this.editAppartment();              
          } else {
            console.log(this.apartment)
            this.addAppartment();
          }
          this.close()
        },

      async addAppartment () {
        
          await fetch(
              `${this.$store.getters.getServerUrl}apartment/create/`,
              {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.apartment)
              }
          );
          await this.LoadListAppartments();
        },
        
  
        async editAppartment () {
          await fetch(
              `${this.$store.getters.getServerUrl}apartment/update/${this.apartment.ApartmentID}/`,
              {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.apartment)
              }
          );
          await this.LoadListAppartments();
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