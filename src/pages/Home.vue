<template>
  <div class=" flex flex-col absolute top-0 bottom-0 right-0 left-0 items-center">
    <img class="w-full object-cover h-80" :src="landing" alt="">
    <div class=" flex flex-1 items-center">
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
