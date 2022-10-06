<script setup>
import { ref } from "@vue/reactivity";

    const currentBtn = ref("signup");
    const currentPage = ref("home");

</script>

<template>
    <div data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500" class="container">
    <header class="navbar align-items-start">
        <div class="logo">
            <h1>Ansor Education</h1>
        </div>
        <nav class="navbar-navigation">
            <ul class="d-md-flex align-items-center">
                <li @click="currentPage='home'" :class="{active : currentPage=='home'}">Home <span>></span></li>
                <li @click="currentPage='courses'" :class="{active : currentPage=='courses'}">Courses <span>></span></li>
                <li @click="currentPage='page'" :class="{active : currentPage=='page'}">Page <span>></span></li>
                <li @click="currentPage='blog'" :class="{active : currentPage=='blog'}">Blog <span>></span></li>
                <li @click="currentPage='contact'" :class="{active : currentPage=='contact'}">Contact</li>
            </ul>
        </nav>
        <div class="auth-form">
            <button :class="{active : currentBtn == 'signin'}" @click="currentBtn='signin'" class="btn">Sign in</button>
            <button :class="{active : currentBtn == 'signup'}" @click="currentBtn='signup'" class="btn">Sign up</button>
        </div>
    </header>
  </div>
</template>

<style scoped>
.navbar {
    padding: 20px 0;
}
.logo {
    flex-basis: 35%;
}
.logo h1 {
    color: #202020;
    font-size: 1.5rem;
    cursor: pointer;
}
.navbar-navigation {
    flex-basis: 40%;
}
.auth-form {
    flex-basis: 25%;
    text-align: right;
}
.auth-form .btn.active{
    background: #FEBC06;
    color: #fff;
}
.btn {
    color: #000;
}
.navbar-navigation ul {
    list-style: none;
    justify-content: space-between;
    flex-basis: 50%;
}
.navbar-navigation li {
    cursor: pointer;
    font-size: 15px;
    font-weight: 600;
}
.navbar-navigation li span {
    transform: rotate(90deg);
    display: inline-block;
}
.navbar-navigation li.active {
    color: #FEBC06;
}
</style>