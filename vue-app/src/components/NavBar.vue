<script setup>

</script>

<template>
    <div class="container">
        <ul class="ul">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </ul>
    </div>
</template>

<style>
.container {
    width: 1150px;
    margin: 0 auto;
}
.ul a  {
    list-style: none;
    margin: 0 10px;
    text-decoration: none;
}
a.router-link-exact-active {
    color: #f90;
}

</style>