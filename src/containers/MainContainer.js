import React, { Component } from 'react';
import SearchContainer from './SearchContainer'

class MainContainer extends Component {

      render(){
          return(
            <div>
                <SearchContainer currUser={this.props.currUser}/>
            </div>
          )
      }
}

export default MainContainer