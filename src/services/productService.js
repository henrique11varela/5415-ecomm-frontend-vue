import { API_URL } from "../../env.js";

export function useProductService() {
    async function fetchProducts() {
        try {
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