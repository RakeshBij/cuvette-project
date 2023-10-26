import React from "react";
import graph from "../../assets/graph.svg";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ComparisonGraph = () => {
  // const labels = Array.from({ length: 6 }).map((_, i) => `${i * 2 * 10}%`);

  const labels = [`0%`, `20%`, `37%`, `40%`, `60%`, `80%`, `100%`];
  console.log(labels);

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: [0, 2, 7, 5, 2, 5, 2, 10, 0, 10],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        tension: 0.5,
      },
    ],
  };

  return (
    <span className="basic-border p-30 m-tb-15 m-r-30 w-700 f-16 bold primary-color letter-space-secondary">
      <div className="quick-stats-head">Comparison Graph</div>
      <div className="flex gap-15">
        <div className="comparison-graph-text">
          <div className="f-14 letter-space-tertiary secondary-color normal">
            <span className="bold">You scored 37% percentile </span>
            which is lower than the <br /> average percentile 72% of all the
            engineers who took this assessment
          </div>
        </div>
        <div className="flex justify-end">
          <img src={graph} alt="Correct answers" className="graph-icon" />
        </div>
      </div>
      <Line
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false, // Hide X-axis grid lines
              },
            },
            y: {
              display: false,
              grid: {
                display: false, // Hide Y-axis grid lines
              },
            },
          },
        }}
        data={data}
      />
    </span>
  );
};

export default ComparisonGraph;
