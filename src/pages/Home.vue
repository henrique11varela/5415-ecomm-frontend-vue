<template>
  <div class="mt-0">
    <img class="w-full object-cover h-80" :src="landing" alt="">
    <div class="h-full">
      <HomePageText></HomePageText>
    </div>
  </div>
</template>
<script>
import landing from '../assets/landing.jpg'
import HomePageText from '../components/HomePageText.vue';
export default {
    components: {
        HomePageText
    },
    data() {
        return {
            landing: landing
        }
    }
}
</script>
