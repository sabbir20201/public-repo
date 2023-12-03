import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UseCart from "../../Hooks/UseCart";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const CheckOutForm = () => {
  const [error, setError] = useState('')
  const [clientSecret, setClientSecret] = useState('')
  const [transactionId, setTransactionId] = useState('')

  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const {user} = useContext(AuthContext);
  // const [cart] = UseCart()

  useEffect(() => {
    axiosSecure.post('/create-payment-intent', {price: 400})
      .then(res => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret)
      })
  }, [axiosSecure])


  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }
    const card = elements.getElement(CardElement)
    if (card === null) {
      return
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card

    })
    if (error) {
      console.log('payment error', error);
      setError(error.message)
    } else {
      console.log('payment method', paymentMethod);
      console.log('payment successful')
      setError('')
      // navigate('/')
    }


    // confirm paument 
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || "anonymous",
          name: user?.displayName || "anonymous"
        }

      }
    })
    if(confirmError){
      console.log('confirm error');

    }{
      console.log("payment intent",paymentIntent);
      if(paymentIntent.status === 'succeeded'){
        console.log('transaction id', paymentIntent.id);
        setTransactionId(paymentIntent.id)
     
        // save payment 
        
     
      }
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn  btn-primary" 
      type="submit" 
      disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
   {transactionId && <p  className="text-green-600-600 font-semibold">Your transaction id:  {transactionId}</p>}
   {transactionId && <p  className="text-green-600-600 font-semibold">Payment successful </p>}
   {transactionId && <p  className="text-green-600-600 font-semibold">Payment successful </p>}
   <p></p>
    </form>
  );
};

export default CheckOutForm;
