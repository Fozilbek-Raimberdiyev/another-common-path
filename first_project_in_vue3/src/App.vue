<script setup>
import { onMounted } from "@vue/runtime-core";
import AOS from "aos";
import NavBar from "./components/navBar.vue"
import MainBanner from "./components/mainBanner.vue";
import FindCourse from "./components/findCourse.vue";
import HowItWork from "./components/howItWork.vue";
import OnlineCourses from "./components/onlineCourses.vue";
onMounted(()=> {
  AOS.init()
})
</script>

<template>
 <div>
  <NavBar></NavBar>
  <MainBanner></MainBanner>
  <FindCourse></FindCourse>
  <HowItWork></HowItWork>
  <OnlineCourses></OnlineCourses>
 </div>
</template>

<style scoped>

</style>