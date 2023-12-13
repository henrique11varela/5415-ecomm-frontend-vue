<template>
  <div class="flex flex-col items-center justify-between h-full">
    <div class="grow mb-4 flex flex-col items-center">
      <img :src="product.image" class="max-w-20 max-h-20 mb-4 mx-auto">
      <h1 class="mb-4">{{ product.name }}</h1>
    </div>
    <div class="flex flex-col">
      <p class="mb-4 flex-none">{{ product.price + " €" }} </p>
      <!--<p>{{ product.rating }}</p>-->
    </div>
    <div class="flex w-full gap-2">
      <router-link class="bg-primary p-2 rounded-lg flex-1 text-light" :to="{ name: 'Product', params: { id: product.id} }">Details</router-link>
      <button class="bg-primary p-2 rounded-lg ml-1" @click="addProductToCart">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </button>
    </div>
  </div>
</template>
  
<script>
import { RouterLink } from "vue-router";
import { mapActions } from "pinia";
import { useCartStore } from "../store/cart.js";

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    testClick: function(){
      alert('clicked')
    },
    ...mapActions(useCartStore, ['addToCart']),
    addProductToCart(){
      this.addToCart(this.product.id)
    }
  }
};
</script>