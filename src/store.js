import Vue from 'vue';
import Vuex from 'vuex';
import Dc from './assets/json/dc.json'
import Marvel from './assets/json/marvel.json'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
            marvel : Marvel,
            dc: Dc,
            resultFichePerso: {},
    },

    getters:{
       getMarvel(state){
           return state.marvel
       },

        getDc(state){
            return state.dc
        },

        concatTeam(state){
         return state.marvel.concat(state.dc)
        },

        getMarvelLen(state){
           return state.marvel.length
        },


    },

    mutations:{

        deleteHero (state, hero){
            var tab =[] ;
            if (hero.team ==="marvel"){

                tab = state.marvel;
            }else{
                tab = state.dc;
            }
            for (var i = 0; i < tab.length; i++){

                if (tab[i].superhero === hero.name){
                    if ( confirm( "Voulez vous vraiment supprmier le héros ?" ) ) {
                        tab.splice(i, 1);
                    }

                }

            }

        },

        save(state, hero){


            var addOrEdit="";

            var newHero = {
                "superhero": hero.superhero,
                "publisher":hero.team,
                "alter_ego":hero.alter,
                "first_appearance":hero.firstApparance,
                "characters":hero.carac,
                "img":hero.img
            };

            if (hero.team === "Marvel Comics"){

                if(hero.index !="none"){

                    state.marvel[hero.index] = newHero;
                    addOrEdit = "edit";
                }else{
                   state.marvel.push(newHero);
                   addOrEdit = "add";
                }

            }
            else{
                if(hero.index){
                    state.dc[hero.index - state.marvel.length] = newHero;
                    addOrEdit ="edit";
                }else{
                    state.dc.push(newHero);
                    addOrEdit="add";

                }
            }

            if (addOrEdit === "add"){
                alert("Votre héros a bien été ajouté !");
            }else{
                alert('Edition terminé !');
            }

        },




        generateFicheHero(state,hero){
            var tab = state.marvel.concat(state.dc);
            for (var i = 0; i < tab.length; i++) {
                if (tab[i].superhero === hero) {
                    var result ={
                        fiche:   tab[i],
                        index : i,
                        carac: tab[i].characters.split(','),

                    }
                }
            }
            state.resultFichePerso = result;

        },


    },
});

