import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Typography from '../Typography/Typography';

const styles = theme => ({
  background: {
    backgroundImage:'url(../static/img/h1.jpg)',
    backgroundColor: '#424242', // Average color of the background image.
    backgroundAttachment:'fixed',
    backgroundSize:'cover',
    height:500,
    marginTop:0,
    padding:230,
    zIndex:0,
    width:'100%',
    marginBottom : '2vh',
  },
  container : {
    margin:"5vh",
    paddingLeft : "33vh",
    paddingBottom : "2vh"
  },
  paper : {
    backgroundColor:"#FAFAFA",
    borderRadius : 0,
    padding : "2vh"
  },
  photo : {
    height : "240px",
    width : "240px",
  },
  title : {
    color : "#808080"
  },
  description : {
    color : "#A9A9A9"
  },
  about : {
    margin : "10vh",
    color : "#808080"
  },
});

function ProductHero(props) {
  const { classes } = props;


  return (
          
          <div style={
            {
              overflow:"hidden"
            }
          }>

            <div className={classes.background} />

            <Grid container spacing={16} className={classes.container}>
              <Grid item xs={12} md={3} lg={3}> 
                <Paper className={classes.paper}>
                  <img src="../static/img/s.jpg" className={classes.photo}/>
                  <Typography variant="title" className={classes.title}>
                    Startup
                  </Typography>
                  <Typography variant="body2" className={classes.description}>
                    It's all about Startup. It's all about Startup. It's all about Startup.It's all about Startup.It's Startup.
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} md={3} lg={3}> 
                <Paper className={classes.paper}>
                  <img src="../static/img/i.jpg" className={classes.photo}/>
                  <Typography variant="title" className={classes.title}>
                    Investor
                  </Typography>
                  <Typography variant="body2" className={classes.description}>
                   It's all about Investor. It's all about Investor. It's all about Investor.It's all about Investor.
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12} md={3} lg={3}> 
                <Paper className={classes.paper}>
                  <img src="../static/img/m.jpg" className={classes.photo}/>
                  <Typography variant="title" className={classes.title}>
                    Mentor
                  </Typography>
                  <Typography variant="body2" className={classes.description}>
                    It's all about Mentors. It's all about Mentors. It's all about Mentors.It's all about Mentors.It's Mentors.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

             <Typography variant="h4" marked="center" align="center" component="h2" style={{margin:"5vh"}}>
                 About us
             </Typography>
             <Typography variant="body2" className={classes.about}>
                    It's all about Mentors. It's all about Mentors. It's all about Mentors.It's all about Mentors.It's Mentors.It's all about Mentors. It's all about Mentors. It's all about Mentors.It's all about Mentors.It's Mentors.It's all about Mentors. It's all about Mentors. It's all about Mentors.It's all about Mentors.It's Mentors.It's all about Mentors. It's all about Mentors. It's all about Mentors.It's all about Mentors.It's Mentors.It's all about Mentors. It's all about Mentors. It's all about Mentors.It's all about Mentors.It's Mentors.It's all about Mentors. It's all about Mentors. It's all about Mentors.It's all about Mentors.It's Mentors.It's all about Mentors. It's all about Mentors. It's all about Mentors.It's all about Mentors.It's Mentors.It's all about Mentors. It's all about Mentors. It's all about Mentors.It's all about Mentors.It's Mentors.
             </Typography>

          </div>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);
