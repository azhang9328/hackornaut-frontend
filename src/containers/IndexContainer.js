import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ProfileList from '../components/ProfileList';

const DB_URL = "http://localhost:3000/"

const options = [
    10, 20, 40, 50
  ]

class IndexContainer extends Component {
    
    state = {
        all_breaches: [],
        select_amount: 10,
        start_index: 0
    }
    

    componentDidMount(){

        fetch(DB_URL + "/breaches/thirty")
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          this.setState({
            all_breaches: myJson
          })
    
        }).catch((error) => {
            console.error(error)
        });

        fetch(DB_URL + "/breaches")
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          this.setState({
            all_breaches: myJson
          })
    
        }).catch((error) => {
            console.error(error)
        });

      }


      showMoreBreaches = () => {
          let add = parseInt(this.state.select_amount)
          let start = parseInt(this.state.start_index)
          const new_start = add + start
          this.setState({
            start_index: new_start
          })
          console.log(this.state)
      }

      showLessBreaches = () => {
        let minus = parseInt(this.state.select_amount)
        let start = parseInt(this.state.start_index)
        const new_start = start - minus
        if(new_start >= 0) {
            this.setState({
            start_index: new_start
            })
        }
        console.log(this.state)

    }

      getSelectBreaches = () => {
        return this.state.all_breaches.slice(this.state.start_index, this.state.start_index+this.state.select_amount);
      }

      handleChange = (e) => {
        console.log("Selected num", e.target.value)
        this.setState({
            select_amount: parseInt(e.target.value)
        })
      }

  



    render() {
        return ( 
            <div>
              <Grid container direction="column" justify="center" alignItems="center">
                {/* <h1>Index</h1> */}
                <select value={null} className="form-control" onChange={this.handleChange}>
                    <option value={options[0]}>{options[0]}</option>
                    <option value={options[1]}>{options[1]}</option>
                    <option value={options[2]}>{options[2]}</option>
                    <option value={options[3]}>{options[3]}</option>
                </select>
                <ProfileList  breaches={this.getSelectBreaches()}/>
              </Grid>
              <Grid container direction="row" justify="center" alignItems="center">
                <Button variant="contained" color="primary" onClick={() => this.showLessBreaches()}> ← </Button>
                 {this.state.start_index} - {parseInt(this.state.start_index+this.state.select_amount)}    
                <Button variant="contained" color="primary" onClick={() => this.showMoreBreaches()}> → </Button>
              </Grid>
            </div>
            
        );
    }

}

export default IndexContainer;