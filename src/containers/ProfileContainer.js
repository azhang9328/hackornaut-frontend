import React, { Component } from 'react';
import EmailList from '../components/EmailList';

import "./Profile.css";


const DB_URL = "http://localhost:3000/"

class ProfileContainer extends Component {

    state = {
        profile: null,
        selectedOption: "email",
        changeName: false
      }

      handleOptionChange = (e) => {
        console.log(this.state.profile)

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

      changeNameTrue = () => {
        this.setState({
          ...this.state,
          changeName: true
        })
      }

      changeNameFalse = () => {
        this.setState({
          ...this.state,
          changeName: false
        })
      }

      postName = () => {

      }

      deleteUser = () => {
        fetch(DB_URL + `users/${this.state.profile.id}`, {
          method: "DELETE"
        })
        .then(this.props.logUserOut())
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
          return( 
              <div className="profile-div">
                  <h1>Profile:</h1> <h1 onMouseEnter={this.changeNameTrue} onMouseLeave={this.changeNameFalse}>{this.state.changeName ? <input type="text" onChange={(e)=>this.props.editName(e.target.value)} value={this.props.user.name}/> : this.props.user.name}</h1>
                  <button onClick={this.deleteUser} to="/">Delete User</button>
                <form>
                    <div className="form-check">
                        <input
                        type="radio"
                        id="radio-1"
                        name="react-tips"
                        value="emails"
                        checked={this.state.selectedOption === "emails"}
                        onChange={this.handleOptionChange}
                        className="form-check-input"
                        />
                    <label for="radio-1">
                        <span class="radio">By Email</span>
                    </label>
                        <input
                        type="radio"
                        id="radio-2"
                        name="react-tips"
                        value="breaches"
                        checked={this.state.selectedOption === "breaches"}
                        onChange={this.handleOptionChange}
                        className="form-check-input"
                        />
                        <label for="radio-2">
                          <span class="radio">By Breach</span>
                    </label>
                </div>     
             </form>
            
             {this.state.selectedOption === "emails"? this.displayByEmail(): this.displayByBreach()}
            </div>
          );
      }

}

export default ProfileContainer