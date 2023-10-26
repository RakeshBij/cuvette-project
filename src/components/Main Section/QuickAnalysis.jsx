import React, { useContext } from "react";
import pieChart from "../../assets/pieChart.svg";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { DataContext } from "../../store/data";

ChartJS.register(ArcElement, Tooltip, Legend);

const QuickAnalysis = () => {
  const { datas } = useContext(DataContext);
  // const data1 = ctx.datas;
  const data = {
    labels: [],
    options: { cutout: 140 },

    datasets: [
      {
        label: "pool",
        data: [datas.currentScore, 15 - datas.currentScore],
        options: {
          cutoutPercentage: 80,
        },
        backgroundColor: ["#438AF6", "rgb(237 244 255)"],
        borderColor: ["#438AF6", "rgb(237 244 255)"],
      },
    ],
  };
  const options = {};

  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      var image = new Image();
      image.src = pieChart;
      const imageSize = 40;
      ctx.drawImage(
        image,
        chart.getDatasetMeta(0).data[0].x / 2 + imageSize - 2,
        chart.getDatasetMeta(0).data[0].y / 2 + imageSize - 8,
        imageSize,
        imageSize
      );
      ctx.restore();
      // ctx.font = "30px";
      // ctx.fillStyle = "red";
      // ctx.textAlign = "center";
      // ctx.textBaseline = "middle";
      // ctx.fillText(
      //   pieChart,
      //   chart.getDatasetMeta(0).data[0].x,
      //   chart.getDatasetMeta(0).data[0].y
      // );
    },
  };
  return (
    <span className="basic-border p-30 m-tb-15 m-r-30">
      <div className="quick-stats-head primary-color letter-space-secondary bold flex h-end">
        <div>Question Analysis</div>
        <div className="light-blue">
          {datas.currentScore <= 9
            ? `0${datas.currentScore}`
            : datas.currentScore}{" "}
          / 15
        </div>
      </div>
      <div className="comparison-graph-text">
        <div className="f-14 letter-space-tertiary secondary-color normal">
          <span className="bold">
            You scored{" "}
            {datas.currentScore <= 9
              ? `0${datas.currentScore}`
              : datas.currentScore}{" "}
            question correct out of 15.{" "}
          </span>
          However it still needs some improvements
        </div>
      </div>
      <div className="flex h-center v-center">
        <div style={{ width: `55%` }}>
          <Doughnut
            data={data}
            options={options}
            plugins={[textCenter]}
          ></Doughnut>
        </div>
        {/* <img src={pieChart} alt="Pie chart" className="pie-chart" /> */}
      </div>
    </span>
  );
};

export default QuickAnalysis;
