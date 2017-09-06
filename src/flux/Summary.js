import React from 'react'
import Store from './Store'

class Summary extends React.Component{

    constructor(props){
        super(props)
        this.onChange = this.onChange.bind(this)
        this.state = {
            summary: Store.getSummary()
        }
    }

    componentDidMount(){
        Store.addListener('change',this.onChange)
    }

    componentWillUnmount(){
        Store.removeListener('change',this.onChange)
    }

    onChange(){
        this.setState({
            summary:Store.getSummary()
        })
    }

    render(){
        return(
            <div className='well'>
                Total: { this.state.summary }
            </div>
        )
    }
}

export default Summary;