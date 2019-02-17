import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Https from "@material-ui/icons/Https";
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
import { connect } from 'react-redux'
import { loginUser } from '../actions/auth'
/*import image from "./components/img/purple_b.png";*/

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      username: "",
      password: ""
    };
  }
  
  inputChangeHandler = (key,e)=>{
     this.setState({
      [key]: e.target.value
     })
  }
  loginHandler = ()=>{
    const payload = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.dispatch( loginUser(payload) )
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
    const { classes, dispatch, ...rest } = this.props;
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
                        labelText="Username..."
                        id="username"
                        value={this.state.username}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          onChange: this.inputChangeHandler.bind(this,"username"),
                          value:this.state.username,
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password..."
                        id="pass"
                        value={this.state.password}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          onChange: this.inputChangeHandler.bind(this,"password"),
                          value:this.state.password,
                          endAdornment: (
                            <InputAdornment position="end">
                              <Https className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button onClick={this.loginHandler} simple>
                        <Typography variant="button" gutterBottom style={{color:'#424242'}}>
                          Login
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
