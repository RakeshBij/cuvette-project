import React from "react";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const chartData = {
    labels: [
      "Point 1",
      "Point 2",
      "Point 3",
      "Point 4",
      "Point 5",
      "Point 6",
      "Point 7",
      "Point 8",
    ],
    datasets: [
      {
        data: [
          172.259, 133.869, 1.8326, 111.623, 51.7048, 79.6907, 116.646, 151.808,
        ],
        borderColor: "#C8D6E5",
        backgroundColor: "transparent",
        pointRadius: 6,
      },
    ],
  };

  return (
    <div>
      <h2>Chart Following SVG Path</h2>
      <div style={{ position: "relative" }}>
        <Line
          data={chartData}
          options={{
            maintainAspectRatio: false,
            scales: {
              x: {
                display: false,
              },
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
        <svg
          width="650"
          height="179"
          viewBox="0 0 650 179"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 172.259C21.933 170.465 70.4484 160.276 97.0456 133.869C130.292 100.86 176.776 -9.64878 207.252 1.8326C237.728 13.314 244.5 125.975 278.055 111.623C311.609 97.2716 327.924 49.1933 344.24 51.7048C360.555 54.2164 387.645 92.2485 411.349 79.6907C435.052 67.1329 447.981 56.3691 481.844 116.646C508.933 164.868 524.633 162.213 544.643 151.808C566.294 143.795 616 136.093 641.612 169.389"
            stroke="#C8D6E5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Chart;
