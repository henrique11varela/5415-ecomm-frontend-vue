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
      <button v-if="productById(product.id).quantity > 0 && productById(product.id).quantity > (cartItemById(product.id) || {quantity:0}).quantity" class="bg-primary p-2 rounded-lg ml-1" @click="addProductToCart">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
      </button>
    </div>
  </div>
</template>
  
<script>
import { RouterLink } from "vue-router";
import { mapActions, mapState } from "pinia";
import { useCartStore } from "../store/cart.js";
import { useProductStore } from "../store/products.js";
import { useToastStore } from "../store/toast.js";

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(useCartStore, ['addToCart']),
    ...mapActions(useToastStore, ['CreateToast']),
    addProductToCart(){
      this.addToCart(this.product.id)
      this.CreateToast(`Added item to cart`, 3)
    }
  },
  computed: {
    ...mapState(useProductStore, ['productById']),
    ...mapState(useCartStore, ['cartItemById'])
  }
};
</script>