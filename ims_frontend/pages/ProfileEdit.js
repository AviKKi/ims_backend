import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter } from 'next/router'
// core components

import TextField from '@material-ui/core/TextField';

import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import loginPageStyle from "../components/LoginPage/loginPage";
import Typography from '../components/Typography/Typography';
import Layout from '../components/Layout/Layout'
import Radio from '@material-ui/core/Radio';
import axios from 'axios'
axios.defaults.baseURL = "http://localhost:8080"
/*import image from "./components/img/purple_b.png";*/


const formFields = {
  "S": [
    {label:"Name", rows:1},
    {label:"Product", rows:1},
    {label:"Contact", rows:1},
    {label:"Experience", rows:4},
    {label:"Education", rows:4},
    {label:"Bio", rows:4 },
  ],
  "I":[
    {label:"Name", rows:1},
    {label:"Locations", rows:2},
    {label:"Markets", rows:2},
    {label:"Bio", rows:4 },
  ],
  "M":[
    {label:"Name", rows:1},
    {label:"Locations", rows:1},
    {label:"Bio", rows:4},
    {label:"Experience", rows:4},
  ]
}



class Profile extends React.Component {

   state = {
      cardAnimaton: "cardHidden",
      selectedValue: "S", // S->Startup, I->Investor, M->Mentor
    }

  componentDidMount = async()=> {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" })
      }.bind(this),
      700
    )
    let profile = await axios.get('api/v1/users/profile', {withCredentials: true})
    console.log(profile.data)
  }



  handleChange = event => {
    console.log(event.target.value)
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const {newUser} = this.props.router.query

    const { classes, ...rest } = this.props
    return (
      <Layout>
      <Typography variant="h4" marked="center" align="center" component="h2" style={{margin:"5vh"}}>
       Profile
      </Typography>
        <div>

        <Card  className={classes.ProfileCard}>

        <FormGroup align="center" row={true}>
          {
            newUser!==undefined?[{value:"S",label:"Startup"},{value:"M",label:"Mentor"},{value:"I",label:"Investor"}].map((el,k)=>(
              <FormControlLabel
                control={
                  <Radio
                    key={k}
                    checked={this.state.selectedValue===el.value}
                    onChange={this.handleChange}
                    value={el.value}
                  />
                  }
            label={el.label}
          />
      )):undefined
          }

        </FormGroup>
          {
            formFields[this.state.selectedValue].map(el=>(
              <TextField
                className={classes.TextField}
                label={el.label}
                multiline
                variant="outlined"
                rows={el.rows}
                id="custom-css-outlined-input"
               />
          ))}
          <Button variant="outlined" color="primary" style={{width:"10%",alignItems:"center"}}>
            Update
          </Button>

      </Card>
      </div>
    </Layout>
    );
  }
}

export default withRouter(withStyles(loginPageStyle)(Profile));
