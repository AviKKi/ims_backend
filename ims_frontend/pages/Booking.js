import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button'

// import DateFnsUtils from '@date-io/date-fns';
// import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
// import DateFnsUtils from '@date-io/date-fns'
// import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers'

import LayoutBody from '../components/Layout/LayoutBody';
import Typography from '../components/Typography/Typography';
import Link from 'next/link';
import Layout from '../components/Layout/Layout';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4,
  },
  images: {
    marginTop: theme.spacing.unit * 5,
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: 130,
    marginTop: theme.spacing.unit * 0.5,
   
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButtonN: {
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
    color: theme.palette.common.white,
  },
  imageButtonR: {
    display: 'flex',
    alignItems: 'right',
    justifyContent: 'right',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageName: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 10}px ${theme.spacing.unit + 6}px`,
  },
  imageRate: {
    position: 'relative',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

// function DateTimePicker(props){
//   const {handleDateChange, selectedDate, } = props
//   return (
//       <MuiPickersUtilsProvider utils={DateFnsUtils}>
//         <Grid container className={classes.grid} justify="space-around">
//           <DatePicker
//             margin="normal"
//             label="Date picker"
//             value={selectedDate}
//             onChange={handleDateChange}
//           />
//           <TimePicker
//             margin="normal"
//             label="Time picker"
//             value={selectedDate}
//             onChange={handleDateChange}
//           />
//         </Grid>
//       </MuiPickersUtilsProvider>
//     );
// }

const OverlayDialog = withStyles(styles)((props)=>{
   const { classes } = props;
  return (<Dialog
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Set the Schedule for Booking"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              All about booking of the conference room
            </DialogContentText>
            <form className={classes.container} noValidate>
              <TextField
                id="datetime-local"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button 
            onClick={props.handleClose} 
            color="primary">
              Disagree
            </Button>
            <Button 
            onClick={props.handleClose} 
            color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>)

}
)

class Booking extends React.Component{
  state = {
      open: false,
  }


  handleClickOpen = () => {
      this.setState({ open: true })
    }
  
  handleClose = () => {
      this.setState({ open: false })
  }


  render(){
    const { classes } = this.props;
  
  
    const images = [
      {
        url:
          '../static/img/hall.jpg',
        title: 'Demo',
        width: '100%',
        link: '',
        rate : "50$"
      },
      {
        url:
          '../static/img/hall.jpg',
        title: 'Temp',
        width: '100%',
        link: '',
        rate : "60$"
      },
      {
        url:
         '../static/img/hall.jpg',
        title: 'Next',
        width: '100%',
        link: '',
        rate : "45$"
      },
    ];
  
    return (
    <div id="Events">
    <Layout>
      <LayoutBody className={classes.root} component="section" width="large">
        <Typography variant="h4" marked="center" align="center" component="h2">
          For All Bookings
        </Typography>
        
        <div className={classes.images} 
          onClick={this.handleClickOpen}
          >
          {images.map(image => (
            <Link href={image.link}>
            <ButtonBase
              key={image.title}
              className={classes.imageWrapper}
              style={{
                width: image.width,
              }}
            >
              <div
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
              />
              {/*<div className={classes.imageBackdrop} />*/}
  
              <Grid container>
                <Grid item xs={9}>
                    <div className={classes.imageButtonN}>
                      <Typography
                        component="h3"
                        variant="h6"
                        color="inherit"
                        className={classes.imageName}
                      >
                        {image.title}
                        <div className={classes.imageMarked} />
                      </Typography>
                      </div>
                    </Grid>
  
                    <Grid item xs={3}>
                      <div className={classes.imageButtonR}>
                      <Typography
                        component="h3"
                        variant="h6"
                        color="inherit"
                        align="right"
                        className={classes.imageRate}
                      >
                        {image.rate}
                        <div className={classes.imageMarked} />
                      </Typography>
                    </div>
                </Grid>
              </Grid>
            </ButtonBase>
            </Link>
          ))}
        </div>
      </LayoutBody>
      </Layout>
  
    <OverlayDialog
      open={this.state.open}
      handleClose={this.handleClose}
     />
    </div>
    );
  }}

Booking.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Booking);
