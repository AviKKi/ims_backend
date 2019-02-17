/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Navbar from '../components/Navbar/Navbar';
import TitleImg from '../components/TitleImg/TitleImg';
import Layout from '../components/Layout/Layout'

import Link from 'next/link';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 0,
  },
});

class Index extends React.Component {
  
  render() {

    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Layout>
          <TitleImg />
        </Layout>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
