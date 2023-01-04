import type { FC, PropsWithChildren } from 'react';
import React, { useId } from 'react';

export * from './shape';

type ChartProps<T> = {
  width: number;
  height: number;
  viewBox?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  data: T[];
};

type ClipPathProps = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
};
const ClipPath: FC<ClipPathProps> = ({ id, x, y, width, height }) => {
  return (
    <defs>
      <clipPath id={id}>
        <rect x={x} y={y} height={height} width={width} />
      </clipPath>
    </defs>
  );
};

export const ChartContext = React.createContext<{
  data: any[];
  width: number;
  height: number;
  xAxisHeight: number;
  yAxisWidth: number;
}>({ data: [], width: 0, height: 0, xAxisHeight: 0, yAxisWidth: 0 });

export const Chart = <T extends unknown>({
  width,
  height,
  viewBox,
  data,
  children,
}: PropsWithChildren<ChartProps<T>>) => {
  const svgView = viewBox || { width, height, x: 0, y: 0 };
  const id = useId();
  const clipPathId = `clip-path-${id}`;
  const ctx = React.useMemo(() => {
    return {
      data: data || [],
      width,
      height,
      xAxisHeight: 20,
      yAxisWidth: 40,
    };
  }, [data, height, width]);
  return (
    <ChartContext.Provider value={ctx}>
      <svg
        id={id}
        width={width}
        height={height}
        viewBox={`${svgView.x} ${svgView.y} ${svgView.width} ${svgView.height}`}
      >
        <ClipPath
          id={clipPathId}
          x={svgView.x}
          y={svgView.y}
          width={svgView.width}
          height={svgView.height}
        />
        {children}
      </svg>
    </ChartContext.Provider>
  );
};
