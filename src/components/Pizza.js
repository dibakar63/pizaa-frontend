import React, { useState } from 'react'
//import { PizzaData  } from '../data'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addtoCart } from '../actions/cartActions';
import { UseSelector,useDispatch } from 'react-redux';
const Pizza = ({pizza}) => {
    const [varient,setVarient]=useState('small')
    const [quantity,setQuantity]=useState(1)
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch=useDispatch()
  const addtocart=()=>{
    dispatch(addtoCart(pizza,quantity,varient))
  }
  return (
    <div  className='shadow-lg p-3 mb-5 bg-body rounded'>
     <div onClick={handleShow}>
     <h1>{pizza.name}</h1>
     <img src={pizza.image} alt={pizza.name} className='img-fluid'/>
     </div>
     <div className='flex-container'>
        <div className='m-1 w-100'>
            <p>Varients</p>
               <select className='form-control' value={varient} onChange={(e)=>setVarient(e.target.value)}> {pizza.varients.map((varient)=>{
                return <option value={varient}>{varient}</option>
               })}</select> 
        
            
        </div>
        <div className='m-1 w-100'>
        <p>Quantity</p>
           <select className='form-control' value={quantity} onChange={(e)=>setQuantity(e.target.value)}> {[...Array(10).keys()].map((x,i)=>{
            return <option value={i+1}>{i+1}</option>
           })}</select>
        </div>
     </div>
        <div className='flex-container'>
            <div className=' m-1 w-100 '>
                <p className='mt-1'>Price:{pizza.prices[0][varient] * quantity} Rs/- </p>
                
            </div>
            <div className='m-1 w-100'>
                <button className='btn  ' onClick={addtocart}>Add To Cart</button>
            </div>
        </div>
        <Modal show={show}>
        <Modal.Header>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <img src={pizza.image} alt={pizza.name}  className='img-fluid'/>
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          
        </Modal.Footer>
      </Modal>
     
    </div>
  )
}

export default Pizza
