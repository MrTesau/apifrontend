import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";
import Dehaze from "@material-ui/icons/Dehaze";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";
// Card ex page imports
import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import loginPageStyle from "assets/jss/material-dashboard-pro-react/views/loginPageStyle";

import CardHeaderStyles from "assets/jss/material-dashboard-pro-react/components/cardHeaderStyle.js";
import CardStyles from "assets/jss/material-dashboard-pro-react/components/cardStyle.js";
import { shadows } from '@material-ui/system';

// FA ICONS
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

// FA ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIndustry } from '@fortawesome/free-solid-svg-icons'
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

import Button from "components/CustomButtons/Button.js";
import CardFooter from "components/Card/CardFooter.js";
import { Container } from "@material-ui/core";


library.add(fas)

const styles = {
  ...dashboardStyle,
  ...loginPageStyle,
  customCardContentClass: {
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
    fontWeight: "400"
  },
   cardHeader: {
    marginBottom: "20px"
  },
  textCenter: {
    textAlign: "center"
  },
 ...CardHeaderStyles,
 ...CardStyles,
 // Custom class added, replaced inline style :)
 divStyle: {
    display:"flex",
    backgroundColor:"#9cacce",
    height: "55px",
    padding: "10px",
    paddingBottom:"0px",
    paddingTop: "0px",
    marginTop: "0px",
    borderBottom: "0.5px solid #cad5c6"
 }
  
};

const useStyles = makeStyles(styles);

export default function RegularTables() {
  const classes = useStyles();

  const Opentab =(url) => {
    var win = window.open(url, '_blank');
    win.focus();
  }

  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card className={classes.card}>
          <CardHeader color="primary" icon>

            <CardIcon color="primary">
              <Dehaze />
            </CardIcon>

            <h4 className={classes.cardIconTitle}>Managers Resources </h4>
          </CardHeader>
          <CardBody className={classes.customCardContentClass}>

          {/* EXAMPLE OF WHY WE NEED BOOTSTRAP 
           */}
          <GridItem xs={12}>
          <Card className={classes.cardRaised} style={{padding:"0px"}}>

            <div style={{
                display:"flex",
                backgroundColor:"#adc2a6",
                height: "55px",
                padding: "10px",
                paddingBottom:"0px",
                paddingTop: "0px",
                marginTop: "0px",
                borderBottom: "0.5px solid #cad5c6"
                }}>

            <span  style={{marginTop:"0px", marginBottom:"0px", marginRight: "12px",display: "flex",
                alignItems: "center",}} >
          
            <FontAwesomeIcon icon={faIndustry} inverse size="2x"  /> 
           
            
            </span>
            
            <h5 style={{
                fontWeight: "600",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                color: "#515b4e",
                fontFamily: "Roboto"
                 }}>INDUSTRY SPECIFIC</h5>

            </div>
            <CardBody  className={classes.cardBodyColor} >
             {/* 
             Data = arr of Objects
             Need to:
             Req server
             format response data Obj 
             push each to tableData
             */}
            <Table
              
              hover
              tableHead={["Name", "Description"]}
              tableData={[
               
                {
                  color: "#fff",
                  data: [
                   
                    "Getting Started with Workplace Wellbeing for SMEs",
                    "Good4work workplace wellbeing assessment for small-medium sized employers",
                   
                  ],
                  url:"https://www.good4work.nz/"
                },
               
                {
                  color: "#fff",
                  data: [
                   
                    "test field 2",
                    "testing",
                   
                  ],
                  url:"https://www.google.com/"
                }
               
              ]}
            />
            </CardBody>
          </Card>
          </GridItem>

          
          <GridItem xs={12}>
          <Card className={classes.cardRaised} style={{padding:"0px"}}>
            <div className={classes.divStyle}>
            <span  style={{marginTop:"0px", marginBottom:"0px", marginRight: "12px",display: "flex",
                alignItems: "center",}} >
            <FontAwesomeIcon icon={faUniversalAccess} inverse size="2x"  /> 
            </span>
            <h5 style={{
                fontWeight: "600",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                color: "#515b4e",
                fontFamily: "Roboto"
                 }}>WORK COMPETENCY RESOURCES</h5>

            </div>
            <CardBody  className={classes.cardBodyColor} >
            <Table
              hover
              tableHead={["Name", "Description"]}
              tableData={[
                {
                  color: "#fff",
                  data: [
                   
                    "Getting Started with Workplace Wellbeing for SMEs",
                    "Good4work workplace wellbeing assessment for small-medium sized employers",
                   
                  ],
                  url:"https://www.google.com/"
                },
                {
                  color: "#fff",
                  data: [
                   
                    "test field 2",
                    "Good4work workplace wellbeing assessment for small-medium sized employers",
                   
                  ],
                  url:"https://www.google.com/"
                }
              ]}
            />
            </CardBody>
          </Card>
          </GridItem>
          
          <GridItem xs={12}>
          <Card className={classes.cardRaised} style={{padding:"0px"}}>
            <div style={{
                display:"flex",
                backgroundColor:"#c9bdad",
                height: "55px",
                padding: "10px",
                paddingBottom:"0px",
                paddingTop: "0px",
                marginTop: "0px",
                borderBottom: "0.5px solid #cad5c6"
                }}>

            <span  style={{marginTop:"0px", marginBottom:"0px", marginRight: "12px",display: "flex",
                alignItems: "center",}} >
            <FontAwesomeIcon icon={faChartLine} inverse size="2x"  /> 
            </span>
            <h5 style={{
                fontWeight: "600",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                color: "#515b4e",
                fontFamily: "Roboto"
                 }}>MEANINGFUL WORK RESOURCES</h5>
            </div>
            <CardBody  className={classes.cardBodyColor} >
            <Table
              hover
              tableHead={["Name", "Description"]}
              tableData={[
                {
                  color: "#fff",
                  data: [
                   
                    "Getting Started with Workplace Wellbeing for SMEs",
                    "Good4work workplace wellbeing assessment for small-medium sized employers",
                   
                  ]
                },
                {
                  color: "#fff",
                  data: [
                   
                    "test field 2",
                    "testing",
                   
                  ]
                }
              ]}
            />
            </CardBody>
          </Card>
          </GridItem>
         
          <GridItem xs={12}>
          <Card className={classes.cardRaised} style={{padding:"0px"}}>
            <div style={{
                display:"flex",
                backgroundColor:"#fbc7c7",
                height: "55px",
                padding: "10px",
                paddingBottom:"0px",
                paddingTop: "0px",
                marginTop: "0px",
                borderBottom: "0.5px solid #cad5c6"
                }}>

            <span  style={{marginTop:"0px", marginBottom:"0px", marginRight: "12px",display: "flex",
                alignItems: "center",}} >
          
            <FontAwesomeIcon icon={faUsers} inverse size="2x"  />  
            </span>
            <h5 style={{
                fontWeight: "600",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                color: "#515b4e",
                fontFamily: "Roboto"
                 }}>GENERAL</h5>
            </div>
            <CardBody  className={classes.cardBodyColor} >
            <Table
              hover
              tableHead={["Name", "Description"]}
              tableData={[
                {
                  color: "#fff",
                  data: [
                   
                    "Getting Started with Workplace Wellbeing for SMEs",
                    "Good4work workplace wellbeing assessment for small-medium sized employers",
                   
                  ]
                },
                {
                  color: "#fff",
                  data: [
                   
                    "test field 2",
                    "testing",
                   
                  ]
                }
              ]}
            />
            </CardBody>
          </Card>
          </GridItem>
                      
          </CardBody>
        </Card>
         
      </GridItem>
      

       {/* 
         DO I Want to Turn each Card into A custom Component?

        -might be easier to render different data in a uniform way
        - accept props
        - display props as below
        - render each

           */}
      <GridItem xs={4} >
            <Card login>
            <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="primary"
                style={{
                  padding: "5px"
                  }}
              
              >
              <div style={{
                display:"flex",
                height: "55px",
                margin: "auto",
                
                }}>
           <span  style={{margin:"auto",display: "flex", paddingLeft:"5px",
                alignItems: "center",}} >
            <FontAwesomeIcon icon={faUsers} inverse size="2x"  />  
           </span>
           <h5 style={{
                color: "#fff", 
                fontWeight: "400",
                fontSize: "17px",
                margin:"auto"
                }}>Create a Pro-mental Health Environment
            </h5>
            </div>
             </CardHeader>
            <CardBody>
            <div style={{
                display:"flex",
                
                justifyContent: "center",
                alignItems: "center",
                minHeight: "60px",
                borderBottom: "0.5px solid #cad5c6",
                
                }}>
              <Button  size="sm" round style={{backgroundColor:"#fbc7c7", color:"black",
               fontSize: "12px", width:"100px"}}>
                 GENERAL
              </Button>
               </div>  
              <div style={{
                display:"flex",
                justifyContent: "center",
                alignItems: "center", 
                width: "250px", 
                height:"80px",
                fontWeight: "400"
                }}>
               Wellplaces resources on building a <br />
                          healthy workplace 
              </div>

              

              </CardBody>

              <CardFooter>
                <GridContainer>
                  <GridItem xs={12}>

              <div>
              <Button  size="sm" color="primary" style={{float:"right"}}>
                  Read More
              </Button>
               </div>

                  </GridItem>
               </GridContainer>

              </CardFooter>
            </Card>
        </GridItem>


         {/* 
         DO I Want to Turn each Card into A custom Component?
         
        -might be easier to render different data in a uniform way
        - accept props
        - display props as below
        - render each

           */}

      <GridItem xs={4} >
            <Card login>
            <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="primary"
                style={{
                  padding: "5px"
                  }}
              
              >
              <div style={{
                display:"flex",
                height: "55px",
                margin: "auto",
                
                }}>
           <span  style={{margin:"auto",display: "flex", paddingLeft:"5px",
                alignItems: "center",}} >
            <FontAwesomeIcon icon={faUsers} inverse size="2x"  />  
           </span>
           <h5 style={{
                color: "#fff", 
                fontWeight: "400",
                fontSize: "17px",
                margin:"auto"
                }}>Create a Pro-mental Health Environment
            </h5>
            </div>
             </CardHeader>
            <CardBody>
            <div style={{
                display:"flex",
                
                justifyContent: "center",
                alignItems: "center",
                minHeight: "60px",
                borderBottom: "0.5px solid #cad5c6",
                
                }}>
              <Button  size="sm" round style={{backgroundColor:"#fbc7c7", color:"black",
               fontSize: "12px", width:"100px"}}>
                 GENERAL
              </Button>
               </div>  
              <div style={{
                display:"flex",
                justifyContent: "center",
                alignItems: "center", 
                width: "250px", 
                height:"80px",
                fontWeight: "400"
                }}>
               Wellplaces resources on building a <br />
                          healthy workplace 
              </div>
              </CardBody>
              <CardFooter>
                <GridContainer>
                  <GridItem xs={12}>
              <div>
              <Button  size="sm" color="primary" style={{float:"right"}}>
                  Read More
              </Button>
               </div>
                  </GridItem>
               </GridContainer>
              </CardFooter>
            </Card>
        </GridItem>

        <GridItem xs={4} >
            <Card login>
            <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="primary"
                style={{
                  padding: "5px"
                  }}
              
              >
              <div style={{
                display:"flex",
                height: "55px",
                margin: "auto",
                
                }}>
           <span  style={{margin:"auto",display: "flex", paddingLeft:"5px",
                alignItems: "center",}} >
            <FontAwesomeIcon icon={faUsers} inverse size="2x"  />  
           </span>
           <h5 style={{
                color: "#fff", 
                fontWeight: "400",
                fontSize: "17px",
                margin:"auto"
                }}>Create a Pro-mental Health Environment
            </h5>
            </div>
             </CardHeader>
            <CardBody>
            <div style={{
                display:"flex",
                
                justifyContent: "center",
                alignItems: "center",
                minHeight: "60px",
                borderBottom: "0.5px solid #cad5c6",
                
                }}>
              <Button  size="sm" round style={{backgroundColor:"#fbc7c7", color:"black",
               fontSize: "12px", width:"100px"}}>
                 GENERAL
              </Button>
               </div>  
              <div style={{
                display:"flex",
                justifyContent: "center",
                alignItems: "center", 
                width: "250px", 
                height:"80px",
                fontWeight: "400"
                }}>
               Wellplaces resources on building a <br />
                          healthy workplace 
              </div>
              </CardBody>
              <CardFooter>
                <GridContainer>
                  <GridItem xs={12}>
              <div>
              <Button  size="sm" color="primary" style={{float:"right"}}>
                  Read More
              </Button>
               </div>
                  </GridItem>
               </GridContainer>
              </CardFooter>
            </Card>
        </GridItem>

    </GridContainer>
  );
}
