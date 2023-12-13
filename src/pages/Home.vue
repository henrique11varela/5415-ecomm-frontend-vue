<template>
    <img class="w-full object-cover h-80" :src="landing" alt="">
</template>

<script>
import landing from '../assets/landing.jpg'
export default {
    data() {
        return {
            landing: landing
        }
    }
}
</script>

<style scoped></style>