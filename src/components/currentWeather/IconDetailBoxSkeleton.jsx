import { Skeleton } from "@mui/material";

export default function IconDetailBoxSkeleton() {
  return (
    <div className=" col-span-1 lg:col-span-2 gap-4 lg:gap-4 gap-y-4  grid grid-cols-2 grid-rows-2 ">
      <div className=" relative rounded-[7px] gap-4 flex flex-col justify-center lg:justify-end pb-0 lg:pb-3 items-center col-span-1 row-span-1 bg-[#252525] aspect-1/1 lg:aspect-auto">
        <Skeleton
          variant="reactangular"
          sx={{
            backgroundColor: "gray",
            height: 60,
            width: 60,
            borderRadius: "10px",
          }}
        />
        <Skeleton
          variant="string"
          sx={{ backgroundColor: "gray", width: 80, borderRadius: "10px" }}
        />
        <Skeleton
          variant="string"
          sx={{
            position: "absolute",
            top: 10,
            left: 8,
            backgroundColor: "gray",
            width: 80,
            borderRadius: "10px",
          }}
        />
      </div>
      <div className=" relative rounded-[7px] gap-4 flex flex-col justify-center lg:justify-end pb-0 lg:pb-3 items-center col-span-1 row-span-1 bg-[#252525] aspect-1/1 lg:aspect-auto">
        <Skeleton
          variant="reactangular"
          sx={{
            backgroundColor: "gray",
            height: 60,
            width: 60,
            borderRadius: "10px",
          }}
        />
        <Skeleton
          variant="string"
          sx={{ backgroundColor: "gray", width: 80, borderRadius: "10px" }}
        />
        <Skeleton
          variant="string"
          sx={{
            position: "absolute",
            top: 10,
            left: 8,
            backgroundColor: "gray",
            width: 80,
            borderRadius: "10px",
          }}
        />
      </div>
      <div className=" relative rounded-[7px] gap-4 flex flex-col justify-center lg:justify-end pb-0 lg:pb-3 items-center col-span-1 row-span-1 bg-[#252525] aspect-1/1 lg:aspect-auto">
        <Skeleton
          variant="reactangular"
          sx={{
            backgroundColor: "gray",
            height: 60,
            width: 60,
            borderRadius: "10px",
          }}
        />
        <Skeleton
          variant="string"
          sx={{ backgroundColor: "gray", width: 80, borderRadius: "10px" }}
        />
        <Skeleton
          variant="string"
          sx={{
            position: "absolute",
            top: 10,
            left: 8,
            backgroundColor: "gray",
            width: 80,
            borderRadius: "10px",
          }}
        />
      </div>
      <div className=" relative rounded-[7px] gap-4 flex flex-col justify-center lg:justify-end pb-0 lg:pb-3 items-center col-span-1 row-span-1 bg-[#252525] aspect-1/1 lg:aspect-auto">
        <Skeleton
          variant="reactangular"
          sx={{
            backgroundColor: "gray",
            height: 60,
            width: 60,
            borderRadius: "10px",
          }}
        />
        <Skeleton
          variant="string"
          sx={{ backgroundColor: "gray", width: 80, borderRadius: "10px" }}
        />
        <Skeleton
          variant="string"
          sx={{
            position: "absolute",
            top: 10,
            left: 8,
            backgroundColor: "gray",
            width: 80,
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
}
