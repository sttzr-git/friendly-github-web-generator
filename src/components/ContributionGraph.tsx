
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface ContributionGraphProps {
  data: {
    date: string;
    count: number;
  }[];
}

const getColor = (count: number) => {
  if (count === 0) return "bg-github-gray";
  if (count < 5) return "bg-github-green/30";
  if (count < 10) return "bg-github-green/60";
  return "bg-github-green";
};

const ContributionGraph = ({ data }: ContributionGraphProps) => {
  // Generate a grid of 7x52 for a year of contributions
  const gridItems = [...Array(52)].map((_, weekIndex) => (
    <div key={weekIndex} className="flex flex-col gap-1">
      {[...Array(7)].map((_, dayIndex) => {
        const dataPoint = data.find(
          (d) => new Date(d.date).getDay() === dayIndex && Math.floor(new Date(d.date).getTime() / (1000 * 60 * 60 * 24 * 7)) === weekIndex
        );
        
        return (
          <TooltipProvider key={dayIndex}>
            <Tooltip>
              <TooltipTrigger>
                <div
                  className={`h-3 w-3 rounded-sm ${getColor(dataPoint?.count || 0)}`}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs">
                  {dataPoint ? `${dataPoint.count} contributions on ${dataPoint.date}` : "No contributions"}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  ));

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-base font-medium">Contributions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto pb-2">
          <div className="flex gap-1 min-w-max">
            {gridItems}
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 pt-3">
          <div className="text-xs text-muted-foreground">Less</div>
          <div className="flex gap-1">
            <div className="h-3 w-3 rounded-sm bg-github-gray" />
            <div className="h-3 w-3 rounded-sm bg-github-green/30" />
            <div className="h-3 w-3 rounded-sm bg-github-green/60" />
            <div className="h-3 w-3 rounded-sm bg-github-green" />
          </div>
          <div className="text-xs text-muted-foreground">More</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContributionGraph;
