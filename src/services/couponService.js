import { API_URL } from "../../env.js";

export async function verifyCoupon(couponCode) {
    try {
        const response = await fetch(API_URL + "/check-coupon", {
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
