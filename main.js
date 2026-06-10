import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

export const API_BASE = "https://yi2hd46tg1.execute-api.us-east-1.amazonaws.com";

createApp(App).use(router).mount('#app')
