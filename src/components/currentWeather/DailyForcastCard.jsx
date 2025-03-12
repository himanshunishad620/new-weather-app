import React, { useState } from "react";
import { useWeatherProvider } from "../../utils/useWeatherProvider";

export default function DailyForcastCard({ data, index }) {
  const { months, loading } = useWeatherProvider();
  if (loading) {
    return <p className="text-white">adlf</p>;
  }
  const [icon] = useState(data.icon + ".svg");
  const date = new Date(data.datetime).getDate();
  const month = new Date(data.datetime).getMonth();
  return (
    <div className="pb-3 pt-2 text-[#E5E5E5] flex flex-col justify-between items-center h-full min-w-18 lg:min-w-15 bg-[#252525] rounded-[20px]">
      <p className="text-[16px] lg:text-[13px]">
        {date} {months[month]}
      </p>
      <hr className="border-[0.1px] mt-[-5px] border-gray-700 w-8/10" />
      <img src={icon} className="h-11 lg:h-9 w-11 lg:w-9 " alt="" />
      <p className="text-2xl lg:text-lg">{Math.round(data.temp)}&deg;</p>
    </div>
  );
}
