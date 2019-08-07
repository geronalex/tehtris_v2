<template>

    <v-container id="DC" grid-list-xl fluid>

        <h4>Dc Comics</h4>
        <v-layout  row wrap>


            <v-flex  lg3 sm12 v-for="(item,index) in users" :key=" index">
                <dc-list
                        v-bind="item">
                </dc-list>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>
    import DcList from "../components/dcList";

    export default {
        components: {DcList,
        },
        computed:{
            users(){
                return this.$store.getters.getDc;
            }
        }
    }
</script>

<style>
    #DC{
        display: none;
    }
</style>
