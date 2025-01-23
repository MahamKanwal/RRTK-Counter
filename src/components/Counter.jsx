import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../features/counter/counterSlice";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faRedo } from "@fortawesome/free-solid-svg-icons";
import "../App.css";
// import counterImage from '../assets/counter.jpeg';

const Counter = () => {
 
    const count = useSelector(state => state.counter.value)
    console.log(count);
    
    const dispatch = useDispatch()

    return (
  <>
  
  {/* <div className='d-flex flex-column gap-5'>
  <div className="d-flex   gap-5">
    <button onClick={()=>dispatch(decrement())} >-</button>
    <p className='text-white'>{count}</p>
    <button onClick={()=>dispatch(increment())}>+</button>
  </div>
  <button onClick={()=>dispatch(reset())}>reset</button>
  </div> */}

<div className="counter-container d-flex flex-column align-items-center gap-4">
<div className="d-flex flex-column align-items-center gap-4">
  <div className="d-flex align-items-center gap-4">
    <button
      className="btn btn-primary btn-lg"
      onClick={() => dispatch(decrement())}
    >
      <FontAwesomeIcon icon={faMinus} />
    </button>
    <p className="fs-2 text-white m-0">{count}</p>
    <button
      className="btn btn-primary btn-lg"
      onClick={() => dispatch(increment())}
    >
      <FontAwesomeIcon icon={faPlus} />
    </button>
  </div>
  <button
    className="btn btn-danger btn-lg"
    onClick={() => dispatch(reset())}
  >
    <FontAwesomeIcon icon={faRedo} /> Reset
  </button>
</div>
</div>

  </>
  )
}

export default Counter

