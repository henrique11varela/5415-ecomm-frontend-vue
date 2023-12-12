<script setup>
import { RouterView, RouterLink } from 'vue-router'
import MasterLayout from './layouts/Master.vue'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <MasterLayout>
    <template v-slot:header>
      <Navbar></Navbar>
    </template>
    <RouterView />
    <template v-slot:footer>
      footer placeholder
    </template>
  </MasterLayout>
</template>

<style scoped>
</style>
