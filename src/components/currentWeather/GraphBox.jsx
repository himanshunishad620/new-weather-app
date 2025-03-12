import React, { useState } from "react";
import { useWeatherProvider } from "../../utils/useWeatherProvider";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import GraphBoxSkeleton from "./GraphBoxSkeletion";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);
export default function GraphBox() {
  const { data, loading } = useWeatherProvider();
  if (loading) {
    return <GraphBoxSkeleton />;
  }
  const tempArr = data.days[0].hours.map((item) => item.temp);
  const graphData = {
    labels: [
      "0:0",
      "1:0",
      "2:0",
      "3:0",
      "4:0",
      "5:0",
      "6:0",
      "7:0",
      "8:0",
      "9:0",
      "10:0",
      "11:0",
      "12:0",
      "13:0",
      "14:0",
      "15:0",
      "16:0",
      "17:0",
      "18:0",
      "19:0",
      "20:0",
      "21:0",
      "22:0",
      "23:0",
    ],
    datasets: [
      {
        label: "Temp (degree celcius)",
        data: tempArr, // Example wind speed values
        borderColor: "white",
        backgroundColor: "rgb(255, 255, 255)",
        tension: 0.2, // Interpolation mode (Smooth curve)
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: "rgb(53, 53, 53)", // X-axis grid color (light white)
        },
        ticks: {
          color: "white", // X-axis text color (yellow)
        },
      },
      y: {
        grid: {
          color: "rgb(53, 53, 53)", // Y-axis grid color (light white)
        },
        ticks: {
          color: "white", // Y-axis text color (orange)
        },
      },
    },
  };

  return (
    <div className=" bg-[#252525] rounded-[7px] aspect-3/2 lg:aspect-auto col-span-1 lg:col-span-2 ">
      <div className=" h-full flex items-center w-full scrollbar-hide  overflow-x-auto">
        <div className="h-full min-w-[1000px]">
          <Line className="h-full" data={graphData} options={options} />
        </div>
      </div>
    </div>
  );
}
