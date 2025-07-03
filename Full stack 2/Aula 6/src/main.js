import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Login from './components/Login.vue'
import Quartos from './components/Quartos.vue'

const router = createRouter({
history: createWebHistory(),
routes: [
{ path: '/qua', component: Quartos },
{ path: '/log', component: Login },
]
});
const app = createApp(App)
app.use(router);
app.mount('#app')