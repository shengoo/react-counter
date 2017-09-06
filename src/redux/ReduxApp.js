import React from 'react'
import {createStore} from 'redux'
import reducers from './Reducers'
import {Provider} from 'react-redux'

import Counter from './Counter'
import Summary from "./Summary";

const store = createStore(reducers);


class ReduxApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <h3>Redux App</h3>
                    <Counter name={'First'}/>
                    <Counter name={'Second'}/>
                    <Counter name={'Third'}/>
                    <Summary/>
                </div>
            </Provider>
        )
    }
}

export default () => (
    <Provider store={store}>
        <div>
            <h3>Redux App</h3>
            <Counter name={'First'}/>
            <Counter name={'Second'}/>
            <Counter name={'Third'}/>
            <Summary/>
        </div>
    </Provider>
);