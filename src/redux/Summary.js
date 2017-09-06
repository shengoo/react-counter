import React from 'react'
import {connect} from 'react-redux'

// class Summary extends React.Component{
//
//     render(){
//         return(
//             <div className='well'>
//                 Total: { this.props.summary }
//             </div>
//         )
//     }
// }

const Summary = (props) =>(
    <div className='well'>
        Total: { props.summary }
    </div>
)

const mapStateToProps = (state) => {
    let summary = 0;
    for(const key in state){
        summary += state[key]
    }
    return{
        summary
    }
}

export default connect(mapStateToProps)(Summary);