<script>
  export default {
    name: 'NavigationBar'
  }
</script>
<template>
  <div class="img"></div>
  <nav>
  <ul> 
    <li><router-link style="color: white;" to="/">Home</router-link></li>
    <li><router-link style="color: white;" to="/Quartos">Quartos</router-link></li>
    <li><router-link style="color: white;" to="/Check-in">Check-in</router-link></li>
    <li><router-link style="color: white;" to="/Check-out">Check-out</router-link></li>
    <li><router-link style="color: white;" to="/Pagamento">Pagamento</router-link></li>
    <div><router-link to="/Login"><img src="./icons/user2.png" style="height: 15px;"></router-link></div>
  </ul>
</nav>
</template>


<style>
*{
  margin: 0px;
  text-decoration: none;
}
nav{
    width: 100%;
    height: 25px;
    margin: 0px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(92, 131, 116);
  }
  ul{
    padding-left: 30vw;
  }
nav ul li{
    list-style: none;
    display: inline-block;
    margin: 0 10px;
    font-size: 20px;
    position: relative;
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
  }
nav ul div{
    display: inline-block;
    margin: 0 10px;
    font-size: 20px;
    position: relative;
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
  
.img{
  height: 300px;
  width: 100%;
  background-image: linear-gradient(rgba(0,0,0,0.75),rgba(0,0,0,0.75)), url(./icons/imghotel.png);
  background-size: cover;
  background-position: center;
}

nav ul li:hover::after{
    width: 100%;
  }
nav ul div:hover{
    scale: 1.2;
  }
nav ul li::after{
    content: ' ';
    height: 4px;
    width: 0%;
    background: rgb(255, 255, 255);
    position: absolute;
    left: 0;
    bottom:  -5px;
    transition: 0.5s;
  }
.conteudoQ{
  margin: 20px;
  display: flex;
  padding: 10px;
  align-items: flex-end;
  max-width: 100%;
}
.conteudoQ img{
  border-radius: 5%;
  transition: 0.3s;
}

.conteudoQ img:hover{
  scale: 1.05;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
} 

.conteudoQ h1{
  color: 040d12;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  margin-left: 15px;
  font-size: 50px;

}  
.conteudoQ p{
  color: gray;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  margin-left: 15px;
  margin-top: 15px;
}  
.conteudoQ .detalhe{
  height: 10px;
  background-color: rgb(92, 131, 116);
  border-radius:5px;
  width: 200px;
  margin-bottom: 75px;
  margin-left: 20px;
  
}
button {
  align-self:flex-end;
  background-color: rgb(92, 131, 116);
  color: #fff;
  padding: 8px;
  margin-left: 100px;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  transition: 0.5s;
  max-height: 20%;
}

button:hover{
  scale: 1.05;

}
.conteudoH{
  margin: 20px;
  display: flex;
  padding: 10px;
  max-width: 80%;
  align-items: center;
}
.conteudoH h1{
  color: 040d12;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  margin-left: 15px;
  font-size: 50px;

}  
.conteudoH p{
  color: gray;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  margin-left: 15px;
  margin-top: 15px;
}
.conteudoH img{
  border-radius: 15px;
  margin-left: -50px;
  margin-top: 0;
  max-height: 300px;
}

</style>