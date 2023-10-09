import { createApp } from 'vue'; // Import createApp function from Vue 3
import { createVuetify } from 'vuetify';
import Books from "../../Vue/books.vue";

const app = createApp(Books);
const vuetify = createVuetify();

app.use(vuetify);
app.mount('#books');