/**
 * Created by lylllcc on 2017/7/1.
 */
import * as ActionTypes from './ActionType';
export default (state, action) => {
    const { counterCaption } = action;

    switch (action.type) {
        case ActionTypes.INCREMENT:
            console.log({...state, [counterCaption]: state[counterCaption] + 1});
            return {...state, [counterCaption]: state[counterCaption] + 1};
        case ActionTypes.DECREMENT:
            return {...state, [counterCaption]: state[counterCaption] - 1};
        default:
            return state
    }
}