const initialState = {
    currentValue: 0,
    previousValue: [],
    futureValue: []
}

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const UNDO = 'UNDO';
const REDO = 'REDO';

export function increment(num){
    return{
        type: INCREMENT,
        payload: num
    }
}
export function decrement(num){
    return{
        type: DECREMENT,
        payload: num
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case INCREMENT:
            return {
                currentValue: state.currentValue + action.payload
            }
        case DECREMENT:
            return {
                currentValue: state.currentValue - action.payload
            }
        default: 
            return state;
    }
}