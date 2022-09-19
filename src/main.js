import Vue from 'vue'
import App from './app.vue'

import { BButton } from './components';
import { BCard } from './components';

Vue.component('BButton', BButton);
Vue.component('BCard', BCard);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
