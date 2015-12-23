/**
 * Created by apple on 15/12/23.
 */

export const TEST_ACTION = 'test_action';

export function test_t_TEST() {
    return {
        type: TEST_ACTION,
    }
}

export function testAction() {
    return (dispatch, getState) => {
        console.log(getState());
        dispatch(test_t_TEST());
    };
};