// CCharts.tsx

import { Chart } from "./chart"; // Assuming Chart is exported correctly from "./chart"
import { forwardRef } from "react";
import { Chart as ChartJS } from "chart.js";
import { ChartProps } from "./chart"; // Assuming ChartProps is exported correctly from "./chart"

// Define each chart type as a forwardRef component
export const ChartBar = forwardRef<ChartJS | undefined, Omit<ChartProps, "type">>((props, ref) => (
  <Chart {...props} type="bar" ref={ref} />
));
ChartBar.displayName = "ChartBar";

export const ChartBubble = forwardRef<ChartJS | undefined, Omit<ChartProps, "type">>(
  (props, ref) => <Chart {...props} type="bubble" ref={ref} />
);
ChartBubble.displayName = "ChartBubble";

export const ChartDoughnut = forwardRef<ChartJS | undefined, Omit<ChartProps, "type">>(
  (props, ref) => <Chart {...props} type="doughnut" ref={ref} />
);
ChartDoughnut.displayName = "ChartDoughnut";

export const ChartLine = forwardRef<ChartJS | undefined, Omit<ChartProps, "type">>((props, ref) => (
  <Chart {...props} type="line" ref={ref} />
));
ChartLine.displayName = "ChartLine";

export const ChartPie = forwardRef<ChartJS | undefined, Omit<ChartProps, "type">>((props, ref) => (
  <Chart {...props} type="pie" ref={ref} />
));
ChartPie.displayName = "ChartPie";

export const ChartPolarArea = forwardRef<ChartJS | undefined, Omit<ChartProps, "type">>(
  (props, ref) => <Chart {...props} type="polarArea" ref={ref} />
);
ChartPolarArea.displayName = "ChartPolarArea";

export const ChartRadar = forwardRef<ChartJS | undefined, Omit<ChartProps, "type">>(
  (props, ref) => <Chart {...props} type="radar" ref={ref} />
);
ChartRadar.displayName = "ChartRadar";

export const ChartScatter = forwardRef<ChartJS | undefined, Omit<ChartProps, "type">>(
  (props, ref) => <Chart {...props} type="scatter" ref={ref} />
);
ChartScatter.displayName = "ChartScatter";

// Export Chart component in case it's needed externally
export { Chart };
