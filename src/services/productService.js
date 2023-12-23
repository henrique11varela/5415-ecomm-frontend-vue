// import axios from "axios";

// Replace this URL with API endpoint (after npm run dev)
const API_URL = 'http://127.0.0.1:3333';

export function useProductService() {
    async function fetchProducts() {
        try {
            // const response = await axios.get(API_URL);

            // if (response.status !== 200) {
            //     throw new Error(`Failed to fetch products: ${response.statusText}`);
            // }

            // const products = response.data;
            // return products;
            const response = await fetch(`${API_URL}/products`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    }

    return { fetchProducts };
}