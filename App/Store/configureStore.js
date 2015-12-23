/**
 * Created by apple on 15/12/23.
 */

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../Reducer';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(reducer, initialState);
}