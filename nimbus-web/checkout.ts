import { loadStripe } from "@stripe/stripe-js";

export async function checkout({ lineItems }: any) {
    let stripePromise: any = null;

    const getStripe = () => {
        if (!stripePromise) {
            stripePromise = loadStripe(
                process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
            );
        }
        return stripePromise;
    };

    const stripe = await getStripe();

    await stripe.redirectToCheckout({
        mode: "payment",
        lineItems,
        successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: window.location.origin,
    });
}
