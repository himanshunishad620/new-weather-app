import DailyForcastCardSkeleton from "./DailyForcastCardSkelton";

export default function DailyForcastBoxSkeleton() {
  const fakeArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <div className="flex rounded-[10px] overflow-x-auto  scrollbar-hide gap-6 row-span-1 lg:row-span-3 ">
      {fakeArr.map((item) => {
        return <DailyForcastCardSkeleton key={item} />;
      })}
    </div>
  );
}
