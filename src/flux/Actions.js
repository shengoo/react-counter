import ActionTypes from './ActionTypes'
import Dispatcher from './Dispatcher'

const Actions = {
    increment(name){
        Dispatcher.dispatch({
            type: ActionTypes.INCREMENT,
            name
        })
    },
    decrement(name){
        Dispatcher.dispatch({
            type: ActionTypes.DECREMENT,
            name,
        })
    }
}

export default Actions;