import React from 'react';
import {Line} from 'react-chartjs-2'
import moment from 'moment'
import style from './Chart.css'

const Chart = () => {
    let arr = [];
    for (let i=0; i<5; i++) {
        let a = moment().add(i, 'days').format("DD.MM.YYYY");
        arr.push(a)
    }

    let a = {
        title: {
            display: true,
            // position: 'top',
            text: "Hide default title",  
            padding: '60px',
        },
        legend: {
            display: true,
            position: 'top',
            labels: {
              boxWidth: 80,
              fontColor: 'black'
            }
          },
          yAxes: [{
            gridLines: {
              color: "black",
              borderDash: [2, 5],
            },
            scaleLabel: {
              display: true,
              labelString: "Speed in Miles per Hour",
              fontColor: "green"
            }
          }]
    }

    let WetChart = {
        labels: arr,
        title: {
            text: 'kfjskfjsofj'
        },
        datasets: [
            {
                label: 'Temperature',
                data: [-10, 20, -30, 40, -20],
                borderColor: '#fff',
                backgroundColor:'rgba(200,200,200, .5)',
                // fill: null,
                type: 'line',
                // usePointStyle: true,
                // pointStyle: 'star',
                // radius: '5',
                // hoverBorderWidth: '15',
              }, {
                label: 'Wind',
                data: [50, -50, 50, -50, 10],
                borderColor: 'rgb(255,0,255)',
                backgroundColor: 'rgb(255,0,255, .5)',
                type: 'line',
                // fill: null,
              }, {
                label: 'Humidity',
                data: [10, 20, 0, 100, -10],
                borderColor: 'rgb(0,34,255)',
                backgroundColor: 'rgb(0,34,255, .5)',
                type: 'line' ,
                // fill: null,
              }, {
                label: 'Pressure',
                data: [1, 2, 5, 1, 0],
                borderColor: 'rgb(0,255,0)',
                backgroundColor: 'rgb(0,255,0, .5)',
                type: 'line' ,
                // fill: null,
              }],    
        options: a,   
    }
    return (
    
           <Line data={WetChart}/>
        
    );
};

export default Chart;