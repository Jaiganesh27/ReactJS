import * as redux from 'redux';


// Actions
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
export const PUSH = 'PUSH';
export const POP = 'POP';

// State
const countInitialState = {
    count: 0
}

// Reducers
const counterReducer = (state = countInitialState, action) => {
    switch (action.type) {
        case COUNTER_INCREMENT: {
            return { ...state, count: state.count + 1 };
        }
        case COUNTER_DECREMENT: {
            return { ...state, count: state.count - 1 };
        }
        default: {
            return state;
        }
    }
}


const testReducer = (state = [], action) => {
      switch (action.type) {
        case PUSH: {
           const data  = [...state];
           data.push(action.value);
           return [...data];
        }
        case POP: {
            const data  = [...state];
            data.pop();
            return [...data];
        }
        default: {
            return state;
        }
    }
}

const rootReducer  = (state = [],action)=>{
    return {
        counter : counterReducer(state.counter,action),
        tester : testReducer(state.tester,action)
    }
}
const store = redux.createStore(rootReducer);
export default store;


