import ActionTypes from './ActionTypes'

const Actions = {
    increment(name){
        return {
            type: ActionTypes.INCREMENT,
            name
        };
    },
    decrement(name){
        return {
            type: ActionTypes.DECREMENT,
            name,
        };
    }
}

export default Actions;