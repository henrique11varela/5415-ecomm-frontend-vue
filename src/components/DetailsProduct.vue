<script setup>
import {defineProps, onMounted, ref } from 'vue'
import StarRating from "./StarRating.vue";

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

let buyQuantity = ref(1);

onMounted(() => {
  console.log(props.product)
})




function increment() {
    if(buyQuantity.value < props.product.quantity) buyQuantity.value++;
  console.log(buyQuantity)
}

function decrement() {
  if(buyQuantity.value > 1) buyQuantity.value--;
  console.log(buyQuantity)
}

</script>

<template>
  <div class="flex mx-8 my-10 flex-col md:flex-row">
    <div class="grid w-full place-items-center md:w-2/5 mb-0 md:mb-8">
      <img class="max-h-64" :src="product.image" alt="image">
    </div>
    <div class="w-full md:w-3/5">
      <div class="flex flex-col justify-center ml-8 mt-12 md:mt-0">
        <div class="text-3xl"> {{ product.name }} </div>
        <StarRating class="mt-2" :rating="product.rating"/>
        <div class="text-5xl my-8">{{ product.price }} €</div>
        <div class="Description"> {{ product.description }}</div>
      </div>
      <div class="flex flex-col place-items-start ml-8 my-4">
        <div>
          <form class="max-w-xs mx-auto">
            <label for="quantity-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose quantity:</label>
            <div class="relative flex items-center max-w-[8rem]">
              <button type="button" ref="decrement-button" @click="decrement" id="decrement-button" data-action="decrement" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-l-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/>
                </svg>
              </button>
              <input type="text" id="quantity-input" aria-describedby="helper-text-explanation" class="bg-gray-50 border-l-0 border-r-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" :placeholder="buyQuantity" required>
              <button type="button" ref="increment-button" @click="increment" id="increment-button" data-action="increment" class="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-r-lg p-3 h-11 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none">
                <svg class="w-3 h-3 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
                </svg>
              </button>
            </div>
          </form>
        </div>

          <div class="flex justify-center mt-8">
            <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Add to cart
            </button>
          </div>
        </div>
    </div>
  </div>




</template>

<style scoped>

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.custom-number-input input:focus {
  outline: none !important;
}

.custom-number-input button:focus {
  outline: none !important;
}

</style>