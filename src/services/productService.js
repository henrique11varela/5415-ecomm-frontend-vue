// import { useFetch } from 'use-vue';

// Replace this URL with API endpoint (after npm run dev)
const API_URL = 'localhost:3333';

export function useProductService() {
    // const { data, error, fetch } = useFetch();

    async function fetchProducts() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw new Error(`Failed to fetch products: ${response.statusText}`);
            }
            const products = await response.json();
            return products;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    }

    return { fetchProducts };
}