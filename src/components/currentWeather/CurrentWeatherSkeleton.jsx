import React from "react";
import { Skeleton } from "@mui/material";
export default function CurrentWeatherSkeleton() {
  return (
    <div className="flex w-full flex-row lg:flex-col justify-start items-center row-auto rounded-[7px] lg:row-span-19  aspect-7/4 lg:aspect-auto bg-[#252525]">
      <div className="flex relative h-full lg:h-1/2 w-1/2 lg:w-auto justify-center items-center lg:items-end ">
        <Skeleton
          variant="string"
          sx={{
            position: "absolute",
            top: { xs: 21, md: 8 },
            backgroundColor: "gray",
            borderRadius: "10px",
          }}
          width={100}
          height={30}
        />
        <Skeleton
          variant="rectangular"
          sx={{
            backgroundColor: "gray",
            height: { xs: 120, md: 150 },
            width: 160,
            mb: { xs: "-45px", md: "20px" },
            borderRadius: "10px",
          }}
        />
      </div>
      <hr className="hidden lg:block border-[1px] w-9/10 justify-center border-gray-700" />

      <div className="px-2 py-3 text-white h-full lg:h-1/2 w-1/2 lg:w-full flex justify-between flex-col  ">
        <Skeleton
          sx={{ backgroundColor: "gray", width: "100%", borderRadius: "10px" }}
          variant="string"
        />
        <Skeleton
          sx={{ backgroundColor: "gray", width: "100%", borderRadius: "10px" }}
          variant="string"
        />
        <Skeleton
          sx={{ backgroundColor: "gray", width: "100%", borderRadius: "10px" }}
          variant="string"
        />
        <Skeleton
          sx={{ backgroundColor: "gray", width: "100%", borderRadius: "10px" }}
          variant="string"
        />
        <Skeleton
          sx={{ backgroundColor: "gray", width: "100%", borderRadius: "10px" }}
          variant="string"
        />
        <Skeleton
          sx={{ backgroundColor: "gray", width: "100%", borderRadius: "10px" }}
          variant="string"
        />
      </div>
    </div>
  );
}
