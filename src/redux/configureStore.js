import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Comments } from './Comments';
import { Leaders } from './Leaders';
import { Promotions } from './Promotions';
import { Dishes } from './Dishes';
import thunk from 'redux-thunk';
import logger from 'redux-logger';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            comments: Comments,
            leaders: Leaders,
            dishes: Dishes,
            promotions: Promotions
        }),
        applyMiddleware(thunk, logger)
        
    );
    return store;
}