
import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts'



class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: this.props.series,
     

      options: {
        colors: ["#2eaaf9"],
        chart: {
          height: 500,
          type: 'radialBar',
          offsetY: -30,
          sparkline: {
            enabled: true
          }

        },
        plotOptions: {
          radialBar: {
            startAngle: 0,
            endAngle: 360,
            hollow: {
              margin: '1',
              size: "70%"
            },
            track: {
              background: "#C0C0C0",
              strokeWidth: '100%',
              margin: 2, // margin is in pixels,
              
             /* dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                color: '#999',
                opacity: 1,
                blur: 2
              }
              */
            },
            dataLabels: {
              name: {
                show: false,
                offsetY: 25,
                fontSize: '11px'
              },
              value: {
                offsetY: 5,
                fontSize: '17px'
              }
            }
          }
        },
        grid: {
          padding: {
            top: -10
          }
        },
    
        labels: [this.props.dimension],
        fill: {
         // type: "gradient",
         /* gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: ["#87D4F9"],
            stops: [0, 100]
          }
          */
        }
      }
    
    
    };
  }



  render() {
    return (
      


<ReactApexChart  options={this.state.options} series={this.state.series} type="radialBar"  />

    )
  }
}
export default ApexChart;