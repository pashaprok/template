import { baseUrl } from '../shared/baseUrl';
import { 
    DISHES_LOADING, 
    ADD_DISHES, 
    DISHES_FAILED 
} from './ActionTypes';

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));
  
    return fetch(baseUrl + 'dishes')
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
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
}
  
export const dishesLoading = () => ({
    type: DISHES_LOADING
});
  
export const dishesFailed = (errmess) => ({
    type: DISHES_FAILED,
    payload: errmess
});
  
export const addDishes = (dishes) => ({
    type: ADD_DISHES,
    payload: dishes
});