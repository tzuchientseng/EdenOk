import { createApp } from 'vue';
import App from './App.vue';
import store from './store';

// Import FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Import the coin-related icons
import { faUser, faCoins } from '@fortawesome/free-solid-svg-icons';

// Add the icons to the library
library.add( faUser, faCoins);

// Create and mount the Vue app
createApp(App)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
