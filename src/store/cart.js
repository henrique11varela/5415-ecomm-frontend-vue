import { defineStore } from 'pinia';
import { useProductService } from '@/services/productService';

export const useCartStore = defineStore('cart', {
    state: () => ({
        cartItems: [],
        products: [],
    }),

    actions: {

        //before loading product list we fetch it using the store and then render the useCartStore.products
        async fetchProductList() {
            const productService = useProductService();

            try {
                const products = await productService.fetchProducts();
                this.products = products;
            } catch (error) {
                console.error('Error fetching product list:', error);
            }
        },

        addToCart(productId) {
            const product = this.products.find(item => item.id === productId);

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
    },

    getters: {
        cartTotalQuantity() {
            return this.cartItems.reduce((total, item) => total + item.quantity, 0);
        },

        cartTotalPrice() {
            return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        },

        cartTotalPriceWithTax() {
            return this.cartItems.reduce((total, item) => total + item.price * item.quantity * 1.1, 0);
        },
    },
});
