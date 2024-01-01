export async function checkout(products, couponCode) {
    const API_URL = import.meta.env.VITE_API_URL
    const API_PORT = import.meta.env.VITE_API_PORT
    try {
        const response = await fetch(`${API_URL}:${API_PORT}/checkout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ coupon: couponCode, products: products }),
        });
        
        const data = await response.json();
        
        console.log(data);
        return data.success
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}
