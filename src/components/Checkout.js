import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../actions/orderActions'
import { useDispatch } from 'react-redux'
const Checkout = ({subTotal}) => {
   const dispatch=useDispatch()
    const tokenHandler=(token)=>{
        console.log(token)
        dispatch(placeOrder(token,subTotal))
    }
  return (
    <div>
      <StripeCheckout
       amount={subTotal*100}
      shippingAddress
      billingAddress
      token={tokenHandler}
      stripeKey="pk_test_51NUpwxSCKx1XG9onfr8OOdVqnbVHSjYyS1OEtCIo27K10zsAYvgWhGekrmwW1llOdEVnFxwqGeR0xoa16j5NnFYm0086LNW6f4"
      currency='INR'
      >
        <button className='btn'>Pay Now</button>
      </StripeCheckout>
    </div>
  )
}

export default Checkout

//tok_1NUoNBSDhR3TyBvwSTw2ZPU1


