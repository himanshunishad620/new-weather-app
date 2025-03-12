import React from "react";
import CurrentWeatherCard from "./currentWeather/CurrentWeatherCard";
import DailyForcastBox from "./currentWeather/DailyForcastBox";
import IconDetailBox from "./currentWeather/IconDetailBox";
import GraphBox from "./currentWeather/GraphBox";
import CityListBox from "./currentWeather/CityListBox";
import SearchBox from "./currentWeather/SearchBox";


export default function Home() {
  return ( 
  <div className="h-auto lg:h-15/20 w-full  lg:rounded-[14px] grid-row-20 lg:w-7/10 bg-black  p-4 gap-y-4 gap-0 lg:gap-4 grid grid-cols-1 lg:grid-cols-4 ">
    <SearchBox/>
    <CurrentWeatherCard />
    <div className="col-span-1 lg:col-span-2 h-full row-span-19 gap-y-4 grid gap-0 lg:gap-4 grid-rows-5 lg:grid-rows-10 ">
      <DailyForcastBox />
      <div className="grid gap-0 lg:gap-4 grid-cols-1 gap-y-4 lg:grid-cols-4 row-span-4 lg:row-span-7 ">
        <IconDetailBox />
        <GraphBox />
      </div>
    </div>
    <CityListBox />
  </div>
  );
}
