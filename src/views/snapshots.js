import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// Main edited table component
import Table from "views/Components/snapshotTable.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";



const styles = {
  customCardContentClass: {
    paddingLeft: "0",
    paddingRight: "0"
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  textCenter: {
    textAlign: "center"
  },cardHeader: {
    marginBottom: "20px"
  },
};

const useStyles = makeStyles(styles);

// To Use another starter page
// Copy from Backup file

export default function RegularTables() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={11} style={{margin:"auto"}}>
        <Card>
        <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="primary"
                style={{
                  padding: "5px"
                  }}
              
              >
                <h4 style={{
                color: "#fff", 
                fontWeight: "500",
                fontSize: "18px"
                }}>Heads Up Assessments</h4>
      </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"

              tableHead={["Date", "Status", "Points"]}

              tableData={[

                ["23/02/2020", "Completed", ""],
                ["23/02/2020", "Completed", ""],
                ["23/02/2020", "Completed", ""],
                ["23/02/2020", "Completed", ""],

              ]}

              coloredColls={[3]}
              colorsColls={["primary"]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
