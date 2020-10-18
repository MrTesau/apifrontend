import React, { Component } from "react";
import Chart from "react-apexcharts";



const options = {
    chart: {
        id: "basic-bar"
    },
    xaxis: {
        categories: this.props.categories
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
}



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: this.props.categories
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
            },  series: [
                {
                    name: this.props.dimension,
                    // data: this.props.data
                }
            ]
          
        };
    }
    // fcc ref solution0
    changeName = (newSeries) => {
        this.setState({
          series: newSeries
        });
      };

    
    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="bar"
                            width="450"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;