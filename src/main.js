// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLodash from 'vue-lodash';
import lodash from 'lodash'
import App from './App'
// import router from './router'

Vue.config.productionTip = false
import './assets/css/test.css';
import 'vuetify/dist/vuetify.min.css';

const vuetifyOptions = {
  icons: {
      iconfont: 'md',
  }
};

Vue.use(VueAxios, axios)
Vue.use(Vuetify);
Vue.use (VueLodash, {lodash});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  vuetify: new Vuetify(vuetifyOptions),
  components: { App },
  template: '<App/>'
})