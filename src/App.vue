<template>


  <v-app>
    <div>
      <p id="welcomeMsg" class="text-center">
        {{ $t('welcomeMsg') }}</p>
    </div>
    <v-content>
      <choix-equipe/>
      <marvel-list-page/>
      <dc-list-page/>

    </v-content>


  </v-app>
</template>

<script>
  import dcListPage from './views/dcListPage';
  import choixEquipe from "./components/choixEquipe";
  import marvelListPage from './views/marvelListPage';
  export default {
    name: 'App',
    components: {
      dcListPage,
      choixEquipe,
      marvelListPage,
    },
    data: () => ({
      //
    }),
  };
</script>

<style>
  #welcomeMsg{


    font-size: 18px;
  }
</style>
