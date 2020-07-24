import * as ActionTypes from './ActionTypes';

export const Rooms = (state = { isLoading: true,
    errMess: null,
    rooms:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ROOMS:
            return {...state, isLoading: false, errMess: null, rooms: action.payload};

        case ActionTypes.ROOMS_LOADING:
            return {...state, isLoading: true, errMess: null, rooms: []}

        case ActionTypes.ROOMS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
            
        default:
            return state;
    }
};