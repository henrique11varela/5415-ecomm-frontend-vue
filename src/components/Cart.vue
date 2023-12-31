<template>
    <div>
        <div class="cartbg" :class="{ open: cartOpen }">
            <div class="cart">
                <div class="innerCart">
                    <CardShell v-for="item in cartItems" class="mb-2 md:flex md:justify-between">
                        <div class="flex gap-2 mb-2 justify-between">
                            <img :src="item.image" alt="image" class="w-1/4 md:w-fit md:h-20">
                            <p>{{ item.name }}</p>
                        </div>
                        <div class="flex gap-2 mb-2 justify-evenly items-center md:w-1/4">
                            <div class="relative flex items-center max-w-[8rem]">
                                <button type="button" ref="decrement-button" @click="removeQuantity(item.id)"
                                    id="decrement-button" data-action="decrement"
                                    class="bg-gray-1 hover:bg-gray-200 border border-gray-300 rounded-l-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                    <svg class="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 18 2">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="M1 1h16" />
                                    </svg>
                                </button>
                                <p
                                    class="bg-gray-50 border-l-0 border-r-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-3.5">
                                    {{ item.quantity }}</p>
                                <button type="button" ref="increment-button" @click="addToCart(item.id)"
                                    id="increment-button" data-action="increment"
                                    class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-r-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                                    <svg class="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 18 18">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="M9 1v16M1 9h16" />
                                    </svg>
                                </button>
                            </div>
                            <p>{{ item.price }}€</p>
                        </div>
                    </CardShell>
                </div>
                <div class="p-4 md:w-1/4 flex flex-col md:justify-end">
                    <div>
                        <label for="coupon">Coupon:</label>
                        <div class="flex justify-between mb-4">
                            <input id="coupon" class="w-8/12 rounded-lg shadow-xl shadow-dark-2/20" :class="{}" type="text"
                                name="coupon" v-model="coupon">
                            <button class="bg-primary rounded-lg w-3/12 text-light" @click.prevent="checkCoupon">%</button>
                        </div>
                        <span class="mx-auto text-xs mb-4">{{ resultMessage }}</span>
                    </div>
                    <p class="mb-2">Quantity: {{ cartTotalQuantity }}</p>
                    <p class="mb-2">Total: {{ Math.round(cartTotalPrice * (1 - discount / 100) * 100) / 100 }}€</p>
                    <div class="flex justify-between">
                        <button class="bg-primary rounded-lg w-3/12 h-16 flex justify-center p-1" @click="clearCart">
                            <img class="h-full" src="../assets/trash.svg" alt="">
                        </button>
                        <button class="bg-primary rounded-lg w-8/12 h-16 flex justify-center p-1"
                            @click.prevent="checkoutLocal">
                            <img class="h-full" src="../assets/credit.svg" alt="">
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="cartbutton" @click="() => { cartOpen = !cartOpen }">
            <div v-if="cartItems.length > 0">
                <img src="../assets/cartFull.svg" alt="">
            </div>
            <div v-else>
                <img src="../assets/cartEmpty.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import CardShell from "../layouts/CardShell.vue";
import { useCartStore } from "../store/cart.js";
import { useProductStore } from "../store/products.js";
import { mapState, mapActions } from "pinia";
import { verifyCoupon } from "../services/couponService.js";
import { checkout } from "../services/checkoutService.js";

export default {
    data() {
        return {
            cartOpen: false,
            coupon: "",
            discount: 0,
            resultMessage: "",
        }
    },
    methods: {
        ...mapActions(useCartStore, ['addToCart', 'removeQuantity', 'clearCart', 'readLocalStorageCart']),
        ...mapActions(useProductStore, ['readLocalStorageProducts', 'fetchProductList']),
        async checkCoupon() {
            const couponCode = this.coupon.trim();

            if (couponCode === "") {
                this.resultMessage = "Coupon Invalid. Please, insert a valid coupon";
                return;
            }

            try {
                const result = await verifyCoupon(couponCode);

                if (result.response) {
                    this.discount = result.discount
                    this.resultMessage = `Valid Coupon! Discount: ${result.discount}% - ${result.message}`;
                } else {
                    this.resultMessage = `Invalid Coupon! Reason: ${result.message}`;
                }
            } catch (error) {
                this.resultMessage = "Error checking the Coupon. Please, try again!";
            }
        },
        async checkoutLocal() {
            if (this.cartTotalQuantity > 0) {
                const items = this.cartItems.map((item) => {
                    return {
                        id: item.id,
                        quantity: item.quantity
                    }
                })
                const success = await checkout(items, this.coupon)
                if (success) {
                    this.clearCart()
                    this.coupon = ""
                    alert("YOU BOUGHT STUFF!!")
                    this.fetchProductList()
                }
                else {
                    alert("Error on checkout")
                }

            }
        }
    },
    computed: {
        ...mapState(useCartStore, ['cartItems', 'cartTotalQuantity', 'cartTotalPrice'])
    },
    mounted() {
        this.readLocalStorageCart()
        this.readLocalStorageProducts()
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
    @apply bg-light flex flex-col md:flex-row
}

.innerCart {
    flex-grow: 1;
}

.open>.cart {
    transition: opacity .75s ease-out, width .5s ease-in-out, height .5s ease-in-out;
    opacity: 1;
    width: calc(100vw - 2.5rem);
    height: calc(100dvh - 2rem);
}</style>