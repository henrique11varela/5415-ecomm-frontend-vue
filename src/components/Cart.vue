<template>
    <div>
        <div class="cartbg" :class="{ open: cartOpen }">
            <div class="cart">
                <div class="innerCart">
                    <CardShell v-for="item in cartItems" class="mb-2">
                        <div class="flex gap-2 mb-2">
                            <img :src="item.image" alt="image" class="w-1/4">
                            <p>{{ item.name }}</p>
                            <p>{{ item.quantity }}</p>
                        </div>
                        <div class="flex gap-2">
                            <button class="bg-primary rounded-lg flex-1" @click="addToCart(item.id)">+</button>
                            <button class="bg-primary rounded-lg flex-1" @click="removeQuantity(item.id)">-</button>
                        </div>
                    </CardShell>
                </div>
                <div class="p-4" style="border: 1px solid blue;">
                    <form class="flex flex-col">
                        <input class="rounded-lg mb-4 shadow-md shadow-black" type="text" name="coupon" v-model="coupon">
                        <button class="bg-primary mb-4 rounded-lg" @click.prevent="() => alert('testing coupon')">Test Coupon</button>
                        <button class="bg-primary mb-4 rounded-lg" @click.prevent="() => alert('testing Checkout')">Checkout</button>
                        <button class="bg-primary rounded-lg" @click="clearCart">Clear Cart</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="cartbutton" @click="() => { cartOpen = !cartOpen }">
            <div v-if="cartItems.length > 0">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M21 5L19 12H7.37671M20 16H8L6 3H3M16 5.5H13.5M13.5 5.5H11M13.5 5.5V8M13.5 5.5V3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                            stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                </svg>
            </div>
            <div v-else>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z"
                            stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import CardShell from "../layouts/CardShell.vue";
import { useCartStore } from "../store/cart.js";
import { mapState, mapActions } from "pinia";
export default {
    data() {
        return {
            cartOpen: false,
            coupon: "",
        }
    },
    methods: {
        ...mapActions(useCartStore, ['addToCart', 'removeQuantity', 'clearCart']),
    },
    computed: {
        ...mapState(useCartStore, ['cartItems'])
    },
    components: {
        CardShell
    }
}
</script>

<style scoped>
.cartbutton {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 50;
    padding: .40rem;
    @apply rounded-full w-16 md:w-16 aspect-square bg-primary
}

.cartbg {
    @apply bg-transparent
}

.open.cartbg {
    position: fixed;
    z-index: 30;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    @apply bg-dark/50
}

.cart {
    padding: 2rem;
    border-radius: 3rem;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 40;
    width: 0;
    height: 0;
    transition: opacity .75s ease-in, width .5s ease-in-out, height .5s ease-in-out;
    opacity: 0;
    overflow: hidden;
    @apply bg-light-2 flex flex-col md:flex-row
}

.innerCart {
    flex-grow: 1;
    border: 1px red solid;
}

.open>.cart {
    transition: opacity .75s ease-out, width .5s ease-in-out, height .5s ease-in-out;
    opacity: 1;
    width: calc(100vw - 2.5rem);
    height: calc(100dvh - 2rem);
}</style>