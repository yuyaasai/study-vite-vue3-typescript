import { createApp } from "vue"
import { createPinia } from "pinia"
import { createRouter, createWebHistory } from "vue-router"
import "./style.css"
import App from "./App.vue"
import RouterTest1 from "./components/RouterTest1.vue"
import RouterTest2 from "./components/RouterTest2.vue"

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/:pathMatch(.*)", name: "test1", component: RouterTest1 },
        { path: "/2", name: "test2", component: RouterTest2 }
    ]
})

app.use(router)

app.mount("#app")
