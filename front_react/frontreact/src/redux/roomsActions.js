import { baseUrl } from '../shared/baseUrl';
import { 
    ROOMS_LOADING, 
    ROOMS_FAILED, 
    ADD_ROOMS 
} from './ActionTypes';

export const fetchRooms = () => (dispatch) => {

    dispatch(roomsLoading(true));
  
    return fetch(baseUrl + 'rooms')
        .then(response => {
            if (response.ok) {
            return response;
            } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
            }
        },
        error => {
                var errmess = new Error(error.message);
                throw errmess;
        })
        .then(response => response.json())
        .then(rooms => dispatch(addRooms(rooms)))
        .catch(error => dispatch(roomsFailed(error.message)));
}
  
export const roomsLoading = () => ({
    type: ROOMS_LOADING
});
  
export const roomsFailed = (errmess) => ({
    type: ROOMS_FAILED,
    payload: errmess
});
  
export const addRooms = (rooms) => ({
    type: ADD_ROOMS,
    payload: rooms
});