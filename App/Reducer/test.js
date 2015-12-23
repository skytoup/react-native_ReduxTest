/**
 * Created by apple on 15/12/23.
 */

import {TEST_ACTION} from '../Action/test';

export default function testCount(state=0, action) {
    switch (action.type) {
        case TEST_ACTION:
            return state+1;
        default:
            return state;
    }
};