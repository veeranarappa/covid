import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {incrementCounter, decrementCounter } from '../src/reduxstate/Action'

function Reduxcompnent(){

    let countvalue = useSelector((state) => {
        console.log('state====',state)
        if(state &&  state.Reducer && state.Reducer.count )
        return  state.Reducer.count
        else return 0
    }) 

   
    let dispatch = useDispatch();

    const increment =()=>{
        dispatch(incrementCounter())
    }
    const decrement =()=>{
        dispatch(decrementCounter())
    }

    return(
        <div>
 <h1> Hi Hellow </h1>

 <h1> Count {countvalue}</h1>
<button onClick={increment}> Increment </button>
<button onClick={decrement}> Decrement </button>

 </div>
)
}

export default Reduxcompnent;