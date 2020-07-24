import * as ActionTypes from './ActionTypes';

export const Workers = (state = { isLoading: true,
    errMess: null,
    workers:[]}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_WORKERS:
            return {...state, isLoading: false, errMess: null, workers: action.payload};

        case ActionTypes.WORKERS_LOADING:
            return {...state, isLoading: true, errMess: null, workers: []}

        case ActionTypes.WORKERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        
        default: 
            return state;
    }
}