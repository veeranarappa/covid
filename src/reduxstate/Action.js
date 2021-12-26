import {INCREMENT, DECREMENT} from './Actiontype';

export const incrementCounter = () => {
    return {
        type : INCREMENT
    }
}

export const decrementCounter = () => {
    return {
        type : DECREMENT
    }
}


