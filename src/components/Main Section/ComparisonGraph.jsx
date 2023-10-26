import React, { useContext, useEffect, useState } from "react";
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
import { DataContext } from "../../store/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const intialYdata = [17, 32, 31, 56, 30, 78, 42, 82, 90, 5];
const intialPoint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const ComparisonGraph = () => {
  const [ydata, setYdata] = useState(intialYdata);
  const [point, setPoint] = useState(intialPoint);
  const { datas } = useContext(DataContext);

  const percentile = parseInt(datas.percentile);
  useEffect(() => {
    setYdata([17, 32, 31, 56, 30, 78, 42, 82, 90, 5]);
    setPoint([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    const randomIndex = Math.floor(Math.random() * 5);
    const prevYdata = [17, 32, 31, 56, 30, 78, 42, 82, 90, 5];
    const prevPoint = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    prevYdata[randomIndex] = percentile;
    prevPoint[randomIndex] = 5;

    setYdata(prevYdata);
    setPoint(prevPoint);
  }, [percentile]);

  const labels = [0, 20, 40, 60, 80, 100];
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
              labels: {
                boxWidth: 0,
              },
            },

            tooltip: {
              enabled: true,
              // mode: "point",

              callbacks: {
                title: function () {
                  return "Your Score";
                },
                label: function (tooltip) {
                  return tooltip.formattedValue + "%";
                },
              },
            },
            title: {
              display: false,
            },
          },

          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                min: 0,
                max: 100,
                stepSize: 20,
              },
            },
            y: {
              display: true,
              ticks: {
                min: 0,
                max: 100,
                stepSize: 10,
              },
              grid: {
                display: false,
              },
            },
          },

          line: {},
        }}
        data={{
          labels,
          datasets: [
            {
              label: "",
              data: ydata,
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(53, 162, 235, 0.5)",
              tension: 0.5,
              pointRadius: point,
            },
          ],
        }}
        plugins={[
          {
            id: "line-1",
            beforeDatasetDraw(chart, args, pluginOptions) {
              const {
                ctx,
                chartArea: { top, bottom, left, right, width, height },
                scales: { x, y },
              } = chart;
              ctx.save();
              ctx.beginPath();
              ctx.lineWidth = 3;
              ctx.lineDashOffset = 1;
              ctx.strokeStyle = "orange";
              ctx.moveTo(x.getPixelForValue(percentile * 0.05 + 1.5), top);
              ctx.lineTo(x.getPixelForValue(percentile * 0.05 + 1.5), bottom);

              const xStart = x.getPixelForValue(percentile * 0.05 + 1.5);
              const xEnd = x.getPixelForValue(percentile * 0.05 + 1.5);

              const xCenter = (xStart + xEnd) / 2;

              ctx.setLineDash([7, 7]);
              ctx.lineDashOffset = 1;

              ctx.stroke();

              ctx.beginPath();
              ctx.arc(xCenter, (top + bottom) / 2, 7, 0, Math.PI * 2);
              ctx.fillStyle = "orange";
              ctx.fill();
            },
          },
        ]}
      />
    </span>
  );
};

export default ComparisonGraph;
