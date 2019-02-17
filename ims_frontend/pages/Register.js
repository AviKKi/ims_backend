import React from "react";
import { connect } from 'react-redux'
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Https from "@material-ui/icons/Https";
import PermIdentity from "@material-ui/icons/PermIdentity";
// core components
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import CardBody from "../components/Card/CardBody";
import CardHeader from "../components/Card/CardHeader";
import CardFooter from "../components/Card/CardFooter";
import CustomInput from "../components/CustomInput/CustomInput";
import loginPageStyle from "../components/LoginPage/loginPage";
import Typography from '../components/Typography/Typography';
import Layout from '../components/Layout/Layout'
import {registerUser} from '../actions/auth'
/*import image from "./components/img/purple_b.png";*/

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      email: "",
      username: "",
      password: "",
      password2: "",
    };
  }
  inputChangeHandler = (key,e)=>{
    this.setState({
      [key]: e.target.value
    })
  }
  handleRegister = ()=>{
    if(this.state.password!==this.state.password2)
      return 
    const payload = {
      email: this.state.email,
      username: this.state.username,
      password1: this.state.password,
      password2: this.state.password2 
    }
    this.props.dispatch( registerUser(payload) )
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <Layout>
        <div style={{
            backgroundColor: "#FAFAFA",
            backgroundSize: 'cover',
            width:'100%',
            marginTop:-110,
          }}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={11} sm={10} md={6} lg={5}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form}>
                    <p className={classes.divider}></p>
                    <CardBody>
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value:this.state.email,
                          onChange:this.inputChangeHandler.bind(this,"email"),
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Username..."
                        id="username"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value:this.state.username,
                          onChange:this.inputChangeHandler.bind(this,"username"),
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <PermIdentity className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password..."
                        id="pass1"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value:this.state.password,
                          onChange:this.inputChangeHandler.bind(this,"password"),
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Https className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Confirm Password..."
                        id="pass2"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value:this.state.password2,
                          onChange:this.inputChangeHandler.bind(this,"password2"),
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Https className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button onClick={this.handleRegister} simple>
                        <Typography variant="button" gutterBottom style={{color:'#424242'}}>
                          Submit
                        </Typography>
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          {/*<Footer whiteFont />*/}
        </div>
        </Layout>
    );
  }
}

export default connect()(withStyles(loginPageStyle)(LoginPage));
