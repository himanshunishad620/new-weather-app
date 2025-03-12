import { Skeleton } from "@mui/material";

export default function DailyForcastCardSkeleton() {
  
  return (
    <div className='pb-3 pt-2 text-[#E5E5E5] flex flex-col justify-between items-center h-full min-w-18 lg:min-w-15 bg-[#252525] rounded-[20px]'>
        <Skeleton variant="string" sx={{backgroundColor:'gray',width:40,height:{xs:20,md:16},borderRadius:'10px'}}/>
        <hr className='border-[0.1px] mt-[-5px] border-gray-700 w-8/10'/>
        <Skeleton variant="rectangular" sx={{backgroundColor:'gray',width:35,height:35,borderRadius:'10px'}}/>
        <Skeleton variant="string" sx={{backgroundColor:'gray',width:40,height:16,borderRadius:'10px'}}/>
    </div>
  )
}
