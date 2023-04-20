import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";

const axiosInstance = axios.create({
    baseURL: 'https://api.github.com',
});
const app = createApp(App);
app.config.globalProperties.$axios = axiosInstance;

app.use(store).use(router).mount('#app')
