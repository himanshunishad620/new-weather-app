import React from "react";
import DailyForcastCard from "./DailyForcastCard";
import { useWeatherProvider } from "../../utils/useWeatherProvider";
import DailyForcastBoxSkeleton from "./DailyForcastBoxSkeleton";

export default function DailyForcastBox() {
  const { data, loading } = useWeatherProvider();
  if (loading) {
    return <DailyForcastBoxSkeleton />;
  }
  return (
    <div className="flex  overflow-x-auto scrollbar-hide gap-6 row-span-1 lg:row-span-3 ">
      {data.days.map((item, index) => {
        return <DailyForcastCard data={item} index={index} key={index} />;
      })}
    </div>
  );
}
