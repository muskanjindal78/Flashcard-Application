<template>

<nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <head>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,400i,600,700,700i&display=swap" rel="stylesheet">
    <link href="./static/css/bootstrap.css" rel="stylesheet">
    <link href="./static/css/swiper.css" rel="stylesheet">
	<link href="./static/css/magnific-popup.css" rel="stylesheet">
    <link href="./static/css/fontawesome-all.css" rel="stylesheet">
	<link href="./static/css/styles.css" rel="stylesheet">
    
    <!-- Favicon  -->
    <link rel="icon" href="./static/images/favicon.png">

    <title>Flash Card App</title>
    </head>
  <div class="navbar-menu row">
    <div class="navbar-start">
      <router-link to="/" class="navbar-item">
        Home
      </router-link>
      <router-link v-if="!isAuthenticated" to="/Login" class="navbar-item">
        Login / Register
      </router-link>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  
}
</script>

<style>
    @import './static/css/styles1.css';
</style>