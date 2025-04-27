import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { type ChartConfig, ChartContainer } from "@/components/ui/chart";
import { cn } from "@/lib/utils";
const chartData = [
  { browser: "safari", visitors: 98, fill: "var(--color-primary-900)" },
];

const chartConfig = {
  safari: {
    label: "Safari",
    color: "var(--color-primary-900)",
  },
} satisfies ChartConfig;

export function PerformanceChart({
  value,
  opacity,
}: {
  value: number;
  opacity?: string;
}) {
  return (
    <div
      className={cn(
        "shadow-[0px_0px_10px_rgba(0,0,0,0.15)] p-0.5 w-42 h-42 rounded-full bg-radial from-white to-white/20  flex items-center justify-center",
        opacity
      )}
    >
      <ChartContainer config={chartConfig} className="w-40 h-40">
        <RadialBarChart
          data={chartData}
          startAngle={90}
          endAngle={-260}
          innerRadius={72}
          outerRadius={94}
          className="drop-shadow-sm drop-shadow-primary-900/40"
        >
          <PolarGrid
            gridType="circle"
            radialLines={false}
            stroke="none"
            fill="var(--color-primary-900)"
            polarRadius={[76, 64]}
          />
          <RadialBar dataKey="visitors" cornerRadius={10} />
          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="var(--color-primary-900)"
                      fontSize="46"
                    >
                      {value}
                    </text>
                  );
                }
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
    </div>
  );
}
