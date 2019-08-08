// eslint-disable-next-line no-unused-vars
import Vue from 'vue'
import Router from 'vue-router'


import App from './App.vue'


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },

    {
      path: '/edit/:id',
      name: 'edit',

      component: () => import(/* webpackChunkName: "edit" */ './views/editHero.vue')
    },
    {
      path: '/fiche/:id',
      name: 'fiche',

      component: () => import(/* webpackChunkName: "edit" */ './views/ficheHero.vue')
    },
    {
      path:"/new",
      name:"newHero",
      component: require('./components/newHero.vue').default,



    }


  ]
})
