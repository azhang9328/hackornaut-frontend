import React, { Component } from 'react';
import EmailList from '../components/EmailList';

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
    
        }).catch((error) => {
            console.error(error)
        });
      }

      displayByEmail = () => {
        let emails = this.state.profile.user_emails
        return emails.map(email => 
            <EmailList address={email.address} breaches={email.breaches}/>
        )


      }

      displayByBreach= () => {
        // const userEmails = []
        // let emails = this.state.profile
        // for(let key in emails) {
        //     if(key === 'user_emails') {
        //         emails = emails[key];
        //         break;
        //     }
        // }
        // for(let key in emails) {
        //     console.log(emails[key])
        //     userEmails.push(emails[key])
        // }

        // console.log("USER EMAILS!!", userEmails)

    }

      render(){

        // console.log(this.props)
        // console.log(this.state.selectedOption)
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
            
             {this.state.selectedOption === "emails"? this.displayByEmail(): this.displayByBreach()}
            </div>
          );
      }

}

export default ProfileContainer