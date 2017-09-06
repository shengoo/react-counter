import {EventEmitter} from 'events'
import Dispatcher from './Dispatcher'
import ActionTypes from './ActionTypes'

const state = {
    'First': 0,
    'Second': 10,
    'Third': 20
};

class Store extends EventEmitter{
    constructor(){
        super();
        this.handleActions=this.handleActions.bind(this)
    }
    get(name){
        state[name] = state[name];
        return state[name];
    }

    getSummary(){
        let summary = 0;
        for(var key in state){
            summary += state[key]
        }
        return summary;
    }

    increment(name){
        state[name]++;
        this.emit('change');
    }

    decrement(name){
        state[name]--;
        this.emit('change');
    }

    handleActions(action){
        switch (action.type){
            case ActionTypes.INCREMENT:
                this.increment(action.name);
                break;
            case ActionTypes.DECREMENT:
                this.decrement(action.name);
                break;
            default:
                break;
        }
    }

}

const store = new Store();
Dispatcher.register(store.handleActions);

export default store;