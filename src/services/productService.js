import axios from "axios";

// Replace this URL with API endpoint (after npm run dev)
const API_URL = 'localhost:3333';

export function useProductService() {
    async function fetchProducts() {
        try {
            const response = await axios.get(API_URL);

            if (response.status !== 200) {
                throw new Error(`Failed to fetch products: ${response.statusText}`);
            }

            const products = response.data;
            return products;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    }

    return { fetchProducts };
}