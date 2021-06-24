<template>
  <v-app>
    <pub-bar >
    </pub-bar>

    <pub-view />
    <pub-foot />
  </v-app>
</template>

<script>
export default {
  name: 'Publiclayout',
  components: {
    PubBar: () => import(/* webpackChunkName: 'public-appbar' */ './AppBar'),
    PubView: () => import(/* webpackChunkName: 'public-view' */ './View'),
    PubFoot: () => import(/* webpackChunkName: 'public-foot' */ './footer'),
  },
};
</script>
