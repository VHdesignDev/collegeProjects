console.log("testando vue")

// vue não usa ;
// string usa ''
// 
const app = Vue.createApp({
  data(){
    return{
      mostrarJogo: true,
      linkLoja: "loja.html",
      jogos: [
      {nome: 'Super Mario', fabricante: 'Nintendo', preco: '20', carrinho:'assets/carro'},
      {nome: 'Sonic', fabricante: 'Sega', preco: '20', carrinho:'assets/carro'},
      {nome: 'Pac Man', fabricante: 'Namco', preco: '20', carrinho:'assets/carro'}
        ]
    }
  }
})

app.mount('#app')