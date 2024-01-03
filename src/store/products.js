import { defineStore } from 'pinia';
import { useProductService } from '../services/productService';
import ls from '../services/localstorageHelper.js'

export const useProductStore = defineStore('products', {
    state: () => ({
        products: [],
    }),
    //PRODUCT API JSON  (for verification later)
    // {
    //     "id": 1,
    //     "name": "Product 1",
    //     "description": "Description 1",
    //     "image": "https://via.placeholder.com/150",
    //     "price": 100,
    //     "quantity": 10,
    //     "rating": 4.5,
    //     "created_at": "2021-01-01T00:00:00.000Z",
    //     "updated_at": "2021-01-01T00:00:00.000Z",
    //     "required": "string"
    //   }

    actions: {
        readLocalStorageProducts(){
            if (this.products.length == 0) {
                this.products = ls.get('products')
            }
        },

        async fetchProductList() {
            const productService = useProductService();
            try {
                const products = await productService.fetchProducts();
                this.products = products;
            } catch (error) {
                console.error('Error fetching product list:', error);
            }
            ls.set('products', this.products)
        },
    },

    getters: {
        productById: (state) => (id) => {
            return state.products.find((product) => product.id === id);
        },

        allProducts: (state) => {
            return state.products;
        },

        productCount: (state) => {
            return state.products.length;
        },
    },


});