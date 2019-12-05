import Vue from 'vue'
import App from './App.vue'
import CompositionApi from '@vue/composition-api'
import VueRouter from 'vue-router';
import routes from './routes';
const router = new VueRouter({ routes });

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(CompositionApi)


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
