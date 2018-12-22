import React from 'react';
import {Line} from 'react-chartjs-2'
import PropTypes from 'prop-types'
import moment from 'moment'


const Chart = ({chartData}) => {
    let arr = [];
    for (let i=0; i<5; i++) {
        let a = moment().add(i, 'days').format("ll");
        arr.push(a)
    }

    let option = {
         title: {
            display: true,
            position: 'top',
            text: "5 DAYS CHART",  
            fontSize: '20',
            fontColor: 'rgb(70,70,70)',
            fontFamily: 'Josefin Sans, sans-serif', 
        },
        scales: {
          yAxes: [{
            // gridLines: {
            //   display: true,
            //   color: "grey"
            // },
            scaleLabel: {
               display: true,
               labelString: "Units",  
               fontSize: '20',
               fontFamily: 'Josefin Sans, sans-serif',
            },
            // ticks: {
              // suggestedMin: ,
              // suggestedMax: 60,
              // stepSize: 5,
            // },
          }],
          xAxes: [{
            gridLines: {
              color: "black",
              borderDash: [2, 5],
            },
            scaleLabel: {
               display: true,
               labelString: "Days",  
               fontSize: '20',
               fontFamily: 'Josefin Sans, sans-serif',
            },
          }]
      }
    }

    let WetChart = {
        labels: arr,
        datasets: [
            {
                label: 'Temperature, C' ,
                data: chartData.temperature,
                borderColor: 'rgb(255,0,0)',
                backgroundColor:'rgba(255,0,0, .4)',
                fill: null,
                hidden: false,
                type: 'line',
                usePointStyle: true,
                radius: '5',
                hoverBorderWidth: '15',
              }, {
                hidden: true,
                label: 'Wind, m/s',
                data: chartData.windSpeed,
                borderColor: 'rgb(255, 0, 255)',
                backgroundColor: 'rgb(255,0,255, .1)',
                type: 'line',
                usePointStyle: true,
                radius: '5',
                hoverBorderWidth: '15',
                fill: null,
              }, {
                hidden: true,
                label: 'Humidity, %',
                data: chartData.humidity,
                borderColor: 'rgb(0,34,255)',
                backgroundColor: 'rgb(0,34,255, .5)',
                type: 'line' ,
                fill: null,
              }, {
                hidden: true,
                label: 'Pressure, mm Hg',
                data: chartData.pressure,
                borderColor: 'rgb(0,255,0)',
                backgroundColor: 'rgb(0,255,0, .5)',
                type: 'line' ,
                fill: null,
              }],    
    }
    return (
           <Line data={WetChart} options={option}/>
    );
};

Chart.propTypes = {
  chartData: PropTypes.shape({
    temperature: PropTypes.arrayOf(PropTypes.number),
    pressure: PropTypes.arrayOf(PropTypes.number),
    windSpeed: PropTypes.arrayOf(PropTypes.number),
    humidity: PropTypes.arrayOf(PropTypes.number),
}),
}

export default Chart;