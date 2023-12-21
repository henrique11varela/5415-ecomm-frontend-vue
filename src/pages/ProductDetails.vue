<template>
    <DetailsProduct v-if="state.productLoaded" :product="state.product" />
</template>

<script setup>
import { useProductStore } from "../store/products";
import {onBeforeMount, reactive} from "vue";
import { useRoute } from "vue-router";
import DetailsProduct from "../components/DetailsProduct.vue";

const route = useRoute();
const id = route.params.id;
const productStore = useProductStore();

const state = reactive({
  productLoaded: false,
  product: null
})

onBeforeMount(() => {
  retrieveProduct();
})

const retrieveProduct = async () => {
  await productStore.fetchProductList();
  state.product = useProductStore().productById(Number(id));
  state.productLoaded = true;
}

</script>


<style scoped>

</style>