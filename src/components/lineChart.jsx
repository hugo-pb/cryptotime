import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
const LineChart = ({ cryptoHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimeStamp = [];
  for (let i = 0; i < cryptoHistory?.data?.history?.length; i += 1) {
    coinPrice.push(cryptoHistory.data.history[i].price);
    }
     for (let i = 0; i < cryptoHistory?.data?.history?.length; i += 1) {
       coinTimeStamp.push(
         new Date(cryptoHistory?.data?.history[i].timestamp*1000).toLocaleDateString()
       );
     }
    
    const data = {
        labels: coinTimeStamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',

            }
        ]
    }
    const options = {
        scales: {
            yAxes: {
                ticks: {
                    beginAtZero: true,
                }
            }
        }
    }

  return (
    <div className="container">
      <div className="row">
        <h4>{coinName} price Chart</h4>
        <div className="col">
          <h6>{cryptoHistory?.data?.change}%</h6>
          <p>
            Current {coinName} price: ${currentPrice} {}
                  </p>
                  <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default LineChart;
