import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../features/counter/counterSlice";

const Counter = () => {
 
 const count = useSelector(state=>state.mycounter.value)
 console.log(count)

 const dispatch = useDispatch();
 
    return (
  <>
  
  
  
  </>
  )
}

export default Counter