console.log("testando vue")

// vue não usa ;
// string usa ''
// 
const app = Vue.createApp({
  data(){
    return{
      mostrarJogo: true,
      jogos: [
        {nome: 'Super Mario', fabricante: 'Nintendo', preco: '20'},
        {nome: 'Sonic', fabricante: 'Sega', preco: '20'},
        {nome: 'Pac Man', fabricante: 'Namco', preco: '20'}
        ]
    }
  }
})

app.mount('#app')