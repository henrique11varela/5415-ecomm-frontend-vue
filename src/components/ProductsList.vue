<template>
  <div>
    <div class="grid grid-cols-4 max-w-full gap-8 my-10 justify-center px-40 mx-20">
      <CardShell class="w-full h-full" v-for="product in products" :key="product.id" tiltable shiny>
        <Product :product="product" />
      </CardShell>
    </div>
  </div>
</template>
  
<script>
import Product from "./Product.vue";
import CardShell from "../layouts/CardShell.vue";

export default {
  components: {
    Product,
    CardShell
  },
  data() {
    return {
      products: []
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await fetch("http://127.0.0.1:3333/products");
        const data = await response.json();
        this.products = data;
      } catch (error) {
        console.error("Message: ", error);
      }
    }
  }
};
</script>
