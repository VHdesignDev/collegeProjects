<script>
  export default {
    name: 'NavigationBar'
  }
</script>
<template>
<nav>
    <ul> 
      <li><router-link style="color: white;" to="/">Home</router-link></li>
      <li><router-link style="color: white;" to="/Quartos">Quartos</router-link></li>
      <li><router-link style="color: white;" to="/Func">Funcionários</router-link></li>
      <li><router-link style="color: white;" to="/Reservas">Reservas</router-link></li>
    </ul>
  </nav>
</template>


<style>
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

  nav ul li{
    list-style: none;
    display: inline-block;
    margin: 0 10px;
    font-size: 20px;
    position: relative;
    color: white;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; 
  }
</style>