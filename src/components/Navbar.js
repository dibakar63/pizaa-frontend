import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../actions/userActions'


const Navbar = () => {
  const userstate=useSelector(state=>state.loginUserReducer)
  const {currentUser}=userstate
  const cartstate=useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">DEY PIZZA</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        
        {currentUser ? (<div className='name'><li>{currentUser.name}</li>
        <li onClick={()=>{dispatch(logoutUser())}}><a href='/login' className='a_tag'>Logout</a></li></div>
        ) : (<a className="nav-link" href="/login">Login</a>)} 
        <a className="nav-link" href="/cart">Cart {cartstate.cartItems.length}</a>
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
{/* <div className='name'><li>{currentUser.name}</li>
        <li><a href='/login'>Logout</a></li></div> */}