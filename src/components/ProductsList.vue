<template>
  <div>
    <div class="flex flex-col mx-8 gap-8 md:flex-wrap md:max-w-full md:flex-1 md:flex-row md:my-10 md:justify-center md:px-40 md:mx-20">

      <CardShell class="w-full h-50 md:max-w-48" v-for="product in productList" :key="product.id" tiltable shiny>
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
  mounted() {
    console.log(this.productList)
  }
};
</script>
