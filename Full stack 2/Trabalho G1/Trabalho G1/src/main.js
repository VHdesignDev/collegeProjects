import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'


import Home from './components/Home.vue'
import Quartos from './components/Quartos.vue'
import Login from './components/Login.vue'
import Checkin from './components/Check-in.vue'
import Checkout from './components/Check-out.vue'
import Pagamento from './components/Pagamento.vue'


const router = createRouter({
history: createWebHistory(),

routes: [
  { path: '/', component: Home },
  { path: '/Quartos', component: Quartos },
  { path: '/Login', component: Login},
  { path: '/Check-in', component: Checkin},
  { path: '/Check-out', component: Checkout},
  { path: '/Pagamento', component: Pagamento},
]
});

const app = createApp(App)
app.use(router);
app.mount('#app')
