<template>
  <div class="flex justify-center">
    <div class="flex flex-col mx-8 my-4 gap-6 sm:flex-wrap md:flex-wrap lg:flex-wrap md:max-w-40 md:flex-1 justify-center md:flex-row md:my-10 md:px-0 md:mx-20 ">

      <CardShell class="w-80" v-for="product in productList" :key="product.id" tiltable shiny>
        <Product :product="product" />
      </CardShell>
    </div>
  </div>
</template>
  
<script>
import Product from "./Product.vue";
import CardShell from "../layouts/CardShell.vue";
import { mapActions, mapState } from "pinia";
import { useProductStore } from "../store/products.js";

export default {
  components: {
    Product,
    CardShell
  },
  props: {
    productList: {
      type: Array,
      required: true
    }
  },
};
</script>
