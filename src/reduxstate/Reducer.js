import {INCREMENT, DECREMENT} from './Actiontype';

let initialcount = {count : 0}

export const Reducer = (state= initialcount, action ) => {
    switch(action.type){
        case  INCREMENT :
            state ={
                ...state,
                count : state.count + 1
            }
            break;
            case  DECREMENT :
            state ={
                ...state,
                count : state.count - 1
            }
            break;

    }

    return state;
}