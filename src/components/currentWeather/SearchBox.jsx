import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdMyLocation } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { useWeatherProvider } from "../../utils/useWeatherProvider";
import { IconButton, Skeleton } from "@mui/material";
import { toast } from "react-toastify";
export default function SearchBox() {
  const { city, setCity, data, loading, setLoading } = useWeatherProvider();
  const [value, setValue] = useState("");
  const handleClick = () => {
    if (!value) return;
    setCity(value);
    setValue("");
  };
  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleClick();
    }
  };
  const getLocation = () => {
    if ("geolocation" in navigator) {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (
            position.coords.latitude + "," + position.coords.longitude ===
            city
          ) {
            setLoading(false);
            return;
          }
          setCity(position.coords.latitude + "," + position.coords.longitude);
        },
        () => {
          setLoading(false);
          toast.error("Please Grant Permission!", {
            position: "top-right",
            style: {
              backgroundColor: "black",
              color: "#fff",
            },
          });
        }
      );
    } else {
      toast.error("This feature is not available in this broweser!", {
        position: "top-right",
        style: {
          backgroundColor: "black",
          color: "#fff",
        },
      });
    }
  };
  return (
    <div className="col-span-1 gap-2 lg:gap-0 flex flex-col lg:flex-row-reverse justify-between items-center  lg:col-span-4 row-span-1 p-0 ">
      <div className="relative w-full  lg:w-4/10 ">
        <input
          className="px-11 bg-[#252525] w-full outline-none rounded-lg decoration-none text-gray-400  placeholder:text-gray-500 h-11 lg:h-9 w-1/2"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search city"
          type="text"
          value={value}
          onKeyDown={handleKeydown}
        />
        <div className="absolute top-[50%] translate-y-[-50%] left-1">
          <IconButton
            onClick={getLocation}
            sx={{
              "& .MuiTouchRipple-root": { color: "white" },
            }}
          >
            <MdMyLocation className="text-lg text-white" />
          </IconButton>
        </div>
        <div className="absolute top-[50%] translate-y-[-50%] right-1">
          <IconButton
            sx={{
              "& .MuiTouchRipple-root": { color: "white" },
            }}
          >
            <IoSearch onClick={handleClick} className="text-lg text-white " />
          </IconButton>
        </div>
      </div>
      {loading ? (
        <Skeleton
          variant="string"
          width={300}
          height={30}
          sx={{ backgroundColor: "gray", borderRadius: "10px" }}
        />
      ) : (
        <span className="inline-flex items-center gap-1 text-xl lg:text-lg mt-3 lg:mt-0 text-gray-400">
          <IoLocationOutline className="text-xl" />{" "}
          {data.resolvedAddress.split(",")[0]},
          {!data.resolvedAddress.split(",")[2]
            ? data.resolvedAddress.split(",")[1]
            : data.resolvedAddress.split(",")[2]}
        </span>
      )}
    </div>
  );
}
