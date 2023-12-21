<template>
    <ProductDetails v-if="state.productLoaded" :product="state.product" />
</template>

<script setup>
import { useProductStore } from "../store/products";
import {onBeforeMount, reactive} from "vue";
import { useRoute } from "vue-router";
import ProductDetails from "../components/ProductDetails.vue";

const route = useRoute();
const id = route.params.id;

const state = reactive({
  productLoaded: false,
  product: null
})

onBeforeMount(() => {
  retrieveProduct();
})

const retrieveProduct = async () => {
  await useProductStore().fetchProductList();
  state.product = useProductStore().productById(Number(id));
  state.productLoaded = true;
}

</script>


<style scoped>

</style>