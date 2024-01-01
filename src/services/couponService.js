export async function verifyCoupon(couponCode) {
    const API_URL = import.meta.env.VITE_API_URL
    const API_PORT = import.meta.env.VITE_API_PORT
    try {
        const response = await fetch(`${API_URL}:${API_PORT}/check-coupon`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ couponCode: couponCode }),
        });
        
        const data = await response.json();
        
        return (data.success)
            ? { response: true, message: data.message, discount: data.discount }
            : { response: false, message: data.error };
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}
