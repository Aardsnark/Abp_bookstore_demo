import { createApp } from 'vue'; // Import createApp function from Vue 3
import { createVuetify } from 'vuetify';
/*to be added*/
import Authors from "../../Vue/authors.vue";

const app = createApp(Authors);
const vuetify = createVuetify();

app.use(vuetify);
app.mount('#books');