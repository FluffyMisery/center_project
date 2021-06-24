<template>
  <v-app>
    <pub-bar >
    </pub-bar>

    <pub-view />

    <PubFooter />
  </v-app>
</template>

<script>
export default {
  name: 'authorizelayout',
  components: {
    PubBar: () => import(/* webpackChunkName: 'public-appbar' */ './AppBar'),
    PubView: () => import(/* webpackChunkName: 'public-view' */ './View'),
    PubFooter: () => import(/* webpackChunkName: 'public-footer' */ './Footer'),
  },
};
</script>
