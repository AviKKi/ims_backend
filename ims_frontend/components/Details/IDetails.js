import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import LayoutBody from '../Layout/LayoutBody';
import Typography from '../Typography/Typography';

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
   cbtn : {
    margin : theme.spacing.unit * 1,
    borderRadius : "4vh",
    border: '1px solid #1D8ECE',
    color : "#1D8ECE",
    fontSize : "12px",
    fontWeight : "bold"
  },
  pic : {
    height:"100px",
    width: "120px",
  }
});


const apps = [
    {
      img : "../static/img/i1.jpg",
      Name : "Demo",
      contact : "demo@temp.com"
    },
    {
      img : "../static/img/i1.jpg",
      Name : "Demo",
      contact : "demo@temp.com"
    },
    {
      img : "../static/img/i1.jpg",
      Name : "Demo",
      contact : "demo@temp.com"
    },
    {
      img : "../static/img/i1.jpg",
      Name : "Demo",
      contact : "demo@temp.com"
    },
    {
      img : "../static/img/i1.jpg",
      Name : "Demo",
      contact : "demo@temp.com"
    },
    {
      img : "../static/img/i1.jpg",
      Name : "Demo",
      contact : "demo@temp.com"
    },
    {
      img : "../static/img/i1.jpg",
      Name : "Demo",
      contact : "demo@temp.com"
    },
  ];


class Details extends React.Component {
  
  render(){
  const { classes, subDetails } = this.props;
  //console.log(subEvents["mainEvents"])
  return (

    <div>
   
     <Grid container
      spacing={0}
      justify="center"
      alignItems="center"
      direction="row">
      <Grid item lg={10} xs={12}>

     {apps.map(app => (
      <Paper className={classes.root}>
      <Grid container>

        <Grid item lg={4} xs={12}>
        
        <img src={app.img} className={classes.pic} />

        </Grid>

        <Grid item lg={5} xs={8}>
        <Typography variant="h6" component="h3">
         {app.Name}
        </Typography>
        <Typography variant="body2" component="h3" style={{color:"#808088"}}>
         {app.contact}
        </Typography>
        </Grid>

        <Grid item lg={3} xs={4} align="right">
        <Button variant="outlined" className={classes.cbtn}>
          Connect
        </Button>
        </Grid>
        </Grid>
      </Paper>
      ))}
      </Grid>
      </Grid>
    </div>
      
  );
}
}

Details.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Details);
