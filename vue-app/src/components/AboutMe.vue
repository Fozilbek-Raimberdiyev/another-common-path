 <script setup>
import {useCounterStore} from "@/stores/counter"
import { ref } from "@vue/reactivity"

    const store = useCounterStore()
    let name = ref("")

    function click() {
        store.firstName = name.value
        name.value = ""
    }

    let fName = ref("")
    let prop = defineProps(["prop"])
    // defineProps(["prop"])

    // const em = defineEmits(["change"])

    // function firstName() {
    //     // prop.prop.firstName = fName.value
    //     em("change", prop)
    // }
</script>

<template>
    <div>
        <hr>
        <h1>This is About Me component</h1>
        <h1>Piniadagi store.firstName : <span>{{store.firstName}}</span></h1>
        <input type="text" v-model="name">
        <button @click="click">Click</button>

        <div class="bottom">
            <h1>parent componentdan kelgan firstName: <span>{{prop.prop.firstName}}</span></h1>
            <input type="text" v-model="fName">
            <button @click="firstName">firstName</button>
        </div>
    </div>
</template>

<style scoped>
input {
    border: 1px solid #000;
    padding: 5px 10px;
    outline: none;
}
button {
    border: 1px solid #000;
    padding: 5px 10px;
    margin-left: 1px;
}
button:hover {
    background: #ccc;
}
span {
    color: red;
}
h1 {
    color: #000;
}
.bottom {
    margin-top: 2rem;
}
</style>