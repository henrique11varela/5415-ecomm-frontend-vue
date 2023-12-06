<script setup>
import { RouterView, RouterLink } from 'vue-router'
import MasterLayout from './layouts/Master.vue'
</script>

<template>
  <MasterLayout>
    <template v-slot:header>
      header placeholder
      <RouterLink :to="{name: 'Home'}">home</RouterLink>
      <RouterLink :to="{name: 'Contacts'}">contacts</RouterLink>
    </template>
    <RouterView />
    <template v-slot:footer>
      footer placeholder
    </template>
  </MasterLayout>
</template>

<style scoped>
</style>
