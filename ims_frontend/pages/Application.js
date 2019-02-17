import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '../components/Typography/Typography';

import Layout from '../components/Layout/Layout'

const styles = theme => ({
  root : {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor : "#FAFAFA",
    boxShadow:0,
    width:"100%",
    borderRadius:5,
    border: '1px solid #D3D3D3',
    boxShadow : '0 0',
  },
  sbtn : {
    margin : theme.spacing.unit * 1,
    borderRadius : "4vh",
    border: '1px solid #25A032',
    color : "#25A032",
  },
  cbtn : {
    margin : theme.spacing.unit * 1,
    borderRadius : "4vh",
    border: '1px solid #E80018',
    color : "#E80018"
  }
});

const apps = [
    {
      Name : 'Technical',
      Description : 'This is the Description of the application.',
      Status : 'Pending'
    },
     {
      Name : 'NonTechnical',
      Description : 'This is the Description of the application.This is the Description of the application.This is the Description of the application.',
      Status : 'Pending'
    }, 
    {
      Name : 'Technical',
      Description : 'This is the Description of the application.This is the Description of the application.This is the Description of the application.This is the Description of the application.',
      Status : 'Pending'
    }, 
    {
      Name : 'Technical',
      Description : 'This is the Description of the application.This is the Description of the application.This is the Description of the application.This is the Description of the application.',
      Status : 'Pending'
    },
     {
      Name : 'Technical',
      Description : 'This is the Description of the application.',
      Status : 'Pending'
    },
     {
      Name : 'Technical',
      Description : 'This is the Description of the application.',
      Status : 'Pending'
    },
     {
      Name : 'Technical',
      Description : 'This is the Description of the application.',
      Status : 'Pending'
    },
  ];


function PaperSheet(props) {
  const { classes } = props;

  return (
    <Layout>
    <div>
    <Typography variant="h4" marked="center" align="center" component="h2" style={{margin:"5vh"}}>
        For All Applications
      </Typography>
     <Grid container
      spacing={0}
      justify="center"
      alignItems="center"
      direction="row">
      <Grid item lg={10} xs={12}>

     {apps.map(app => (
      <Paper className={classes.root}>
      <Grid container>
        <Grid item lg={2} xs={12}>
        <Typography variant="h6" component="h3">
         {app.Name}
        </Typography>
        </Grid>

        <Grid item lg={6} xs={12}>
        <Typography component="p">
          {app.Description}
        </Typography>

        <Typography component="p" style={{color:"#7D7D7D"}}>
          {app.Status}
        </Typography>

        </Grid>

        <Grid item lg={3} xs={12} align="right">
        <Button variant="outlined" className={classes.sbtn}>
          Schedule
        </Button>

        <Button variant="outlined" className={classes.cbtn}>
          Cancel
        </Button>
        </Grid>
        </Grid>
      </Paper>
      ))}
      </Grid>
      </Grid>
    </div>
    </Layout>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
