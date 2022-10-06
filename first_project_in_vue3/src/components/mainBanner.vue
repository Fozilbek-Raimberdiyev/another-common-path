<script setup>

</script>

<template>
    <div data-aos="zoom-out-up" data-aos-delay="500" data-aos-duration="1000" class="banner-container">
    <div class="container">
       <h1 class="banner-title">Self-Paced Learning Courses Online</h1>
       <p class="banner-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam elementum. Urna, posuere nisi sit gravida massa. Ultrices bibendum sagittis pellentesque vitae sit.
       </p>
       <div class="banner-btn btn">Start a courses</div>
        <div class="bottom-info">
            <div class="left">
                <div class="icon">
                    <img src="../assets/images/banner-icon-3.png" alt="">
                </div>
                <div class="info">
                    <p class="participants-count">
                        1400+
                    </p>
                    <p class="info-description">
                        Online Courses
                    </p>
                </div>
            </div>
            <div class="center">
                <div class="icon">
                    <img src="../assets/images/banner-icon-2.png" alt="">
                </div>
                <div class="info">
                    <p class="participants-count">
                        1100+
                    </p>
                    <p class="info-description">
                        Expert Instructors
                    </p>
                </div>
            </div>
            <div class="right">
                <div class="icon">
                    <img src="../assets/images/banner-icon-1.png" alt="">
                </div>
                <div class="info">
                    <p class="participants-count">
                        800+
                    </p>
                    <p class="info-description">
                        Success Stories
                    </p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>


<style scoped>
.banner-container  {
    /* background: url("../assets/images/main-banner.png"); */
    background-size: 100% cover; 
    background-repeat: no-repeat;
    position: relative;
}
.container {
    padding: 120px 30px;
    padding-bottom: 230px;
}
.bottom-info {
    position: absolute;
    bottom: -60px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    padding: 30px;
    left: 15%;
    width: 70%;
    margin: 0 auto;
    text-align: center;
    box-shadow: 0px 11px 35px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
}
.banner-btn {
    background: #FEBC06;
    display: block;
    max-width: 150px;
    margin: 0 auto;
    padding: 10px;
}
.banner-title {
    color: #000;
    margin-bottom: 1.5rem;
    text-align: center;
}
.banner-text {
    font-size: 14px;
    color: #000;
    margin-bottom: 3rem;
    text-align: center;
}
.bottom-info > div {
    display: flex;
    align-items: center;
}
.icon img {
    width: 4.5rem;
    margin-right: 1rem;
}
.participants-count {
    font-weight: 700;
    font-size: 18px;
    margin-left: 0;
}
.info-description {
    font-size: 13px;
    color: #FEBC06;
}
</style>