import TrendingItem, { TrendingItemSkeleton } from "./TrendingItem";

function TrendingArea() {
  return (
    <div className="bg-gray-700 rounded-3xl">
        <h2 className="text-xl p-6"> O que está acontecendo </h2>
        <div className="flex flex-col gap-4 p-6 pt-0 ">
            <TrendingItem label="#Elon Musk" count={10} />
            <TrendingItem label="#Tiririca" count={1230} />
            <TrendingItem label="#Eleições 2024" count={200} />
            <TrendingItemSkeleton/>
            <TrendingItemSkeleton/>
        </div>
    </div>
  )
}

export default TrendingArea;