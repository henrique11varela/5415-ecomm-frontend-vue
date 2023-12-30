import { defineStore } from 'pinia';
import { useProductStore } from './products';
import ls from '../services/localstorageHelper.js'


export const useCartStore = defineStore('cart', {
    state: () => ({
        cartItems: [],
    }),

    actions: {

        readLocalStorageCart(){
            this.cartItems = ls.get('cart')
        },

        addToCart(productId, quantity = 1) {
            const productStore = useProductStore();
            const product = productStore.products.find(item => item.id === productId);

            if (product) {
                const existingProduct = this.cartItems.find(item => item.id === productId);

                if (existingProduct) {
                    if(existingProduct.quantity + quantity < product.quantity) {
                        existingProduct.quantity += quantity;
                    }
                    else{
                        existingProduct.quantity = product.quantity;
                        return false;
                    }
                } else {
                    this.cartItems.push({ ...product, quantity });
                }
            } else {
                console.warn(`Product with ID ${productId} not found.`);
            }
            ls.set('cart', this.cartItems)
            return true;
        },

        addQuantity(productId) {
            const product = this.cartItems.find(item => item.id === productId);

            if (product) {
                product.quantity += 1;
            }
            ls.set('cart', this.cartItems)
        },

        removeQuantity(productId) {
            const product = this.cartItems.find(item => item.id === productId);

            if (product) {
                product.quantity -= 1;

                if (product.quantity === 0) {
                    this.removeFromCart(productId);
                }
            }
            ls.set('cart', this.cartItems)
        },

        removeFromCart(productId) {
            this.cartItems = this.cartItems.filter(item => item.id !== productId);
            ls.set('cart', this.cartItems)
        },

        selectProduct(productId) {
            this.cartItems = this.cartItems.filter(item => item.id == productId);
            ls.set('cart', this.cartItems)
        },

        clearCart() {
            this.cartItems = [];
            ls.set('cart', this.cartItems)
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
