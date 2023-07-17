import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { registerUser } from '../actions/userActions';
import Loading from '../components/Loading';
import Success from '../components/Success';
import { registerUserReducer } from '../reducers/userReducers';
import Error from '../components/Error';
const RegisterScreen = () => {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [cpassword,setCpassword]=useState();
    const dispatch=useDispatch()
    const registerstate=useSelector(state=>state.registerUserReducer)
    const {error,loading,success}=registerstate
    const handleSubmit=()=>{
        if(password !== cpassword){
            alert("Passwords did not match")
        }else{
    
            const user={
                name,
                email,
                password
            }
            console.log(user)
            dispatch(registerUser(user))
        }
        
    }


  return (
    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5 shadow-lg p-3 mb-5 bg-body rounded'>
        {/* {loading && (<Loading/>)} */}
        {success && (<Success success="User Registered Successfully"/>)}
        {error && (<Error error='Email Already registered'/>)}
         <h2 style={{fontSize:'35px'}}>Register</h2>
            <div>
                <input type='text' required value={name} placeholder='name' className='form-control' onChange={(e)=>setName(e.target.value)}/>
                <input type='text' required value={email} placeholder='email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
                <input type='text' required value={password} placeholder='password' className='form-control' onChange={(e)=>setPassword(e.target.value)}/>
                <input type='text' required value={cpassword} placeholder='confirm password' className ='form-control' onChange={(e)=>setCpassword(e.target.value)}/>
                <button className='btn mt-3 mb-2' onClick={handleSubmit}>Register</button><br/>
                <a href='/login' style={{color:'red'}}>Click Here To Login</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterScreen
