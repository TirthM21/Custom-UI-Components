import PropTypes from "prop-types";
import React, {
  forwardRef,
  HTMLAttributes,
  MutableRefObject,
  useEffect,
  useMemo,
  useRef,
} from "react";
import classNames from "classnames";
import { Chart as ChartJS, registerables } from "chart.js";
import type {
  ChartData,
  ChartOptions,
  ChartType,
  ChartTypeRegistry,
  InteractionItem,
  Plugin,
  Point,
  BubbleDataPoint,
} from "chart.js";
import { customTooltips as cuiCustomTooltips } from "@coreui/chartjs";
import assign from "lodash/assign";
import find from "lodash/find";
import merge from "lodash/merge";

export interface ChartProps extends HTMLAttributes<HTMLCanvasElement | HTMLDivElement> {
  className?: string;
  customTooltips?: boolean;
  data: ChartData | ((canvas: HTMLCanvasElement) => ChartData);
  fallbackContent?: React.ReactNode;
  getDatasetAtEvent?: (
    dataset: InteractionItem[],
    event: React.MouseEvent<HTMLCanvasElement>
  ) => void;
  getElementAtEvent?: (
    element: InteractionItem[],
    event: React.MouseEvent<HTMLCanvasElement>
  ) => void;
  getElementsAtEvent?: (
    elements: InteractionItem[],
    event: React.MouseEvent<HTMLCanvasElement>
  ) => void;
  height?: number;
  id?: string;
  options?: ChartOptions;
  plugins?: Plugin[];
  redraw?: boolean;
  type?: ChartType;
  width?: number;
  wrapper?: boolean;
}

type ForwardedRef<T> = ((instance: T | null) => void) | MutableRefObject<T | null> | null;

const reforwardRef = <T,>(ref: ForwardedRef<T>, value: T | null) => {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
};

export const Chart = forwardRef<ChartJS | undefined, ChartProps>(
  (
    {
      className,
      customTooltips = true,
      data,
      id,
      fallbackContent,
      getDatasetAtEvent,
      getElementAtEvent,
      getElementsAtEvent,
      height = 150,
      options,
      plugins = [],
      redraw = false,
      type = "bar",
      width = 300,
      wrapper = true,
      ...rest
    },
    ref
  ) => {
    ChartJS.register(...registerables);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const chartRef = useRef<ChartJS<
      keyof ChartTypeRegistry,
      (number | [number, number] | Point | BubbleDataPoint | null)[],
      unknown
    > | null>(null); // Changed from undefined to null

    const computedData = useMemo(() => {
      if (typeof data === "function") {
        return canvasRef.current ? data(canvasRef.current) : { datasets: [] };
      }

      return merge({}, data);
    }, [data]);

    const computedOptions = useMemo(() => {
      return customTooltips
        ? merge({}, options, {
            plugins: {
              tooltip: {
                enabled: false,
                mode: "index",
                position: "nearest",
                external: cuiCustomTooltips,
              },
            },
          })
        : options;
    }, [options, customTooltips]);

    const renderChart = () => {
      if (!canvasRef.current) return;

      chartRef.current = new ChartJS(canvasRef.current, {
        type,
        data: computedData,
        options: computedOptions,
        plugins,
      });

      reforwardRef(ref, chartRef.current);
    };

    const handleOnClick = (e: any) => {
      if (!chartRef.current) return;

      getDatasetAtEvent &&
        getDatasetAtEvent(
          chartRef.current.getElementsAtEventForMode(e, "dataset", { intersect: true }, false),
          e
        );
      getElementAtEvent &&
        getElementAtEvent(
          chartRef.current.getElementsAtEventForMode(e, "nearest", { intersect: true }, false),
          e
        );
      getElementsAtEvent &&
        getElementsAtEvent(
          chartRef.current.getElementsAtEventForMode(e, "index", { intersect: true }, false),
          e
        );
    };

    const updateChart = () => {
      if (!chartRef.current) return;

      if (options) {
        chartRef.current.options = { ...computedOptions };
      }

      if (!chartRef.current.config.data) {
        chartRef.current.config.data = computedData;
        chartRef.current.update();
        return;
      }

      const { datasets: newDataSets = [], ...newChartData } = computedData;
      const { datasets: currentDataSets = [] } = chartRef.current.config.data;

      assign(chartRef.current.config.data, newChartData);
      chartRef.current.config.data.datasets = newDataSets.map((newDataSet: any) => {
        const currentDataSet = find(
          currentDataSets,
          (d) => d.label === newDataSet.label && d.type === newDataSet.type
        );

        if (!currentDataSet || !newDataSet.data) return newDataSet;

        if (!currentDataSet.data) {
          currentDataSet.data = [];
        } else {
          currentDataSet.data.length = newDataSet.data.length;
        }

        assign(currentDataSet.data, newDataSet.data);

        return {
          ...currentDataSet,
          ...newDataSet,
          data: currentDataSet.data,
        };
      });

      chartRef.current.update();
    };

    const destroyChart = () => {
      reforwardRef(ref, null); // Explicitly handle null

      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null; // Explicitly set to null
      }
    };

    useEffect(() => {
      renderChart();

      return () => destroyChart();
    }, []);

    useEffect(() => {
      if (redraw) {
        destroyChart();
        setTimeout(() => {
          renderChart();
        }, 0);
      } else {
        updateChart();
      }
    }, [data, computedData]);

    const canvas = (ref: React.Ref<HTMLCanvasElement>) => (
      <canvas
        {...(!wrapper && className && { className })}
        data-testid="canvas"
        height={height}
        id={id}
        onClick={handleOnClick}
        ref={ref}
        role="img"
        width={width}
        {...rest}>
        {fallbackContent}
      </canvas>
    );

    return wrapper ? (
      <div className={classNames("chart-wrapper", className)} {...rest}>
        {canvas(canvasRef)}
      </div>
    ) : (
      canvas(canvasRef)
    );
  }
);

Chart.propTypes = {
  className: PropTypes.string,
  customTooltips: PropTypes.bool,
  data: PropTypes.any.isRequired,
  fallbackContent: PropTypes.node,
  getDatasetAtEvent: PropTypes.func,
  getElementAtEvent: PropTypes.func,
  getElementsAtEvent: PropTypes.func,
  height: PropTypes.number,
  id: PropTypes.string,
  options: PropTypes.object,
  plugins: PropTypes.array,
  redraw: PropTypes.bool,
  type: PropTypes.oneOf<ChartType>([
    "bar",
    "line",
    "scatter",
    "bubble",
    "pie",
    "doughnut",
    "polarArea",
    "radar",
  ]).isRequired,
  width: PropTypes.number,
  wrapper: PropTypes.bool,
};

Chart.displayName = "Chart";

export default Chart;
