<template>
    <div class="">
        <img :src="product.image" alt="" class="w-30 h-30">
        <h1>{{ product.name }}</h1>
        <p>{{ product.price }}</p>
        <p>{{ product.rating }}</p>
        <button class="bg-primary p-2 rounded-lg" @click="testClick">Add cart</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    }
  };
  </script>