<script>
export default {
  data() {
    return {
      activeComp: '' }
    }
  };
//import component1 from './components/component1.vue';
//import component2 from './components/component2.vue';
</script>

<template>
  <p>Escolha uma página:</p>
  <router-link to="/">Página inicial</router-link><br>
  <router-link to="/pag1">Página 1</router-link><br>
  <router-link to="/pag2">Página 2</router-link>
  <div>
  <router-view></router-view>
  </div>
</template>

<style>

button{
  background-color: rgb(15, 42, 102);
  border-radius: 100%;
  width: 80px;
  height: 30px;
  color: white;
  border: none;
};
</style>
