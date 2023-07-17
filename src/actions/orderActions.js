import axios from 'axios'
export const placeOrder=(token,subTotal)=>async(dispatch,getState)=>{
    dispatch({type:"PLACE_ORDER_REQUEST"})
    try {
        const currentUser=getState().loginUserReducer.currentUser
        const cartItems=getState().cartReducer.cartItems
     
        const response=await axios.post('/api/orders/placeorder',{token,subTotal,currentUser,cartItems})
        dispatch({type:"PLACE_ORDER_SUCCESS"})
        console.log(response)

    } catch (error) {
        dispatch({type:"PLACE_ORDER_FAILED"})
        console.log(error)
    }
}