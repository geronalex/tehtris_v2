<template>

    <v-container id="marvel" grid-list-xl fluid>

        <h4>Marvel</h4>
        <v-layout  row wrap>


            <v-flex  lg3 sm12 v-for="(item,index) in users" :key=" index">
                <marvel-list
                        v-bind="item">
                </marvel-list>
            </v-flex>

        </v-layout>



    </v-container>



</template>

<script>
    import MarvelList from "../components/marvelList";

    export default {
        components: {MarvelList,
        },
        data () {
            return {
                users: this.$Marvel
            }
        }
    }
</script>

<style>

    #marvel{
        display: none;
    }
</style>
