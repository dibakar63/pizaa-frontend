import React, { useEffect,useState } from 'react'
//import { PizzaData } from '../data'
import Pizza from '../components/Pizza'
import {useDispatch,useSelector} from 'react-redux'
import { getAllPizzas } from '../actions/pizzaActions'
import Loading from '../components/Loading'
import Error from '../components/Error'
const HomeScreen = () => {
  const dispatch=useDispatch()
  const pizzasstate=useSelector(state=>state.getAllPizzasReducer)
  const {pizzas,error,loading}=pizzasstate
  useEffect(()=>{
    dispatch(getAllPizzas())
  },[])
  return (
    <div>
      <div className='row justify-content-center'>
       {loading ? (<Loading/>) : error ? (<Error error='Something went wrong'/>) : (
        pizzas.map((pizza)=>{
            return <div className='col-md-3 m-3 key={pizza._id}'>
                <div >
                    <Pizza pizza={pizza}/> 
                </div>
            </div>
        })

       )}




        {/* {PizzaData.map((pizza)=>{
            return <div className='col-md-4 '>
                <div >
                    <Pizza pizza={pizza}/>
                </div>
            </div>
        })} */}
      </div>
    </div>
  )
}

export default HomeScreen
