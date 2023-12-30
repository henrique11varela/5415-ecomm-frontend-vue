<script setup>
import { RouterView, RouterLink } from 'vue-router'
import MasterLayout from './layouts/Master.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

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
      <Footer></Footer>
    </template>
  </MasterLayout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300;700;900&family=Ubuntu:wght@300;500&display=swap');

Body{
  font-family: 'Ubuntu', sans-serif;
  font-weight: 300;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: #070b0f;
}

/* escolhi esta font, dont judge me */
/* 🫶🫶🫶🫶🫶🫶 */
</style>
