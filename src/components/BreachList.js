import React, { Component} from 'react'
import BreachCard from './BreachCard'

class BreachList extends Component {
    renderResults = () => {
        return this.props.breaches.map(result => <BreachCard key={result.id} result={result}/>)
    }

    render(){
        return(
            <div>
                <ul>
                    {this.renderResults()}
                </ul>
            </div>
        )
    }
}

export default BreachList