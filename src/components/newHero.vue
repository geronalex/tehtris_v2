<template>

    <form>
        <legend class="text-center">{{ $t('addHeroTitle') }}</legend>



        <v-text-field
                v-model="team"
                v-bind:label="$t('newHeroTeam')"
                required
                @change="testTeam"
        ></v-text-field>
        <v-text-field
                v-model="name"
                v-bind:label="$t('heroName')"
                required
        ></v-text-field>
        <v-text-field
                v-model="firstApparance"
                v-bind:label="$t('heroFirstApp')"
                required
        ></v-text-field>
        <v-text-field
                v-model="alterEgo"
                v-bind:label="$t('heroAlter')"
                required

        ></v-text-field>
        <v-text-field
                v-model="heroCaracs"
                v-bind:label="$t('heroCarac')"
                required

        ></v-text-field>

        <v-text-field
                v-model="imgLink"
                v-bind:label="$t('imgLink')"
                required

        ></v-text-field>

        <router-link  :to="{ name: 'home'}"><v-btn @click="save" class="mr-4" > <v-icon>save</v-icon>{{ $t('saveBtn') }}</v-btn></router-link>
        <router-link :to="{ name: 'home'}"  style="float: right"> <v-btn class="mr-4"><v-icon>keyboard_backspace</v-icon>{{ $t('backBtn') }}</v-btn></router-link>
    </form>
</template>
<script>


    export default {
        name: 'newHero',
        data: () => ({
            name: '',
            firstApparance: '',
            alterEgo: '',
            heroCaracs:'',
            imgLink:'',
            team:'',
            checkbox: false,
        }),
        methods:{


            testTeam : function() {

              if (this.team === "DC Comics"  || this.team === "Marvel Comics"){

              }
              else {

                  alert("Merci d'indiquer un nom de team valide");
                  this.team = null
              }
            },

            save: function () {
                var superhero = this.name;
                var team = this.team;
                var alter = this.alterEgo;
                var firstApparance = this.firstApparance;
                var carac = this.heroCaracs;
                var img = this.imgLink;


                var newHero = {
                    "superhero": superhero,
                    "publisher":team,
                    "alter_ego":alter,
                    "first_appearance":firstApparance,
                    "characters":carac,
                    "img":img
                };

                if (team === "Marvel Comics"){
                    this.$Marvel.push(newHero);
                }
                else{
                    this.$Dc.push(newHero);
                }
                alert("Votre héros a bien été ajouté !");
            }
        }

    }
</script>
