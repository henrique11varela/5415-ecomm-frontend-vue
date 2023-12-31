import { API_URL } from "../../env.js";

export async function checkout(products, couponCode) {
    try {
        const response = await fetch(API_URL + "/checkout", {
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
