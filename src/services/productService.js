export function useProductService() {
    async function fetchProducts() {
        const API_URL = import.meta.env.VITE_API_URL
        const API_PORT = import.meta.env.VITE_API_PORT
        try {
            const response = await fetch(`${API_URL}:${API_PORT}/products`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    }
    return { fetchProducts };
}