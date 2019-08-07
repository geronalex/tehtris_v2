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

                var hero = {
                    superhero : this.name,
                    team : this.team,
                    alter : this.alterEgo,
                    firstApparance : this.firstApparance,
                    carac :this.heroCaracs,
                    img  :this.imgLink,
                    index : this._data.i,
                };


                this.$store.commit('save',hero)

            }
        },

        created: function () {

            this.$store.commit('generateFicheHero',this.$route.params.id);

            this._data.i = this.$store.state.resultFichePerso.index;
            this.team = this.$store.state.resultFichePerso.fiche.publisher;
            this.name = this.$store.state.resultFichePerso.fiche.superhero;
            this.firstApparance = this.$store.state.resultFichePerso.fiche.first_appearance;
            this.alterEgo = this.$store.state.resultFichePerso.fiche.alter_ego;
            this.heroCaracs = this.$store.state.resultFichePerso.fiche.characters;
            this.imgLink = this.$store.state.resultFichePerso.fiche.img;


        }
    }
</script>
