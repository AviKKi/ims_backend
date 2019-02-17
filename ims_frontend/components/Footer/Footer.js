import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Icon from '@material-ui/core/Icon';
import Email from "@material-ui/icons/Email";
import Favorite from "@material-ui/icons/Favorite";


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    marginTop: theme.spacing.unit * 0,
    paddingTop: theme.spacing.unit * 5,
    paddingBottom: theme.spacing.unit * 1,
    backgroundColor:"#424242",
    borderRadius:0,
    width:'100%',
  },
   socialIcons: {
    width: "28px",
    marginTop: 16,
    margin: 10,
    transform: "none",
    left: "0",
    top: "0",
    height: 28,
  },
  craft:
  {
    backgroundColor:"#212121",
    width:'100%',
    padding:0,
    borderRadius:0,
    paddingBottom: theme.spacing.unit * 0.5,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.craft}>
        <Typography variant="subtitle2" gutterBottom align="center" style={{color:"#f1f8e9",fontSize:14,padding:"2vh",marginBottom:'0'}}>
        <b>CRAFTED BY CODEUTSAVA WEB TEAM 2019 </b>
        </Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
