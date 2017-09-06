import React from 'react'
import {connect} from 'react-redux'
import Actions from './Actions'

// class Counter extends React.Component {
//
//     onIncrement(){
//         this.props.dispatch(Actions.increment(this.props.name))
//     }
//
//     onDecrement(){
//         this.props.dispatch(Actions.decrement(this.props.name))
//     }
//
//     render() {
//         console.log(this.props)
//         return (
//             <div className="row">
//                 <div className="col-xs-2">{this.props.name} : {this.props.count}</div>
//                 <div className="col-xs-1">
//                     <button onClick={this.onIncrement.bind(this)}>
//                         +
//                     </button>
//                 </div>
//                 <div className="col-xs-1">
//                     <button onClick={this.onDecrement.bind(this)}>
//                         -
//                     </button>
//                 </div>
//             </div>
//         )
//     }
// }

const Counter = ({name, count, dispatch}) => (
    <div className="row">
        <div className="col-xs-2">{name} : {count}</div>
        <div className="col-xs-1">
            <button onClick={() => dispatch(Actions.increment(name))}>
                +
            </button>
        </div>
        <div className="col-xs-1">
            <button onClick={() => dispatch(Actions.decrement(name))}>
                -
            </button>
        </div>
    </div>
)

const mapStateToProps = (state, ownProps) => {
    return {
        count: state[ownProps.name]
    }
}

export default connect(mapStateToProps)(Counter);