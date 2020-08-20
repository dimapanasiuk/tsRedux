import {DECREMENT_COUNTER, INCREMENT_COUNTER, Action} from '../actions/counterActions';


export interface IInitialState {
    value: number
  }  

const initialState = {value: 0};

const counterReducer = (state: IInitialState = initialState, action: Action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {...state, value: state.value + 1};
        case DECREMENT_COUNTER:
            return {...state, value: state.value - 1};
        default:
            return {...state};
    }
};

export default counterReducer;
