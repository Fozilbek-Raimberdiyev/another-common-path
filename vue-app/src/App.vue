<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
<div class="container">
  <NavBar></NavBar>
  <router-view></router-view>
</div>
</template>

<style>
 .container {
  width: 1150px;
  margin: 0 auto;
 }
</style>