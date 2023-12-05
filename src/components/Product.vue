<template>
    <div class="">
        <img :src="product.image" alt="">
        <h1>{{ product.name }}</h1>
        <p>{{ product.price }}</p>
        <p>{{ product.rating }}</p>
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