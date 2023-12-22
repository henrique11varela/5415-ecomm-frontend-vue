<template>

  <div class="flex justify-center">
    <input type="search" v-model="searchKeyword" @input="inputFilter" id="default-search" class="block w-80 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for a product name">

  </div>

  <ProductsList v-if="productList"  :productList="productList" />
</template>

<script setup>
import ProductsList from '../components/ProductsList.vue';
import {onMounted, ref} from "vue";
import {useProductStore} from "../store/products.js";

const productStore = useProductStore();

let productList = ref(null);

 onMounted( async () =>{
    await productStore.fetchProductList();
    productList.value = productStore.allProducts;
})


let searchKeyword = "";
const inputFilter = () =>{
  productList.value = productStore.allProducts.filter(product => product.name.toLowerCase().includes(searchKeyword.toLowerCase()));
}

</script>

<style scoped>

</style>