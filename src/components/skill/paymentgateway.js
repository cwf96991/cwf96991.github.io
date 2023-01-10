
import { Header, SkillContainer, MobileDeskTopSection } from "./widget";
import React, { useState, useEffect } from "react";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import {
    PaymentRequestButtonElement,
    useStripe,
} from '@stripe/react-stripe-js';
const handlePaymentMethodReceived = async (event) => {
    // Send the payment details to our function.
    const paymentDetails = {
        payment_method: event.paymentMethod.id,
        shipping: {
            name: event.shippingAddress.recipient,
            phone: event.shippingAddress.phone,
            address: {
                line1: event.shippingAddress.addressLine[0],
                city: event.shippingAddress.city,
                postal_code: event.shippingAddress.postalCode,
                state: event.shippingAddress.region,
                country: event.shippingAddress.country,
            },
        },
    };
    const response = await fetch('/api/create-payment-intent', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paymentDetails }),
    }).then((res) => {
        return res.json();
    });
    if (response.error) {
        // Report to the browser that the payment failed.
        console.log(response.error);
        event.complete('fail');
    } else {
        // Report to the browser that the confirmation was successful, prompting
        // it to close the browser payment method collection interface.
        event.complete('success');
        // Let Stripe.js handle the rest of the payment flow, including 3D Secure if needed.
        const { error, paymentIntent } = await stripe.confirmCardPayment(
            response.paymentIntent.client_secret
        );
        if (error) {
            console.log(error);
            return;
        }
        if (paymentIntent.status === 'succeeded') {
            history.push('/success');
        } else {
            console.warn(
                `Unexpected status: ${paymentIntent.status} for ${paymentIntent}`
            );
        }
    }
};
const Widget = () => {
    const stripe = useStripe();
    const [paymentRequest, setPaymentRequest] = useState(null);
    useEffect(() => {
        if (stripe) {
            const pr = stripe.paymentRequest({
                country: 'US',
                currency: 'usd',
                total: {
                    label: 'Demo total',
                    amount: 1350,
                },
                requestPayerName: true,
                requestPayerEmail: true,
                requestShipping: true,
                shippingOptions: [
                    {
                        id: 'standard-global',
                        label: 'Global shipping',
                        detail: 'Arrives in 5 to 7 days',
                        amount: 50,
                    },
                ],
            });
            pr.canMakePayment().then((result) => {
                if (result) {
                    pr.on('paymentmethod', handlePaymentMethodReceived);
                    setPaymentRequest(pr);
                }
            });
        }
    }, [stripe]);
    return <div className="mx-auto flex items-center justify-center h-[350px] md:h-auto w-4/5">
       {paymentRequest&& <PaymentRequestButtonElement options={{ paymentRequest }} />}
    </div>;
}


const PaymentgatewayWidget = () => {
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

    return <div className="">
        <Elements stripe={stripePromise}>
        <Header
            title="Link Preview Card | my work"
            header="Link Preview Card"
            skill="LinkPreview"
        />

        <SkillContainer phone={<Widget />} window={<Widget />} />

        <MobileDeskTopSection>
            <Widget />
        </MobileDeskTopSection>
        </Elements>
    </div>


}

export default PaymentgatewayWidget;
