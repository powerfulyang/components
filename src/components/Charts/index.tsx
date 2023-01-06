import type { FC, PropsWithChildren } from 'react';
import React, { useId, useMemo } from 'react';
import { atomWithImmer } from 'jotai-immer';
import { ChartContext } from '@/components/Charts/ChartContext';

export * from './cartesian';
export { ChartContext };

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
  padding?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
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

export const Chart = <T extends unknown>({
  width,
  height,
  viewBox,
  data,
  children,
  padding,
}: PropsWithChildren<ChartProps<T>>) => {
  const svgView = viewBox || { width, height, x: 0, y: 0 };
  const id = useId();
  const clipPathId = `clip-path-${id}`;
  const atomInstance = useMemo(() => {
    return atomWithImmer({
      xAxis: {
        size: 0,
        dataKey: '',
      },
      yAxis: {
        size: 0,
        dataKeys: [],
      },
    });
  }, []);
  const ctx = useMemo(() => {
    return {
      atomInstance,
      width,
      height,
      padding: {
        top: padding?.top || 0,
        right: padding?.right || 0,
        bottom: padding?.bottom || 0,
        left: padding?.left || 0,
      },
      data,
    };
  }, [atomInstance, data, height, padding, width]);
  const clipPath = useMemo(() => {
    return {
      id: clipPathId,
      x: ctx.padding.left,
      y: ctx.padding.top,
      width: ctx.width - ctx.padding.left - ctx.padding.right,
      height: ctx.height - ctx.padding.top - ctx.padding.bottom,
    };
  }, [
    clipPathId,
    ctx.height,
    ctx.padding.bottom,
    ctx.padding.left,
    ctx.padding.right,
    ctx.padding.top,
    ctx.width,
  ]);
  return (
    <ChartContext.Provider value={ctx}>
      <svg
        id={id}
        width={width}
        height={height}
        viewBox={`${svgView.x} ${svgView.y} ${svgView.width} ${svgView.height}`}
      >
        <ClipPath {...clipPath} />
        {children}
      </svg>
    </ChartContext.Provider>
  );
};
