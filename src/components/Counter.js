import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                {this.props.name} : {this.state.count}
                {' '}
                <button>
                    +
                </button>
                {' '}
                <button>
                    -
                </button>
            </div>
        )
    }
}

export default Counter;