<template>
    <div>
      <h1>Products List</h1>
      <CardShell v-for="product in products" :key="product.id" tiltable shiny>
        <Product :product="product" />
      </CardShell>
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
            console.error("Message: " , error);
        }
      }
    }
  };
  </script>