<template>
  <div>
    <div class="flex flex-col mx-8 gap-8 md:grid md:grid-cols-4 md:max-w-full md:gap-8 md:my-10 md:justify-center md:px-40 md:mx-20">
      <CardShell class="w-full h-full" v-for="product in allProducts" :key="product.id" tiltable shiny>
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
  mounted() {
    this.fetchProductList();
  },
  computed: {
    ...mapState(useProductStore, ['allProducts'])
  },
  methods: {
    ...mapActions(useProductStore, ['fetchProductList']),
  }
};
</script>
