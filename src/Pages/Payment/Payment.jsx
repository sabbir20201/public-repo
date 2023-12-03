import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51OIn16H8BRkEuOtzjnfWMRsxSZ1wsfK7yCFo2UlkMIjnNahWqJ83BLh2bS88jlMJAG2kaSw8BLtFfOPOYrrds4VU00RwNw022K')




const Payment = () => {
    return (
        <div>
        <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
        </Elements>
        </div>
    );
};

export default Payment;