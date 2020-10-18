import React from "react";
import Chart from "react-apexcharts";


export default function Apex(props) {
  
    const [options, setOptions] = React.useState({
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: props.categories
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
    const [series, setSeries] = React.useState([{data: props.data,
        name: props.dimension}]);
    


    

    
   
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={options}
                            series={series}
                            type="bar"
                            width="450"
                        />
                    </div>
                </div>
            </div>
        );
    
}

