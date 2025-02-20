import { TopArtist } from "@/components/charts/top-artist";
import { KeyMetrics } from "@/components/key-metrics/key-metrics";
import { UserGrowthChart } from "@/components/charts/user-growth-chart";
// import { RevenueDistribution } from "@/components/charts/revenue-distribution";
import { RevenueDistribution } from "@/components/charts/revenue";
import { TopFiveStreamedSongs } from "@/components/charts/top-five-streamed-songs";
import { RecentStreamsTable } from "@/components/recent-streams-table/recent-streams-table";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="col-span-1 @5xl/dashboard:col-span-2 flex flex-1 flex-col gap-4 @container/key-metrics">
        <div className="grid auto-rows-min gap-4 @2xl/key-metrics:grid-cols-4 w-full">
          <KeyMetrics />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 h-auto">
          <div className="col-span-1 md:col-span-3 min-h-[400px] h-full">
            <UserGrowthChart />
          </div>
          <div className="col-span-1 md:col-span-2 min-h-[400px] h-full">
            <RevenueDistribution />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TopArtist />
          <TopFiveStreamedSongs />
        </div>
      </div>

      <div className="flex flex-col gap-4 col-span-1">
        <RecentStreamsTable />
       
      </div>
    </div>
  );
}
