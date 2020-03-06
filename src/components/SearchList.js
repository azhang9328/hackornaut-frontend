import React, { Component} from 'react'
import BreachCard from './BreachCard'
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
const baseTheme = createMuiTheme();

class SearchList extends Component {
    renderResults = () => {
        return this.props.breaches.map(result => 
            <ThemeProvider theme={baseTheme}> 
            <BreachCard key={result.id} result={result}/>
            </ThemeProvider>
        )
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

export default SearchList