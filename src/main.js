import Vue from 'vue'
import App from './App.vue'
import routingView from './views/routingView'
import router from './router'
import vuetify from './plugins/vuetify';
import VueI18n from 'vue-i18n'
import i18n from './lang/message'
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { store } from './store';

Vue.config.productionTip = false
Vue.use(VueI18n)




new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(routingView)
}).$mount('#app')
