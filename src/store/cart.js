import { defineStore } from 'pinia';
import { useProductStore } from '@/store/products';


export const useCartStore = defineStore('cart', {
    state: () => ({
        cartItems: [],
    }),

    actions: {

        addToCart(productId) {
            const productStore = useProductStore(); // create an instance of the product store
            const product = productStore.products.find(item => item.id === productId);

            if (product) {
                const existingProduct = this.cartItems.find(item => item.id === productId);

                if (existingProduct) {
                    existingProduct.quantity += 1;
                } else {
                    this.cartItems.push({ ...product, quantity: 1 });
                }
            } else {
                console.warn(`Product with ID ${productId} not found.`);
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

        clearCart() {
            this.cartItems = [];
        },
    },

    getters: {
        cartTotalQuantity() {
            return this.cartItems.reduce((total, item) => total + item.quantity, 0);
        },

        cartTotalPrice() {
            return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        },
    },
});
