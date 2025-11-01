import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/Home.vue";
import Favorites from "@/components/Favorites.vue";
import Orders from "@/components/Orders.vue";

const app = createApp(App)
const pinia = createPinia()

const routes = [
    {path:'/', name:'Home', component: Home},
    {path:'/favorites', name:'Favorites', component: Favorites},
    {path:'/orders', name:'Orders', component: Orders},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

app.use(pinia)
app.use(router)

app.mount('#app')
