<template>
    <div>
      <h1>Products List</h1>
      <produto v-for="product in products" :key="product.id" :product="product" />
    </div>
  </template>
  
  <script>
  import Product from "./Product.vue";
  
  export default {
    components: {
      Product
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
            const response = await fetch("API");
            const data = await response.json();
            this.products = data;
        } catch (error) {
            console.error("Message: " , error);
        }
      }
    }
  };
  </script>