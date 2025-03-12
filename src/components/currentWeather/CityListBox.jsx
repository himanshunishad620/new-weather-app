import React, { useState } from "react";
import CityListCard from "./CityListCard";
import axios from "axios";
import { IconButton } from "@mui/material";
import { MdAddCircleOutline, MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
export default function CityListBox() {
  const [value, setValue] = useState("");
  const [isloading, setIsloading] = useState(false);
  const [cities, setCities] = useState(
    JSON.parse(localStorage.getItem("cities"))
  );
  const handleDelete = (key) => {
    let arr = JSON.parse(localStorage.getItem("cities"));
    let filtered = arr.filter((item) => item !== key);
    localStorage.setItem("cities", JSON.stringify(filtered));
    setCities(JSON.parse(localStorage.getItem("cities")));
  };
  const handleClick = async () => {
    setValue("");
    setIsloading(true);
    if (cities.includes(value.toUpperCase())) {
      toast.success("Already Added!", {
        position: "top-right",
        style: {
          backgroundColor: "black", 
          color: "#fff", 
        },
      });
      return;
    }
    try {
      await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${value}?unitGroup=metric&key=P36YPY773BLHRR3D79CJ49XV6&contentType=json`
      );
      setCities([...cities, value.toUpperCase()]);
      localStorage.setItem(
        "cities",
        JSON.stringify([...cities, value.toUpperCase()])
      );
      toast.success("City Added!", {
        position: "top-right",
        style: {
          backgroundColor: "black", 
          color: "#fff",
        },
      });
      setValue("");
    } catch (error) {
      toast.error("Invalid City Name!", {
        position: "top-right",
        style: {
          backgroundColor: "black",
          color: "#fff",
        },
      });
    } finally {
      setIsloading(false);
    }
  };
  return (
    <div className="flex flex-col overflow-auto gap-3 aspect-1/1 lg:aspect-auto  row-auto w-full lg:row-span-19  ">
      <div className="relative w-full ">
        <input
          onKeyDown={(e) => {
            e.key === "Enter" ? handleClick() : null;
          }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="px-3 bg-[#252525] w-full outline-none rounded-lg decoration-none text-gray-400  placeholder:text-gray-500 h-11 lg:h-9 "
          placeholder="Add city"
          type="text"
        />
        <div className="absolute top-[50%] translate-y-[-50%] right-1">
          <IconButton
            disabled={isloading}
            sx={{
              "& .MuiTouchRipple-root": { color: "white" },
            }}
          >
            <MdAddCircleOutline
              onClick={handleClick}
              className="text-lg text-white "
            />
          </IconButton>
        </div>
      </div>
      <div className="h-[400px] rounded-lg flex flex-col gap-1 scrollbar-hide overflow-auto  w-full ">
        {cities?.map((item) => {
          return (
            <CityListCard handleDelete={handleDelete} city={item} key={item} />
          );
        })}
      </div>
    </div>
  );
}
