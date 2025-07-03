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
  <div> </div>
  <p>Escolha uma página:</p>
  <router-link to="/">Página inicial</router-link><br>
  <router-link to="/qua">Quartos</router-link><br>
  <router-link to="/log">Login</router-link>
  <div>
  <router-view></router-view>
  </div>
</template>

<style>

</style>
