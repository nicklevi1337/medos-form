<template>
  <div id="app">
    <ClientForm />
  </div>
</template>

<script>
import ClientForm from './components/ClientForm.vue'

export default {
  name: 'App',
  components: {
    ClientForm
  }
}
</script>

<style>



body  {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url('./assets/app.jpg');
  background-size: cover;
  background-position: center;
  text-align: center;
  color: #2c3e50;
}
</style>


