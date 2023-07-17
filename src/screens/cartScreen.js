import React from 'react'
import { UseSelector,useDispatch, useSelector } from 'react-redux'
import { addtoCart, deleteFromCart } from '../actions/cartActions'
import Checkout from '../components/Checkout'
const CartScreen = () => {
    const cartstate=useSelector(state=>state.cartReducer)
    const cartItems=cartstate.cartItems;
    var subTotal=cartItems.reduce((x,item)=>{
     return x+item.price
    },0)
    const dispatch=useDispatch()
  return (
    <div>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
           <h1 style={{fontSize:"40px"}}>My Cart</h1>
           {cartItems.map(item=>{
            return <div className='flex-container'>
           
           <div className='text-left m-1 w-100' style={{textAlign:'left'}} >
             <h1>{item.name} [ {item.varient}]</h1>
             <h1>Price: {item.quantity} * {item.prices[0][item.varient]} ={item.price}</h1>
             <h1 style={{display:'inline'}}>Quantity :</h1>
             <i className="fa fa-plus" aria-hidden="true" onClick={()=>{dispatch(addtoCart(item,item.quantity+1,item.varient))}}></i>
             {item.quantity}
             <i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addtoCart(item,item.quantity-1,item.varient))}}></i>
             <hr/>
           </div>
           
           <div className='m-1 w-100'>
           <img src={item.image} alt={item.name} style={{height:"80px",width:"80px"}}/>

           </div>
           <div className='m-1 w-100'>
           <i className="fa fa-trash" aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
           </div>
          </div>
           })}
           
        </div>
        <div className='col-md-4 ' style={{textAlign:"right"}}>
            <h2 style={{fontSize:"45px"}}>Subtotal: {subTotal} only</h2>
            <Checkout subTotal={subTotal}/>
        </div>
      </div>
    </div>
  )
}

export default CartScreen
