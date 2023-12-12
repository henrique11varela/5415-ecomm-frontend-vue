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
    <div class="flex flex-col">
      <button class="bg-primary p-2 rounded-lg flex-none" @click="testClick">Add cart</button>
    </div>
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