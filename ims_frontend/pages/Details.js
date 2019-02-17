import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import List from "@material-ui/icons/List";

// core components
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import NavPills from "../components/NavPills/NavPills";
import pillsStyle from "../components/NavPills/pillsStyle.jsx";

import Layout from "../components/Layout/Layout"
import MDetails from "../components/Details/MDetails"
import IDetails from "../components/Details/IDetails"
import SDetails from "../components/Details/SDetails"

class SectionPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Layout>
      <div className={classes.section} style={{width:'full'}}>
        <div className={classes.container}>
                <NavPills
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Startup",
                      tabIcon: List,
                      tabContent: (
                        <span>
                          <SDetails />
                        </span>
                      )
                    },
                    {
                      tabButton: "Mentor",
                      tabIcon: List,
                      tabContent: (
                        <span>
                          <MDetails />
                        </span>
                      )
                    },
                    {
                      tabButton: "Investor",
                      tabIcon: List,
                      tabContent: (
                        <span>
                          <IDetails />
                        </span>
                      )
                    },
                  ]}
                />
        </div>
      </div>
      </Layout>
    );
  }
}

export default withStyles(pillsStyle)(SectionPills);
