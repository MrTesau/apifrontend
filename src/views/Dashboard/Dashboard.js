import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// react plugin for creating vector maps 
import { VectorMap } from "react-jvectormap";


// LINE PROGRESS
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// CIRC PROGRESS
import CircularProgress from '@material-ui/core/CircularProgress';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import Timeline from "@material-ui/icons/Timeline";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";
// import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";


// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Button from "components/CustomButtons/Button.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

//Alert boxes
import SweetAlert from "react-bootstrap-sweetalert";

//Buttons
import PriorityHigh from "@material-ui/icons/PriorityHigh";


//test gauge
import ApexChart from "components/ReactTable/Crow.js";


import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
  roundedLineChart,
  straightLinesChart,
  simpleBarChart,
  
  multipleBarsChart,
  colouredLinesChart,
  pieChart
} from "variables/charts";

import styles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";

import {
  successColor,
  tooltip,
  cardTitle,
  grayColor, whiteColor,  hexToRgb,primaryColor,
  warningColor,
  dangerColor,
  
  infoColor, 
  roseColor
  
 
} from "assets/jss/material-dashboard-pro-react.js";

import Legend from "chartist-plugin-legend";
var Chartist = require("chartist");

// export this once all settings are right
// // // variables used to create animation on charts
// ############################# "rgba(" + hexToRgb(whiteColor) + ", 0.8)"

var delays = 80, 
  durations = 500;
var delays2 = 80,
  durations2 = 500;



//BAR CHART DATA EXAMPLE ////////////////////

const exChartData = {

  data: {

    labels: [
      "Jan 2019",
      "Apr 2019",
      "Jul 2019",
      "Oct 2019",
      "Jan 2020",
      "Apr 2020",
      "Jul 2020",
    ],
    series: [ [54, 44, 32, 78, 55, 45, 89] ],
    
  },
  options: {
    width: 450,
    height: 250,
    

    axisX: {
      showGrid: true
    },
    low: 0,
    high: 100,

    chartPadding: {
      top: 20,
      right: 10,
      bottom: 10,
      left: 10
    }
  },
  responsiveOptions: [
    [
      "screen and (max-width: 640px)",
      {
        seriesBarDistance: 25,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }
    ]
  ],

  animation: {
    draw: function(data) {
      if (data.type === "bar") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }

};

const MaxYAxis = Math.max(...exChartData.data.series[0]);
console.log(MaxYAxis);
exChartData.options.high = MaxYAxis;

//LINE CHART DATA ///////////////////
//////////////////////////////////////////////////
const colouredLineChart = {
  data: {
    labels: [
      "Jan 2019",
      "Apr 2019",
      "Jul 2019",
      "Oct 2019",
      "Jan 2020",
      "Apr 2020",
      "Jul 2020",
    ],
    series:[ 
    { "name": "Money A", "data": [54, 67, 45, 21, 76, 34, 59] },

    { "name": "Money C", "data": [14, 94, 42, 78, 21, 45, 89]},
   
  ]
  },
  options: {
    plugins: [
      Chartist.plugins.legend({
        removeAll: true,
        position: 'bottom'
     })
  ],
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 10
    }),
    axisY: {
      showGrid: true,
      offset: 40
    },
    axisX: {
      showGrid: true
    },
    low: 0,
    showArea: true,
    
    showPoint: true,
    height: "300px",
    fullWidth: true,
    chartPadding: {
      right: 40
      }
  },
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};
// CHARTIST CSS CUSTOM STYLES = chartis sass file


const useStyles = makeStyles(styles);

export default function Dashboard(props) {
  const classes = useStyles();
  const [alert, setAlert] = React.useState(null);
  
  

  /*React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  typography error NaN
   <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
             props.value
              )}%`}</Typography>


import linestylessyles into dasboardstyles
overwrite style rules
assign to line using classes.rule
*/

// ALERT FUNCTIONS
// Note: can change button color via settings in material/ buttonstyle.js settings.
// twitter color looks similar to faded Sanson color
const competency = () => {
  setAlert(
    <SweetAlert
      style={{ display: "block", marginTop: "-100px" }}
      title="Competency At Work"
      onConfirm={() => hideAlert()}
      onCancel={() => hideAlert()}
      confirmBtnCssClass={classes.button + " " + classes.info}
    >
<hr />
 <br/>     
<p><strong>This dimension represents your employees' perception of their work performance.</strong></p>
<p>A higher score in this dimension means that your employees will feel more competent at work
</p>
<br/>
<p>
Our research has shown that the higher the score in the COMPETENCY AT WORK dimension,
 the more likely employees will exhibit good-will and civil behaviour at work.
 </p>
 <br />
    </SweetAlert>
  );
};
const workLifeAlert = () => {
  setAlert(
    <SweetAlert
      style={{ display: "block", marginTop: "-100px" }}
      title="Work-life Balance"
      onConfirm={() => hideAlert()}
      onCancel={() => hideAlert()}
      confirmBtnCssClass={classes.button + " " + classes.info}
    >
<hr />
 <br/>     
<p><strong>This dimension represents your employees' perception of their work-life balance.</strong></p>
<p>This includes the time they have for both job and family,
   and their ability to leave work at work and home issues at home.
</p>
<br/>
<p>
A higher score in this dimension means employees’
 have a better work-life balance which is important for overall wellbeing.
 </p>
 <br />
    </SweetAlert>
  );
};
const workplaceRelAlert = () => {
  setAlert(
    <SweetAlert
      style={{ display: "block", marginTop: "-100px" }}
      title="Workplace Relationships"
      onConfirm={() => hideAlert()}
      onCancel={() => hideAlert()}
      confirmBtnCssClass={classes.button + " " + classes.info}
    >
<hr />
 <br/>     
<p><strong>This dimension represents how well your employees' get along with each other at work.</strong></p>
<p>This includes the relationships and support they have from their co-workers and managers. 
  A higher score in this dimension means better quality workplace relationships.
</p>
<br/>
<p>
Our research has shown that the higher the score in the WORKPLACE RELATIONSHIPS dimension, 
the more committed employees' are to the workplace, and likely to exhibit civil behaviours.
 </p>
 <br />
    </SweetAlert>
  );
};

const hideAlert = () => {
  setAlert(null);
};



  return (
    <div>
      {alert}
      <GridContainer spacing={1}>

      <GridItem xs={12} >
        <Card login >
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
                }}>Your Heads Up Dimensional Data</h4>
      </CardHeader>
      <CardBody>
      <p>  
      <strong>Note</strong>: Please keep in mind that the below aggregated scores represent the averages for 
      all employees engaging with Heads Up. 
      The closer your Engagement rate is to 100%, 
      the more accurately the aggregated scores reflect the whole of your organisation. 
      Due to anonymity concerns, the scores may be blank if fewer than 5 employees have participated.
      </p>
      <br />
      <p>
     Our research has shown that individuals with self-reported untreated diagnosed depression or 
     Anxiety will have lower scores in all Dimensions compared to individuals being treated or without a
     diagnosis.
     </p>
     </CardBody> 
      </Card>
      </GridItem>
     




      <GridItem xs={12} sm={12} md={4}>
          <Card chart className={classes.cardHover}>
            <CardHeader color="rose" >
              {/* Add inline to classes obj? */}
            <div style={{ paddingTop:"30px",paddingBottom:"-10px", marginBottom:"-50px"}}>
              <ApexChart series={[40]} />
          </div>
          
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Refresh"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button simple color="info" justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Change Date"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
              <div> 
                <Button color="twitter" justIcon round className={classes.marginRight} size="sm" 
                onClick={competency}>
                <PriorityHigh className={classes.icons} />
              </Button>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        
        {/* ALERT TEST */}
        <GridItem xs={12} sm={12} md={4}>
          <Card chart className={classes.cardHover}>
            <CardHeader color="rose" >
              {/* Add inline to classes obj? */}
            <div style={{ paddingTop:"30px",paddingBottom:"-10px", marginBottom:"-50px"}}>
              <ApexChart series={[40]} />
          </div>
          
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Refresh"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button simple color="info" justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Change Date"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
              <div> 
                <Button color="twitter" justIcon round className={classes.marginRight} size="sm" 
                onClick={competency}>
                <PriorityHigh className={classes.icons} />
              </Button>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
   
        
         
             

        <GridItem xs={12} sm={12} md={4}>
          <Card chart className={classes.cardHover}>
            <CardHeader color="rose" >
              {/* Add inline to classes obj? */}
            <div style={{ paddingTop:"30px",paddingBottom:"-10px", marginBottom:"-50px"}}>
              <ApexChart series={[40]} />
          </div>
          
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Refresh"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button simple color="info" justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Change Date"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardTitle}>Daily Sales</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
              <div> 
                <Button color="twitter" justIcon round className={classes.marginRight} size="sm" 
                onClick={competency}>
                <PriorityHigh className={classes.icons} />
              </Button>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
         
     

     {/* ////////////////// BAR GRAPHS  /////////////////////// */}

        <GridItem xs={12} sm={12} md={6}>
          
          <Card chart className={classes.cardHover}>
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
                }}>Competency At Work Over Time</h4>
      </CardHeader>
            
            <CardBody>
              <div 
                  >
            <ChartistGraph
                className="ct-chart-black-colors"
                data={exChartData.data}
                type="Bar"
                options={exChartData.options}
                responsiveOptions={exChartData.responsiveOptions}
                listener={exChartData.animation}
              />
             </div>
            </CardBody>
            
          </Card>
        </GridItem>

       {/* ////////////////// BAR GRAPHS  /////////////////////// */}

        <GridItem xs={12} sm={12} md={6}>
          
          <Card chart className={classes.cardHover}>
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
                }}>Work-life Balance Over Time</h4>
      </CardHeader>
            
            <CardBody>
              <div 
                  >
            <ChartistGraph
                className="ct-chart-black-colors"
                data={exChartData.data}
                type="Bar"
                options={exChartData.options}
                responsiveOptions={exChartData.responsiveOptions}
                listener={exChartData.animation}
              />
             </div>
            </CardBody>
            
          </Card>
        </GridItem>



      {/* ////////////////////////////////////////////

        <GridItem xs={12} sm={12} md={6}>
          
          <Card chart className={classes.cardHover}>
            <CardHeader color="primary" className={classes.cardHeaderHover}>

              <ChartistGraph
                className="ct-chart-white-colors"
                data={exChartData.data}
                type="Bar"
                options={exChartData.options}
                responsiveOptions={exChartData.responsiveOptions}
                listener={exChartData.animation}
              />


            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Refresh"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button simple color="info" justIcon>
                    <Refresh className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Change Date"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardTitle}>Email Subscriptions</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>

      //// */}





        <GridItem xs={12}>
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
                }}>Dimensions Over Time</h4>
      </CardHeader>
            <CardBody>
              <ChartistGraph
                data={colouredLineChart.data}
                type="Line"
                options={colouredLineChart.options}
                listener={colouredLineChart.animation}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
