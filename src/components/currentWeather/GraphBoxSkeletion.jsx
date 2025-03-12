import { Skeleton } from "@mui/material";

export default function GraphBoxSkeleton() {
  return (
    <div className="flex justify-center items-center  bg-[#252525] rounded-[7px] aspect-3/2 lg:aspect-auto  col-span-1 lg:col-span-2 ">
      <Skeleton
        variant="rectangular"
        sx={{
          borderRadius: "10px",
          backgroundColor: "gray",
          width: "90%",
          height: "90%",
        }}
      />
    </div>
  );
}
