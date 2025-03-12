import React from "react";
import { useWeatherProvider } from "../../utils/useWeatherProvider";
import { WiSunrise, WiCloud, WiSunset } from "react-icons/wi";
import { PiCoffeeLight } from "react-icons/pi";
import { TbWorldLongitude, TbWorldLatitude } from "react-icons/tb";
import CurrentWeatherSkeleton from "./CurrentWeatherSkeleton";

export default function CurrentWeatherCard() {
  const { data, loading } = useWeatherProvider();
  if (loading) return <CurrentWeatherSkeleton />;
  const icon = data.currentConditions.icon + ".svg";
  return (
    <div className="flex w-full flex-row lg:flex-col justify-start items-center row-auto rounded-[7px] lg:row-span-19  aspect-7/4 lg:aspect-auto bg-[#252525]">
      <div className="flex relative h-full lg:h-1/2 w-1/2 lg:w-auto justify-center items-center lg:items-end ">
        <p className="absolute top-5 lg:top-3 text-white text-5xl ">
          {data.currentConditions.temp}&deg;C
        </p>
        <img
          className="h-4/5 lg:h-4/5 mb-[-80px] lg:mb-[-20px] "
          src={icon}
          alt="sad.svg"
        />
      </div>
      <hr className="hidden lg:block border-[1px] w-9/10 justify-center border-gray-700" />
      <div className="px-2 py-3 text-white h-full lg:h-1/2 w-1/2 lg:w-full flex justify-between flex-col  ">
        <p className="text-sm items-center gap-1 inline-flex">
          <PiCoffeeLight className="text-xl" />
          Feels like {data.currentConditions.feelslike} &deg;C
        </p>
        <p className="text-sm items-center gap-1 inline-flex">
          <WiCloud className="text-xl" />
          {data.currentConditions.conditions}
        </p>
        <p className="text-sm items-center gap-1 inline-flex">
          <WiSunrise className="text-xl" />
          {data.currentConditions.sunrise}
        </p>
        <p className="text-sm items-center gap-1 inline-flex">
          <WiSunset className="text-xl" />
          {data.currentConditions.sunset}
        </p>
        <p className="text-sm items-center gap-1 inline-flex">
          <TbWorldLatitude className="text-xl" />
          Lat : {data.latitude}
        </p>
        <p className="text-sm items-center gap-1 inline-flex">
          <TbWorldLongitude className="text-xl" />
          Long : {data.longitude}
        </p>
      </div>
    </div>
  );
}
