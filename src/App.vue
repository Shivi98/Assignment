<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './components/Navigation.vue'
  export default {
    components: {
      Navbar
    }
  }
</script>
<style>

</style>
