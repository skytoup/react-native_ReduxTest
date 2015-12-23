/**
 * Created by apple on 15/12/23.
 */

import  {combineReducers} from 'redux';
import testCount from './test';

const rootReducer = combineReducers({
    testCount,
});

export default rootReducer;