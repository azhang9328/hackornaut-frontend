import React, { Component} from 'react'
import ProfileCard from './ProfileCard'
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
const baseTheme = createMuiTheme(); ///*** added ThemeProvider */

class BreachList extends Component {
    renderResults = () => {
        return this.props.breaches.map(result => 
            <ThemeProvider theme={baseTheme}> 
            <ProfileCard key={result.id} result={result}/>
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

export default BreachList