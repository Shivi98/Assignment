<template>
  <div class="container">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src="../assets/logo.png" alt="ACE LOGO" width="100" height="30">
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="#">
            <span class="icon"><i class="fa fa-home"></i></span>
            <span> Home </span>
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#">
              Registration
            </a>
            <div class="navbar-dropdown is-boxed">
              <router-link tag="a" class="navbar-item" to="student">
                Student
              </router-link>
              <router-link class="navbar-item" to="/student">
                Faculty
              </router-link>
              <router-link class="navbar-item" to="/student">
                Department
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>

<style scoped>
</style>
