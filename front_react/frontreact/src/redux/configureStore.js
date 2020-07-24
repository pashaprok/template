import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Dishes } from './dishes'
import { Rooms } from './rooms'
import { Workers } from './workers'
import thunk from 'redux-thunk'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            rooms: Rooms,
            workers: Workers
        }),
        applyMiddleware(thunk)
    );

    return store;
}