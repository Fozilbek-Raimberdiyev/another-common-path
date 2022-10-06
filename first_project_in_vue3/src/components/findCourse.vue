<script setup>

</script>

<template>
    <div class=" container find-container d-flex align-items-center">
        <div class="left">
            <h1 class="find-title">Find Your Course That Makes Bright Future</h1>
            <p class="find-text-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies at diam magnis faucibus et faucibus gravida.  malesuada fauci bus iaculis eu. Fusce est, consectetur tempor penatibus sed. Ut dolor, vulputate quam nec aliquam aliquam nisl. Auctor eros, iaculis quam nisi, 
            </p>
            <p class="find-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et hendrerit euismod fusce sit. 
            </p>
            <button class="find-btn btn">Learn More</button>
        </div>
        <div class="right">
            <img src="../assets/images/find-img.png" alt="">
        </div>
    </div>
</template>

<style scoped> 
.find-container {
    margin-top: 10rem;
}
.find-container  > div {
    flex-basis: 48%;
}
.right {
    border-radius: 10px;
}
.right img {
    height: 350px;
    visibility: hidden;
}
.left {
    margin-right: 1rem;
}
.find-title {
    margin-top: -10px;
}
.find-text-description {
    color: #555;
    font-size: 14px;
    margin-top: 1rem;
}
.find-text {
    font-size: 18px;
}
.find-btn {
    background: #FEBC06;
    margin-top: 2.4rem;
}
</style>
