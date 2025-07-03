import { createApp } from 'vue'
// import { createRouter, createWebHistory } from 'vue-router'
// import Cadastro from './components/Cadastro.vue'
// import Func from './components/Func.vue'
// import Quartos from './components/Quartos.vue'
// import Reservas from './components/Reservas.vue'
// import Home from './components/Home.vue'
import './style.css'
import App from './App.vue'

// app.use(Cadastro);
// app.use(Func);
// app.use(Quartos);
// app.use(Reservas);

// const router = createRouter({
//     history: createWebHistory(),
    
//     routes: [
//       { path: '/', component: Home },
//       { path: '/Quartos', component: Quartos },
//       { path: '/Reservas', component: Reservas},
//       { path: '/Func', component: Func},
//       { path: '/Cadastro', component: Cadastro},
//     ]
//     });



const app = createApp(App)
// app.use(router);
app.mount('#app');
