import React from 'react';

import Counter from './Counter'
import Summary from './Summary'

class FluxApp extends React.Component{
    render(){
        return(
            <div>
                <h3>Flux app</h3>
                <Counter name={'First'}/>
                <Counter name={'Second'}/>
                <Counter name={'Third'}/>
                <Summary/>
            </div>
        )
    }
}

export default FluxApp;