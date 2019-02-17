import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import Card from '@material-ui/core/Card';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '../components/Typography/Typography';
import Layout from '../components/Layout/Layout'


const styles = theme => ({
  root: {
    width: '100%',
    padding: theme.spacing.unit * 4,
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
  container : {
    padding : theme.spacing.unit * 2,
    margin : theme.spacing.unit * 1,
    backgroundColor : "#F8F8FF",
    width : "99%",
    borderRadius : "5px"
  },
  tag : {
    color : "#A9A9A9",
  }
});


function getSteps() {
  return ['Select', 'Meeting', 'Approved'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`;
    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';
    case 2:
      return `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`;
    default:
      return 'Unknown step';
  }
}

class AppStatus extends React.Component {

    state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
    <Layout>
    <Typography variant="h4" marked="center" align="center" component="h2" style={{margin:"5vh"}}>
       Application
    </Typography>
    <div className={classes.root}>

    <Grid container 
    spacing={0}
    justify="center"
    alignItems="center"
    direction="column"
    >
    <Grid item lg={10} xs={8}>
      <Card style={{padding:"1vh"}}>

      <Grid container  className={classes.container}>
        <Grid item xs={2} lg={2}>
        <Typography variant="caption" className={classes.tag}>
          Name
        </Typography>
        </Grid>

        <Grid item xs={10} lg={10}>
          <Typography variant="title">
           Temp
          </Typography>
        </Grid>
      </Grid>

      <Grid container  className={classes.container}>
        <Grid item xs={2} lg={2}>
        <Typography variant="caption" className={classes.tag} >
          Product
        </Typography>
        </Grid>

        <Grid item xs={10} lg={10}>
          <Typography variant="body2">
           Nothing 
          </Typography>
        </Grid>
      </Grid>

       <Grid container  className={classes.container}>
        <Grid item xs={2} lg={2}>
        <Typography variant="caption" className={classes.tag} >
          Contact
        </Typography>
        </Grid>

        <Grid item xs={10} lg={10}>
          <Typography variant="body2">
           8978654738 <br/>
           nothing@demo.com
          </Typography>
        </Grid>
      </Grid>

       <Grid container  className={classes.container}>
        <Grid item xs={2} lg={2}>
        <Typography variant="caption" className={classes.tag} >
          Experience
        </Typography>
        </Grid>

        <Grid item xs={10} lg={10}>
          <Typography variant="body2">
           Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
          </Typography>
        </Grid>
      </Grid>

       <Grid container className={classes.container}>
        <Grid item xs={2} lg={2}>
        <Typography variant="caption" className={classes.tag} >
          Education
        </Typography>
        </Grid>

        <Grid item xs={10} lg={10}>
          <Typography variant="body2">
           Lorem Ipsum Lorem IpsumLorem IpsumLorem  Lorem Ipsum Lorem IpsumLorem IpsumLorem Lorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="button" align="right" style={{margin:'2vh'}}>
        <Button variant="outlined" color="primary" style={{fontSize:"12px",fontWeight:"bold"}}>
          Apply 
        </Button>
      </Typography>

        {/* Status */}
        <Stepper activeStep={activeStep} orientation="vertical" className={classes.container}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <div style={{marginLeft:"40px"}}><Typography>{getStepContent(index)}</Typography></div>
            </Step>
          ))}
        </Stepper>
        </Card> 
        </Grid>
        </Grid>
      </div>
    </Layout>
    );
  }
}

export default withStyles(styles)(AppStatus);