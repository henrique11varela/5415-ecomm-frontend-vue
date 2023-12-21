<script setup>
import { RouterView, RouterLink } from 'vue-router'
import MasterLayout from './layouts/Master.vue'
import Navbar from './components/Navbar.vue'

import Cart from './components/Cart.vue'
import Intro from './components/Intro.vue'


</script>

<template>
  <MasterLayout>
    <template v-slot:header>
      <Navbar></Navbar>
    </template>
      
     
       <Intro></Intro>
    
      
      <RouterView />
      <Cart />

    <template v-slot:footer>
      footer placeholder
    </template>
  </MasterLayout>
</template>

<style scoped>
</style>
