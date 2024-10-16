import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/slices/CounterSlice';

function Counter() {


    // useSelector hook is used to fetch data from a slice
    const count = useSelector((state)=>{
        return state.counter.value;
    })

    // useDispatch hook is used to fetch the reducer functions from the action creator
    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>{
            dispatch(increment())
        }}>
            Increment
        </button>
        <br/>
        <br/>
        <div>{count}</div>
        <br/>
        <br/>
        <button  onClick={()=>{
            dispatch(decrement())
        }}>
            Decrement
        </button>
    </div>
  )
}

export default Counter