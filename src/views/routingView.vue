<template>



    <div app>
        <v-app-bar app>
            <v-toolbar-title class="text-center" id="titleNav">
                <span id="titleMsg"  >{{ $t('titleMsg') }}</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <router-link :to="{ name: 'newHero'}" class="btn btn-success">
                <v-btn>
                    <v-icon>add</v-icon>
                    {{ $t('addHeroButton') }}
                </v-btn>
            </router-link>
        </v-app-bar>


        <div style="margin-top: 10%">  <router-view></router-view></div>




    </div>

</template>
<script>

export default {

    }

</script>
<style>

    #titleMsg{
        font-weight: bold;
    }

    #titleNav{
        text-align: center;

    }
</style>
