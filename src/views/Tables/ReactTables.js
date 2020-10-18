import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";
import ReactTable from "components/ReactTable/ReactTable.js";

// collapse panels
import Accordion from "components/Accordion/Accordion.js";

import Build from "@material-ui/icons/Build";

import Delete from "@material-ui/icons/Delete";

import Add from "@material-ui/icons/Add";


import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";



import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import CardFooter from "components/Card/CardFooter";

import stylesImport from "assets/jss/material-dashboard-pro-react/customSelectStyle.js";

// Mock Data
// Prob remove to some other place

const dataTable = {
  headerRow: ["Service Provider", "Name", "Service Type", "Status"],
  footerRow: ["Service Provider", "Name", "Service Type", "Status"],
  dataRows: [
    ["EAP Services", "AskEAP", "Confidential Counselling", "enabled"]
   
  ]
};



const styles = {
  
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  },
  
};





const useStyles = makeStyles(styles);

export default function ReactTables() {
  
  const [data, setData] = React.useState(
    

    // RETURNS WHAT A ROW WILL LOOK LIKE
    // Can I integrate collaps here..??
    dataTable.dataRows.map((prop, key) => {
      return {
       
        id: key,
        serviceProvider: prop[0],
        name: prop[1],
        serviceType: prop[2],
        status: prop[3]
      };
    })
  );

  
  const classes = useStyles();
  return (
    <GridContainer>
 
      <GridItem xs={12}>
        <Card>
          <CardHeader color="primary" icon>
            <CardIcon color="primary">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>EAP Resources</h4>
          </CardHeader>
          <CardBody>
            <ReactTable
            
              columns={[
                {
                  Header: "Service Provider",
                  accessor: "serviceProvider",
                
                },
                {
                  Header: "Name",
                  accessor: "name",
                
                },
                {
                  Header: "Service Type",
                  accessor: "serviceType",
                 
                },
                {
                  Header: "Status",
                  accessor: "status",
                  width: 75
                
                
                }
              ]}
            
              
              data={data}
              
            />
  
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12}>      
<div >
<Button 
 color="primary"  
 size="sm"  
 style={{float:"right"}}
 >
<Add className={classes.icons} /> 
Add Resource From File           
</Button>{" "}
<Button 
size="sm" 
color="primary" 
style={{float:"right"}}
>
  <Add className={classes.icons} /> 
  Add Resource 
  </Button>
</div>       
      </GridItem>
  
    </GridContainer>
  );
}