import { baseUrl } from '../shared/baseUrl';
import { 
    WORKERS_LOADING, 
    ADD_WORKERS, 
    WORKERS_FAILED 
} from './ActionTypes';

export const fetchWorkers = () => (dispatch) => {

    dispatch(workersLoading(true));
  
    return fetch(baseUrl + 'workers')
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
        .then(workers => dispatch(addWorkers(workers)))
        .catch(error => dispatch(workersFailed(error.message)));
}
  
export const workersLoading = () => ({
    type: WORKERS_LOADING
});
  
export const workersFailed = (errmess) => ({
    type: WORKERS_FAILED,
    payload: errmess
});
  
export const addWorkers = (workers) => ({
    type: ADD_WORKERS,
    payload: workers
});