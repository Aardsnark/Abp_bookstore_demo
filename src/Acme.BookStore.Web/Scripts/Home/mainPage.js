import { createApp } from 'vue'; // Import createApp function from Vue 3
import { createVuetify } from 'vuetify';
import App from "../../Vue/main-page.vue";
//import * as proxy from "../../wwwroot/client-proxies/app-proxy.js"

//would it work with multiple components?
const app = createApp(App);
const vuetify = createVuetify();

app.use(vuetify);
//app.provide("proxy", proxy);
//app.use(abp);


app.mount('#myApp');