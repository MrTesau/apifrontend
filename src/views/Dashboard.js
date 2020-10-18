import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
// import InfoOutline from "@material-ui/icons/InfoOutline";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardText from "components/Card/CardText.js";

//Alert boxes
import SweetAlert from "react-bootstrap-sweetalert";
//Buttons
import PriorityHigh from "@material-ui/icons/PriorityHigh";
//test gauge
import ApexChart from "components/ReactTable/Crow.js";
import Chart from "react-apexcharts";
import styles from "assets/dashboardStyle.js";
import Legend from "chartist-plugin-legend";

import Assignment from "@material-ui/icons/Assignment";
import CardIcon from "components/Card/CardIcon.js";
var Chartist = require("chartist");

// Unknown
var delays = 80,
  durations = 500;

// BAR CHART DATA EXAMPLE 
// Logic to Implement:
// Req Server for data
// On res retrieve and push data to chartData object
// Create chartData object for each set returned
// Render a Bar Graph component for each chartData Object

const exChartData = {
  
  // Chartist Below
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
    series: [[54, 44, 32, 78, 55, 45, 89]], //exChartData.data.series[0][exChartData.data.series[0].length-1]
  },
};

//LINE CHART DATA ///////////////////
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
    series: [
      { "name": "Money A", "data": [54, 67, 45, 21, 76, 34, 59] },

      { "name": "Money C", "data": [14, 94, 42, 78, 21, 45, 89] },

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
    height: "370px",
    fullWidth:true,
    chartPadding: {
      right: 40
    }
  },
  animation: {
    draw: function (data) {
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
//  Rem : CHARTIST CSS CUSTOM STYLES = chartis sass file
// assets\scss\material-dashboard-pro-react\plugins\_plugin-react-chartist.scss


// Items data ( server Req )
// For use in Carosel
var items = [
  { 
   id: 1,
   title: 'Competency at Work',
   barTitle: 'Competency at Work Over Time',
   description:`This dimension represents your employees' perception of their work performance.
  A higher score in this dimension means that your employees will feel more competent at work
  Our research has shown that the higher the score in the COMPETENCY AT WORK dimension,
   the more likely employees will exhibit good-will and civil behaviour at work.`,
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
    series: [[4, 84, 92, 88, 95, 15, 19]],
    mockData: [{ name: "placeholder", data:[5,45, 35, 78, 15, 15, 19]}]
  },

  },
  { 
    id: 2,
    title: 'Work Life Balance',
    barTitle: 'Work Life Balance Over Time',
    description:`This dimension represents your employees' perception of their work-life balance.
    This includes the time they have for both job and family, and their ability to leave work at work and home issues at home.
    A higher score in this dimension means employees’ have a better work-life balance which is important for overall wellbeing.`,
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
     series: [[54, 44, 32, 78, 55, 45, 89]],
     mockData: [{ name: "placeholder", data:[5,45, 35, 34, 34, 34, 19]}]
   },
 
   },
   { 
    id: 3,
    title: 'Test 3',
    barTitle: 'Work Life Balance Over Time',
    description:`This dimension represents your employees' perception of their work-life balance.
    This includes the time they have for both job and family, and their ability to leave work at work and home issues at home.
    A higher score in this dimension means employees’ have a better work-life balance which is important for overall wellbeing.`,
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
     series: [[14, 45, 35, 78, 65, 15, 32]],
     mockData: [{ name: "placeholder", data:[5,4, 3, 7, 1, 1, 19]}]
   },
 
   },
   { 
    id: 4,
    title: 'Wonce',
    barTitle: 'Work Life Balance Over Time',
    description:`This dimension represents your employees' perception of their work-life balance.
    This includes the time they have for both job and family, and their ability to leave work at work and home issues at home.
    A higher score in this dimension means employees’ have a better work-life balance which is important for overall wellbeing.`,
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
     series: [[54, 44, 32, 78, 55, 45, 89]],
     mockData: [{ name: "placeholder", data:[52,34, 39, 18, 15, 1, 91]}]
   },
 
   },
   { 
    id: 5,
    title: 'I hate this LOL',
    barTitle: 'Work Life Balance Over Time',
    description:`This dimension represents your employees' perception of their work-life balance.
    This includes the time they have for both job and family, and their ability to leave work at work and home issues at home.
    A higher score in this dimension means employees’ have a better work-life balance which is important for overall wellbeing.`,
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
     series: [[5,34, 3, 18, 15, 15, 19]],
     mockData: [{ name: "placeholder", data:[5,34, 3, 18, 15, 15, 19]}]
   },
 
   },
   { 
    id: 6,
    title: 'Nah its Ait',
    barTitle: 'Work Life Balance Over Time',
    description:`This dimension represents your employees' perception of their work-life balance.
    This includes the time they have for both job and family, and their ability to leave work at work and home issues at home.
    A higher score in this dimension means employees’ have a better work-life balance which is important for overall wellbeing.`,
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
     series: [[54, 44, 32, 78, 55, 45, 89]],
     mockData: [{ name: "placeholder", data: [54, 44, 32, 78, 55, 45, 89]}]
     
   },
 
   },
]

const useStyles = makeStyles(styles);

// Component:
export default function Dashboard(props) {
  const classes = useStyles();

  const [dimensions, setDimensions] = React.useState(items); //set dimensions to 1 item => onclick call setDimension to required new dimension
  const [selectedDimension, changeDimension] = React.useState(items[0]);
  // This solution works or alternatively:
  // Set state here
  // pass into ApexBar Component
  // Modify Apexbar to be stateless/rely only on props
  // May work..?/ clean solution
  const [options, setOptions] = React.useState({
    chart: {
        id: "basic-bar"
    },
    xaxis: {
        categories: selectedDimension.data.labels
    },
       dataLabels: {
        enabled: false
    },
    plotOptions: {
        bar: {
            colors: {
                ranges: [{
                    from: 0,
                    to: 100,
                    color: "#41babe"
                }]
            }
        }
    }   
});
  return (
    <div >
      {alert}
  <GridContainer spacing={1}>
   <GridItem xs={12} >
          <Card login style={{background:"#edf2f6"}} >
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
      <p style={{ 
         fontFamily: "inherit",
         color: "black"
         }}>
      <strong>Note</strong>: Please keep in mind that the below aggregated scores represent the averages for
      all employees engaging with Heads Up.
      The closer your Engagement rate is to 100%,
      the more accurately the aggregated scores reflect the whole of your organisation.
      Due to anonymity concerns, the scores may be blank if fewer than 5 employees have participated.
      </p>
              <br />
      <p style={{ 
         fontFamily: "inherit",
         fontWeight: "300",
         color: "black"

         }}>
        Our research has shown that individuals with self-reported untreated diagnosed depression or
        Anxiety will have lower scores in all Dimensions compared to individuals being treated or without a
        diagnosis.
     </p>
  </CardBody>
  </Card>
</GridItem>

<GridItem xs={12} > 
<Card style={{background:	"#edf2f6", minHeight: 450, paddingLeft: "40px"}}>
<CardHeader color="primary" icon>
            <CardIcon color="primary">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle} style={{fontFamily: "arial",
            color:"black",
            fontSize: "20px"}}>Summary</h4>
          </CardHeader>
<GridContainer xs={12} >
 

  <GridItem xs={6}>  
  {dimensions.map(dimension =>
     // All this CSS is fucked and might break on a different screen size
    <div style={{display:"flex",float:"left", flexDirection: "column",
      paddingTop: 50, maxWidth: 155,height: 160, margin: 0 }} onClick={function(){
        changeDimension(dimension); 
      }}>
                    <ApexChart 
                    width="500"
                    dimension={dimension.title}
                    series={[dimension.data.series[0][dimension.data.series[0].length - 1]]} />
                    
       
        <h5 style={{   
         margin: -40, 
         alignSelf: "center",           
         fontSize: "14px",
         fontFamily: "inherit"
         }}>{dimension.title}</h5>
        
      </div>
          
          )}

  </GridItem>
  
   <GridItem xs={5} >
   <div style={{justifyContent: "center", alignItems: "center", padding:"auto", margin:"auto"}}>              
   <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={options}
                            series={selectedDimension.data.mockData}
                            type="bar"
                            width="450"
                        />
                    </div>
                </div>
            </div>
    </div>
    <div style={{textAlign: "center", alignItems: "center",justifyContent: "center" }}>
      <Button round size="sm" style={{fontFamily: "inherit",
      color:"black",
      background: "white",
      textAlign: "center", alignItems: "center",justifyContent: "center"}}>
       {selectedDimension.title + " Over Time"}
      </Button>
    </div>
  
   </GridItem>
   <GridItem xs={12}>
     <div style= {{paddingTop: 50,fontFamily: "inherit" }}>
     <p><strong>{selectedDimension.title}</strong></p>
        <p>
         {selectedDimension.description}
       </p>
     </div>
   </GridItem>
   
    
  </GridContainer>
  </Card>
</GridItem>


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
              
              {/* This fucken Graph needs to be centered on screen resize */ }
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
