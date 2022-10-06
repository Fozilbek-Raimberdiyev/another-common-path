<script setup>
import { ref } from '@vue/reactivity';
import AboutMe from './AboutMe.vue';

    let prop  = ref({
        firstName: "John",
        lastName: "Doe",
        job: "programmer"
    })

    // function change(e) {
    //     console.log(e)
    // }
</script>

<template>
    <div>
        <h1>This is About Page</h1>
        <AboutMe :prop="prop"></AboutMe>
    </div>
</template>

<style scoped>

</style>