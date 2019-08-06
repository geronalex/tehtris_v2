<template>

    <form>
        <legend class="text-center">{{ $t('editHeroTitle') }}</legend>



        <v-text-field
                v-model="team"
                v-bind:label="$t('heroTeam')"
                required
                readonly

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

        <router-link  :to="{ name: 'fiche' ,params: { id: this.name }}"><v-btn @click="save" class="mr-4" > <v-icon>save</v-icon>{{ $t('saveBtn') }}</v-btn></router-link>
        <router-link :to="{ name: 'fiche' ,params: { id: this.name }}"  style="float: right"> <v-btn class="mr-4"><v-icon>keyboard_backspace</v-icon>{{ $t('backBtn') }}</v-btn></router-link>

    </form>
</template>

<script>

    export default {


        data: () => ({
            name: '',
            firstApparance: '',
            alterEgo: '',
            heroCaracs:'',
            imgLink:'',
            team:'',
            checkbox: false,
        }),


        methods: {
            save : function(){

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

                    this.$Marvel[this._data.i] = newHero;
                }
                else{
                    console.log(newHero);
                    console.log(this._data.i - 10);
                    this.$Dc[this._data.i- 10] = newHero;
                }
                console.log(this.$Dc);
                alert('Done !');

            }
        },

        created: function () {
            var tab = this.$Marvel.concat(this.$Dc)

            for (var i = 0; i < tab.length; i++) {
                if (tab[i].superhero === this.$route.params.id) {
                    this._data.i = i
                    this.team = tab[i].publisher
                    this.name = tab[i].superhero
                    this.firstApparance = tab[i].first_appearance
                    this.alterEgo = tab[i].alter_ego
                    this.heroCaracs = tab[i].characters
                    this.imgLink = tab[i].img
                }
            }
        }
    }
</script>
