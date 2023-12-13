<template>
  <div>
    <div class="flex flex-col mx-8 gap-8 md:grid md:grid-cols-4 md:max-w-full md:gap-8 md:my-10 md:justify-center md:px-40 md:mx-20">
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
