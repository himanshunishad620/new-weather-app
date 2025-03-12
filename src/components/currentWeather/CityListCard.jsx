import React from "react";
import { IconButton } from "@mui/material";
import { MdDeleteOutline } from "react-icons/md";
import { RiSlideshowLine } from "react-icons/ri";
import { useWeatherProvider } from "../../utils/useWeatherProvider";
export default function CityListCard({ handleDelete, city }) {
  const { setCity } = useWeatherProvider();
  const handleClick = () => {
    setCity(city);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="px-2 w-full border-upper text-white border-bottom-1 flex justify-between items-center min-h-13 lg:min-h-10 bg-[#252525]  border-white ">
        <p className="text-sm">{city}</p>
        <span>
          <IconButton
            onClick={() => handleDelete(city)}
            sx={{
              "& .MuiTouchRipple-root": { color: "white" }, // Change ripple color
            }}
          >
            <MdDeleteOutline className="text-lg text-white " />
          </IconButton>
          <IconButton
            onClick={() => handleClick()}
            sx={{
              "& .MuiTouchRipple-root": { color: "white" }, // Change ripple color
            }}
          >
            <RiSlideshowLine className="text-lg text-white " />
          </IconButton>
        </span>
      </div>
    </>
  );
}
