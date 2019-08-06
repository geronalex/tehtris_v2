<template>
    <div class="name-card">
        <v-card color="teal" ref="card" :dark="dark" >
            <v-responsive >
                <v-layout row justify-space-between class="ma-0">
                    <v-flex xs2>
                        <v-icon @click="deleteHero(superhero)">clear</v-icon>
                    </v-flex>
                    <v-flex xs2 class="text-sm-right">
                        <router-link :to="{ name: 'fiche', params: { id: superhero }}" class="btn btn-success" id="edit"><v-icon>info</v-icon></router-link>

                    </v-flex>
                </v-layout>
            </v-responsive>
            <v-card-text>
                <div class="layout ma-0 align-center" :class="cardLayout">
                    <v-avatar :size="avatarSize">
                        <img v-bind:src="img" v-bind:alt="superhero" >

                    </v-avatar>
                    <div class="flex" :class="textAlign">
                        <div class="superHeroName">{{superhero}}</div>
                        <span >{{alter_ego}}</span>
                    </div>
                </div>
            </v-card-text>
        </v-card>

    </div>
</template>

<script>
    export default {
        props: {
            superhero: {
                type: String,
                default: ''
            },

            img: {
                type: String,
                default: null
            },
            alter_ego: {
                type: String,
                default: ''
            },

            color: {
                type: String,
                default: ''
            },
            dark: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
            }
        },
        computed: {
            cardLayout() {
                const vm = this;
                return vm.mini ? 'row' : 'column';
            },
            textAlign() {
                const vm = this;
                return vm.mini ? 'text-sm-right' : 'text-sm-center';
            },
            avatarSize() {
                const vm = this;
                return vm.mini ? '54' : '96';
            },
        },  methods: {
            deleteHero: function (hero) {
                var tab = this.$Dc;

                for (var i = 0; i < tab.length; i++){

                    if (tab[i].superhero == hero){
                        tab.splice(i, 1);
                    }

                }

            }

        }
    }
</script>

<style>
</style>
