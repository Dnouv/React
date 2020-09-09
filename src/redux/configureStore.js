import {createStore, combineReducers} from 'redux';
import { Comments } from './Comments';
import { Leaders } from './Leaders';
import { Promotions } from './Promotions';
import { Dishes } from './Dishes';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            comments: Comments,
            leaders: Leaders,
            dishes: Dishes,
            promotions: Promotions
        })
        
            //reducer //our initialState
    );
    return store;
}