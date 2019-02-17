import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import withWidth from '@material-ui/core/withWidth';

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import NavPills from "../components/NavPills/NavPills";
import pillsStyle from "../components/NavPills/pillsStyle.jsx";
import TotalEvent from "../components/Dashboard/TotalEvent";
import Layout from "../components/Layout/Layout";


class SectionPills extends React.Component {
  render() {
    const { classes } = this.props;
    console.log(this.props.width)
    const orientation = this.props.width==="xs"?undefined:{
                    tabsGrid: { xs: 5, sm: 3, md: 2 },
                    contentGrid: { xs: 12, sm: 9, md: 10 }
                  };
    console.log(orientation)
    return (
      <Layout>
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
           
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <NavPills
                  color="info"
                  horizontal={orientation}
                  tabs={[
                    {
                      tabButton: "Dashboard",
                      tabIcon: Dashboard,
                      tabContent: (
                        <TotalEvent />
                      )
                    },
                    {
                      tabButton: "Schedule",
                      tabIcon: Schedule,
                      tabContent: (
                        <span>
                          <p>
                            Efficiently unleash cross-media information without
                            cross-media value. Quickly maximize timely
                            deliverables for real-time schemas.
                          </p>
                          <br />
                          <p>
                            Dramatically maintain clicks-and-mortar solutions
                            without functional solutions. Dramatically visualize
                            customer directed convergence without revolutionary
                            ROI. Collaboratively administrate empowered markets
                            via plug-and-play networks. Dynamically
                            procrastinate B2C users after installed base
                            benefits.
                          </p>
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      </Layout>
    );
  }
}

export default withWidth()(withStyles(pillsStyle)(SectionPills));
