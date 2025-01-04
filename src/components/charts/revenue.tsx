"use client";

import { useMemo, useState } from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart, Cell } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const revenueData = [
  { source: "Subscriptions", revenue: 23, fill: "hsl(var(--chart-1))" },
  { source: "Ads", revenue: 14, fill: "hsl(var(--chart-2))" },
  { source: "Sponsors", revenue: 7, fill: "hsl(var(--chart-3))" },
  { source: "Others", revenue: 3, fill: "hsl(var(--chart-4))" },
];

export function RevenueDistribution() {
  const [selectedSource, setSelectedSource] = useState(null);

  const totalRevenue = useMemo(() => {
    return revenueData.reduce((acc, curr) => acc + curr.revenue, 0);
  }, []);

  const chartConfig = useMemo(() => {
    const config = {
      revenue: { label: "Revenue" },
    };
    revenueData.forEach((item) => {
      (config as any)[item.source] = {
        label: item.source,
        color: item.fill,
      };
    });
    return config;
  }, []);

  const handlePieClick = (entry:any) => {
    setSelectedSource(selectedSource === entry.source ? null : entry.source);
  };

  const filteredData = selectedSource
    ? revenueData.filter((item) => item.source === selectedSource)
    : revenueData;

  return (
    <Card className="flex flex-col">
      <CardHeader className="pb-4">
        <CardTitle>Revenue Distribution</CardTitle>
        <CardDescription>December 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-1">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[240px]"
        >
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Pie
              data={revenueData}
              dataKey="revenue"
              nameKey="source"
              innerRadius={60}
              outerRadius={120}
              strokeWidth={5}
              onClick={handlePieClick}
              className="cursor-pointer"
            >
              {revenueData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.fill}
                  opacity={selectedSource && selectedSource !== entry.source ? 0.5 : 1}
                />
              ))}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          ${totalRevenue.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Billions
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Revenue up by 4.8% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total revenue for this month
        </div>
      </CardFooter>
      <CardContent>
        <Table className="border">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead>Source</TableHead>
              <TableHead className="text-right">Revenue (Billions)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.source}>
                <TableCell>{item.source}</TableCell>
                <TableCell className="text-right">${item.revenue.toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
