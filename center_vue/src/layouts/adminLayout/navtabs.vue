<template>
<v-container class="mt-16 pt-6">
  <v-card flat>
    <v-toolbar
      class="back"
      dark
    >
      <template>
        <v-tabs
          v-model="tabs"
          centered
        >
          <v-tab>buildings</v-tab>
          <v-tab>appartments</v-tab>
          <v-tab>contracts</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tabs">
      <v-tab-item>
        <v-card flat>
              <buildings />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
              <appartments />
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
              <contracts />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</v-container>
</template>

<style scoped>
    .v-toolbar{
        border-radius: 0!important;
    }
    .toolbar-back {
      background: #3A3A3A !important;;
    }
</style>

<style>
  .v-application--wrap {
    min-height:auto!important;
  }
</style>


<script>
  import buildings from '@/views/rootComponents/adminpage/buildings';
  import appartments from '@/views/rootComponents/adminpage/appartments';
  import contracts from '@/views/rootComponents/adminpage/contracts';
  
  export default {
    components: {
      buildings,
      appartments,
      contracts,
  },
    data (){ 
      return {
        tabs: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      }
    },
  }
</script>