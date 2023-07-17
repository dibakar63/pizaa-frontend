import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { loginUser } from '../actions/userActions';
import { useNavigate } from 'react-router-dom';
import Success from '../components/Success';
import Error from '../components/Error';
const LoginScreen = () => {
    
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const loginstate=useSelector(state=>state.loginUserReducer)
    const {error,success}=loginstate
    useEffect(()=>{
        if(localStorage.getItem('currentUser')){
            window.location.href='/'
        }
    })
    const handleSubmit=()=>{
        
    
            const user={
                
                email,
                password
            }
            console.log(user)
            dispatch(loginUser(user))
            
        }
        
        
    


  return (
    <div>
      <div className='row justify-content-center mt-5 '>
        <div className='col-md-5 mt-5 shadow-lg p-3 mb-5 bg-body rounded'>
        {success && (<Success success='Login SucessFully'/>)}
        {error && (<Error error='Invalid Credintials'/>)}
         <h2 style={{fontSize:'35px'}}>Login</h2>
            <div>
                
                <input type='text' required value={email} placeholder='email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
                <input type='text' required value={password} placeholder='password' className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
                
                <button className='btn mt-3 mb-3' onClick={handleSubmit}>Login</button><br/>

                <a style={{color:'red',marginBottom:"7px"}} href='/register'>Click Here To Register </a>
            <p>Email:dibakardey63@gmail.com</p>
                <p>Password:1234</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
