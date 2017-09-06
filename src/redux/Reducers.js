import ActionTypes from './ActionTypes'

const initialState = {
    'First': 0,
    'Second': 10,
    'Third': 20
};
export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return {
                ...state,
                [action.name]: state[action.name] + 1
            }
        case ActionTypes.DECREMENT:
            return {
                ...state,
                [action.name]: state[action.name] - 1
            }
        default:
            return state;
    }
}