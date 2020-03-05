import React, { Component } from 'react';
import "./Profile.css";


const DB_URL = "http://localhost:3000/"

class ProfileContainer extends Component {

    state = {
        profile: null,
        selectedOption: "email"
      }

      handleOptionChange = (e) => {
        this.setState({
          selectedOption: e.target.value
        });
      };

      componentDidMount(){

        fetch(DB_URL + "/users/" + this.props.user.id)
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          this.setState({
            profile: myJson
          })
          console.log(this.state)
    
        }).catch((error) => {
            console.error(error)
        });
      }

      render(){

        console.log(this.props)
        console.log(this.state.selectedOption)
          return( 
              <div>
                  <h1>Profile: {this.props.user.name}</h1>
                <form>
                    <div className="form-check">
                    <label>
                        <input
                        type="radio"
                        name="react-tips"
                        value="emails"
                        checked={this.state.selectedOption === "emails"}
                        onChange={this.handleOptionChange}
                        className="form-check-input"
                        />
                        By Email  
                    </label>
                    {/* </div>
                
                    <div className="form-check"> */}
                    <label>
                        <input
                        type="radio"
                        name="react-tips"
                        value="breaches"
                        checked={this.state.selectedOption === "breaches"}
                        onChange={this.handleOptionChange}
                        className="form-check-input"
                        />
                        By Breach
                    </label>
                </div>     
             </form>
            </div>
          );
      }

}

export default ProfileContainer