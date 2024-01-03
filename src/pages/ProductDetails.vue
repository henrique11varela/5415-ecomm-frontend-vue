<template>
  <DetailsProduct v-if="product" :product="product" />
</template>

<script setup>
import { useProductStore } from "../store/products";
import {computed, onBeforeMount, reactive} from "vue";
import { useRoute } from "vue-router";
import DetailsProduct from "../components/DetailsProduct.vue";

const route = useRoute();
const id = route.params.id;
const productStore = useProductStore();

const product = computed(()=>{
return productStore.productById(Number(id))
})

</script>


<style scoped>

</style>