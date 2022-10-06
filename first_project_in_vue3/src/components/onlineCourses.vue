<script setup></script>

<template>
    <div class="course-container container">
        <h1 class="course-title">Our All The Online Courses</h1>
        <p class="course-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat mauris non dictumst in leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div class="courses">
            <div class="course" v-for="(course,index) in courses" :key="index">
                <img :src="course.courseImg" alt="">
                <div class="course-stat d-flex align-items-center">
                    <div class="course-employer d-flex align-items-center justify-content-between">
                        <img :src="course.personImg" alt="">
                        <p class="course-employer-count">{{course.courseStats.employerCount}}</p>
                    </div>
                    <div class="course-watcher d-flex align-items-center justify-content-between">
                        <img :src="course.watcherImg" alt="">
                        <p class="course-watcher-count">{{course.courseStats.watcherCount}}</p>
                    </div>
                    <div class="course-teacher d-flex align-items-center justify-content-between">
                        <img :src="course.rateImg" alt="">
                        <p class="course-teacher-rate">{{course.courseStats.rateGrade}}</p>
                        <img :src="course.courseStats.teacherImg" alt="" class="course-teacher-img">
                    </div>
                </div>
                <div class="course-info d-flex align-items-center justify-content-between">
                    <h1 class="course-name">{{course.name}}</h1>
                    <p class="course-price">{{course.price}}</p>
                </div>
                <p class="course-description">{{course.description}}</p>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>