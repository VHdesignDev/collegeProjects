import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Pag1 from './components/Pagina1.vue'
import Pag2 from './components/Pagina2.vue'

const router = createRouter({
history: createWebHistory(),
routes: [
{ path: '/pag1', component: Pag1 },
{ path: '/pag2', component: Pag2 },
]
});
const app = createApp(App)
app.use(router);
app.mount('#app')