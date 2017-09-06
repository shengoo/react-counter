import React from 'react'
import Store from './Store'
import Actions from './Actions'

class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: Store.get(props.name)
        }
        this.onChange = this.onChange.bind(this)
    }

    componentDidMount() {
        Store.addListener('change', this.onChange);
    }

    componentWillUnmount() {
        Store.removeListener('change', this.onChange);
    }

    onChange() {
        this.setState({
            count: Store.get(this.props.name)
        })
    }

    onIncrement(){
        Actions.increment(this.props.name)
    }

    onDecrement(){
        Actions.decrement(this.props.name)
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-2">{this.props.name} : {this.state.count}</div>
                <div className="col-xs-1">
                    <button onClick={this.onIncrement.bind(this)}>
                        +
                    </button>
                </div>
                <div className="col-xs-1">
                    <button onClick={this.onDecrement.bind(this)}>
                        -
                    </button>
                </div>
            </div>
        )
    }
}

export default Counter;