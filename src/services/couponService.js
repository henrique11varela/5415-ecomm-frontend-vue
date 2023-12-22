

export async function verifyCoupon(couponCode) {
    
    const API_URL = 'http://127.0.0.1:3333/check-coupon';
    const retries = 3;

    while (retries > 0) {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ couponCode: couponCode }),
            });
            
            const data = await response.json();

            return (data.couponcode)
                ? { response: true, message: data.message, discount: data.discount ,coupon: data.couponcode }
                : { response: false, message: data.error };
        } catch (error) {
            console.log(`error -> retries left: ${retries}`);
        }

        retries--;
    }

    return false;
}