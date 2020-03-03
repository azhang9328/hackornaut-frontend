import React, { Component} from 'react'
import ResultCard from '../components/ResultCard'

class ResultList extends Component {
    renderResults = () => {
        return this.props.results.breaches.map(result => <li><ResultCard key={result.id} result={result}/></li>)
    }

    render(){
        return(
            <div>
                {this.props.results.address}
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.props.saveSearchResult()
                }}>
                    <button>Save Email + Breach Result</button>
                </form>
                <ul>
                    {this.renderResults()}
                </ul>
            </div>
        )
    }
}

export default ResultList