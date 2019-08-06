
<template>

    <v-container>
    <v-layout>
    <v-flex>
        <v-btn id="marvels" color="red"
                dark
                @click="showMarvel">
            Marvel
        </v-btn>
        <v-btn id="dc" color="blue"
                dark
                @click="showDC">
            DC Comics
        </v-btn>

    </v-flex>
    </v-layout>
    </v-container>
</template>
<script>


    export default {
        name: 'ChoixEquipe',

        methods: {
            showMarvel: function (){
              var  marvel = document.getElementById('marvel');
                if (marvel.style.display === "none") {
                    marvel.style.display = "inline-block";
                } else {
                    marvel.style.display = "none";
                }
            },

            showDC: function (){
                var  DC = document.getElementById('DC');
                if (DC.style.display === "none") {
                    DC.style.display = "inline-block";
                } else {
                    DC.style.display = "none";
                }
            },

        },
    }
</script>
<style>
#marvels{
    float: left;
}
    #dc{
        float: right;
    }

</style>
