import React, { Component} from 'react'
// import BlogCard from './BreachCardv2'
import BreachCard from './BreachCard'
// import BreachCardv3 from './BreachCardv3'
import { ThemeProvider, createMuiTheme, CssBaseline } from "@material-ui/core";
const baseTheme = createMuiTheme(); ///*** added ThemeProvider */

class BreachList extends Component {
    renderResults = () => {
        return this.props.results.breaches.map(result => 
            <ThemeProvider theme={baseTheme}> 
            <BreachCard key={result.id} result={result}/>
            </ThemeProvider>
        )
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

export default BreachList