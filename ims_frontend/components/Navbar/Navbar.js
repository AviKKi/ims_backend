import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// core components
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Header from "../Header/Header";
import Button from "../Button/Button";
import Link from "next/link"
import navbarsStyle from "./navbarsStyle.jsx";
import Router from 'next/router';
import { connect } from 'react-redux'
import { unauthUser } from '../../actions/auth'



const RightLinks = connect()( (props)=>{
  const { classes, clickHandler, isAuthenticated, dispatch, isAdmin } = props
  console.log({isAuthenticated:isAuthenticated})
  console.log({isAdmin,})
  const unAuthLinks = (<>
  <ListItem className={classes.listItem}>
    <Link href="/Register">
      <Button
        color="transparent"
        className={
          classes.navLink
          }
        >
        Register
      </Button>
    </Link>
  </ListItem>
  <ListItem className={classes.listItem}>
    <Link href="/Login">
      <Button
        color="transparent"
        className={
          classes.navLink
          }
        >
          Login
      </Button>
    </Link>
  </ListItem></>)

  const authLinks = (
      <>
      <ListItem className={classes.listItem}>
        <Link href="/Booking">
          <Button
            color="transparent"
            className={
              classes.navLink
              }
            >
              Booking
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/AppStatus">
          <Button
            color="transparent"
            className={
              classes.navLink
              }
            >
              Application Status
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/">
          <Button
            onClick={
                ()=>dispatch(unauthUser())
            }
            color="transparent"
            className={
              classes.navLink
              }
            >
              Logout
          </Button>
        </Link>
      </ListItem>
      </>
  )
  const adminLinks = (
      <>
      <ListItem className={classes.listItem}>
        <Link href="/Application">
          <Button
            onClick={
                ()=>dispatch(unauthUser())
            }
            color="transparent"
            className={
              classes.navLink
              }
            >
              Pending Application
          </Button>
        </Link>
      </ListItem>
      </>
  )
  let temp = undefined
  if(isAdmin){
      temp = adminLinks
  }
  else{
      if(isAuthenticated)
        {temp = authLinks}
      else {
          temp = unAuthLinks
      }
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link href="/">
          <Button
            onClick={

              ()=>{
                try{
                    clickHandler();
                    setTimeout(()=>Router.push("/"), 50);}catch(e){}
            }}
            color="transparent"
            className={
              classes.navLink
            }
          >
            Home
          </Button>
        </Link>
      </ListItem>
       {/*temp*/}
      {!isAuthenticated?
      unAuthLinks:authLinks}
    </List>)
}
)
export const StyledRightLinks = withStyles(navbarsStyle)(RightLinks)

class SectionNavbars extends React.Component {
  render() {
    const { classes, ...other } = this.props;
    return (
      <div className={classes.section}>
        <div id="navbar" className={classes.navbar}>
            <Header
              color="primary"
              leftLinks=""
              rightLinks={
                <StyledRightLinks {...other} />
              }
            />
          </div>
        </div>
    );
  }
}

export default withStyles(navbarsStyle)(SectionNavbars);
