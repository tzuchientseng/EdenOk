import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import FontAwesome icons
import { faUser, faCoins, faHouseChimney } from '@fortawesome/free-solid-svg-icons';

// Add the icons to the library
library.add(faUser, faCoins, faHouseChimney);

// Create and mount the Vue app
createApp(App)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
