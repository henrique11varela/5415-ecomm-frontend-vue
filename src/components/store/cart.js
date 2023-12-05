import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        cartItems: [],
    }),

    actions: {

        addToCart(product) {
            const existingProduct = this.cartItems.find(item => item.id === product.id);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                this.cartItems.push({ ...product, quantity: 1 });
            }
        },

        addQuantity(productId) {
            const product = this.cartItems.find(item => item.id === productId);

            if (product) {
                product.quantity += 1;
            }
        },

        removeQuantity(productId) {
            const product = this.cartItems.find(item => item.id === productId);

            if (product) {
                product.quantity -= 1;

                if (product.quantity === 0) {
                    this.removeFromCart(productId);
                }
            }
        },

        removeFromCart(productId) {
            this.cartItems = this.cartItems.filter(item => item.id !== productId);
        },

        selectProduct(productId) {
            this.cartItems = this.cartItems.filter(item => item.id == productId);
        },


    },

    getters: {
        cartItemCount() {
            return this.cartItems.length;
        },
    },
});
